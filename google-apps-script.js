/**
 * Google Apps Script to handle Placement Drive Registrations.
 * 
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1SYNWdSR0Xqp0P2WsD42drrUINwoRhBJ0VRRoBi6CAIg/edit
 * 2. Go to Extensions > Apps Script.
 * 3. Delete any existing code and paste this code.
 * 4. Click 'Deploy' > 'New Deployment'.
 * 5. Select type 'Web App'.
 * 6. Set 'Execute as' to 'Me'.
 * 7. Set 'Who has access' to 'Anyone'.
 * 8. Click 'Deploy' and copy the 'Web App URL'.
 * 9. Paste this URL into your `script.js` at the `scriptURL` variable.
 */

function doPost(e) {
    try {
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
        const data = JSON.parse(e.postData.contents);

        // Generate Sequential ID: KASE/PD/NM/0001
        const lastRow = sheet.getLastRow();
        let nextNum = 1;
        if (lastRow > 1) {
            const lastId = sheet.getRange(lastRow, 1).getValue(); // Assuming ID is in Column A
            if (typeof lastId === 'string' && lastId.includes('/')) {
                const parts = lastId.split('/');
                nextNum = parseInt(parts[parts.length - 1]) + 1;
            }
        }
        const regId = "KASE/PD/NM/" + nextNum.toString().padStart(4, '0');

        // Create headers if they don't exist
        if (sheet.getLastRow() === 0) {
            const headers = [
                "Registration ID", "Timestamp", "Full Name", "Gender", "DOB", "Age", "Mobile",
                "WhatsApp", "Email", "House Name/No.", "Place", "Post Office", "Panchayat/Municipality",
                "District", "Preferred Location", "Highest Qualification", "Specialization", "Year of Passing", "Grade",
                "Emp Status", "Current Role", "Experience", "Prev Company",
                "Expected Salary", "Notice Period", "Sector 1", "Sector 2", "Sector 3"
            ];
            sheet.appendRow(headers);
            sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#f3f3f3");
        }

        // Append the data
        sheet.appendRow([
            regId,
            new Date(),
            data.fullName,
            data.gender,
            data.dob,
            data.age,
            data.mobile,
            data.whatsapp,
            data.email,
            data.houseInfo,
            data.place,
            data.postOffice,
            data.panchayat,
            data.district,
            data.location,
            data.qualification,
            data.specialization,
            data.yearOfPassing,
            data.percentage,
            data.employed,
            data.currentRole || "N/A",
            data.experience || "N/A",
            data.prevCompany || "N/A",
            data.expectedSalary || "N/A",
            data.noticePeriod || "N/A",
            data.sector1,
            data.sector2,
            data.sector3
        ]);

        const result = { success: true, regId: regId };
        return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
    } catch (f) {
        return ContentService.createTextOutput("Error: " + f.toString()).setMimeType(ContentService.MimeType.TEXT);
    }
}
