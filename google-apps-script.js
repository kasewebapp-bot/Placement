/**
 * Google Apps Script to handle Placement Drive Registrations.
 * 
 * Main Spreadsheet ID: 1SYNWdSR0Xqp0P2WsD42drrUINwoRhBJ0VRRoBi6CAIg
 */

function doPost(e) {
    try {
        const data = JSON.parse(e.postData.contents);
        const action = data.action || "register";

        // EXPLICIT IDs for stability 
        const mainSsId = "1SYNWdSR0Xqp0P2WsD42drrUINwoRhBJ0VRRoBi6CAIg";
        const ss = SpreadsheetApp.openById(mainSsId);

        // Find the correct sheet (looks for "Candidate" or "Registration")
        let mainSheet = ss.getSheets()[0];
        const sheets = ss.getSheets();
        for (let s of sheets) {
            const name = s.getName().toLowerCase();
            if (name.includes("cand") || name.includes("reg")) {
                mainSheet = s;
                break;
            }
        }

        if (action === "register") {
            return registerCandidate(mainSheet, data);
        } else if (action === "login") {
            return loginCandidate(mainSheet, data);
        } else if (action === "getProfile") {
            return getProfile(mainSheet, data);
        } else if (action === "updateProfile") {
            return updateProfile(mainSheet, data);
        } else if (action === "applyJobs") {
            return applyJobs(mainSheet, data);
        } else if (action === "checkApplicationStatus") {
            return checkApplicationStatus(data);
        } else if (action === "debugInfo") {
            // ...
            return getDebugInfo(ss, mainSheet);
        }

    } catch (f) {
        return createResponse({ success: false, error: f.toString() });
    }
}

function registerCandidate(sheet, data) {
    const mobileValue = data.mobile.toString().trim();
    const existingRow = findRowByMobile(sheet, mobileValue);
    if (existingRow > -1) {
        return createResponse({ success: false, error: "Mobile number already registered." });
    }

    const lastRow = sheet.getLastRow();
    let nextNum = 1;
    if (lastRow > 1) {
        const lastId = sheet.getRange(lastRow, 1).getValue();
        if (typeof lastId === 'string' && lastId.includes('/')) {
            const parts = lastId.split('/');
            nextNum = parseInt(parts[parts.length - 1]) + 1;
        } else if (typeof lastId === 'number') {
            nextNum = lastId + 1;
        }
    }
    const regId = "KASE/PD/NM/" + nextNum.toString().padStart(4, '0');

    if (lastRow === 0) {
        const headers = [
            "Registration ID", "Timestamp", "Full Name", "Gender", "DOB", "Age", "Mobile",
            "WhatsApp", "Email", "House Name/No.", "Place", "Post Office", "Panchayat/Municipality",
            "District", "Preferred Location", "Highest Qualification", "Specialization", "Year of Passing", "Grade",
            "Emp Status", "Current Role", "Experience", "Prev Company",
            "Expected Salary", "Notice Period", "Sector 1", "Sector 2", "Sector 3", "Password", "Applied Job 1", "Applied Job 2", "Applied Job 3", "Welcome Email Sent"
        ];
        sheet.appendRow(headers);
        sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#f3f3f3");
    }

    const rowData = [
        regId, new Date(), data.fullName, data.gender, data.dob, data.age, mobileValue,
        data.whatsapp, data.email, data.houseInfo, data.place, data.postOffice, data.panchayat,
        data.district, data.location, data.qualification, data.specialization, data.yearOfPassing, data.percentage,
        data.employed, data.currentRole || "N/A", data.experience || "N/A", data.prevCompany || "N/A",
        data.expectedSalary || "N/A", data.noticePeriod || "N/A", data.sector1, data.sector2, data.sector3, data.password, "", "", "", "Pending"
    ];
    sheet.appendRow(rowData);

    const emailSuccess = sendWelcomeEmailInternal(data.email, data.fullName, regId, mobileValue, data.password);
    const welcomeCol = findColumnByName(sheet, "Welcome Email Sent");
    if (welcomeCol > 0) {
        sheet.getRange(sheet.getLastRow(), welcomeCol).setValue(emailSuccess ? "Sent" : "Failed");
    }

    return createResponse({ success: true, regId: regId });
}

function loginCandidate(sheet, data) {
    const mobileValue = data.mobile.toString().trim();
    const rowIdx = findRowByMobile(sheet, mobileValue);
    if (rowIdx === -1) return createResponse({ success: false, error: "Candidate not found." });

    const rowData = sheet.getRange(rowIdx, 1, 1, sheet.getLastColumn()).getValues()[0];
    const passCol = findColumnByName(sheet, "Password");
    const storedPassword = (passCol > 0) ? rowData[passCol - 1] : rowData[28];

    if (storedPassword.toString().trim() === data.password.toString().trim()) {
        const nameCol = findColumnByName(sheet, "Full Name");
        const genderCol = findColumnByName(sheet, "Gender");
        return createResponse({
            success: true,
            regId: rowData[0],
            fullName: rowData[(nameCol > 0 ? nameCol - 1 : 2)],
            gender: rowData[(genderCol > 0 ? genderCol - 1 : 3)]
        });
    } else {
        return createResponse({ success: false, error: "Invalid password." });
    }
}

function getProfile(sheet, data) {
    const rowIdx = findRowByMobile(sheet, data.mobile);
    if (rowIdx === -1) return createResponse({ success: false, error: "Candidate not found." });

    const rowData = sheet.getRange(rowIdx, 1, 1, sheet.getLastColumn()).getValues()[0];
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getDisplayValues()[0];

    const profile = {};
    const fieldMapping = {
        "fullName": "Full Name", "gender": "Gender", "dob": "DOB", "age": "Age", "mobile": "Mobile",
        "whatsapp": "WhatsApp", "email": "Email", "houseInfo": "House Name/No.", "place": "Place",
        "postOffice": "Post Office", "panchayat": "Panchayat/Municipality", "district": "District",
        "location": "Preferred Location", "qualification": "Highest Qualification", "specialization": "Specialization",
        "yearOfPassing": "Year of Passing", "percentage": "Grade", "employed": "Emp Status",
        "currentRole": "Current Role", "experience": "Experience", "prevCompany": "Prev Company",
        "expectedSalary": "Expected Salary", "noticePeriod": "Notice Period",
        "sector1": "Sector 1", "sector2": "Sector 2", "sector3": "Sector 3"
    };

    for (let key in fieldMapping) {
        const colIdx = findColumnByName(sheet, fieldMapping[key]);
        if (colIdx > 0) profile[key] = rowData[colIdx - 1];
    }

    return createResponse({ success: true, profile: profile });
}

function updateProfile(sheet, data) {
    const rowIdx = findRowByMobile(sheet, data.mobile);
    if (rowIdx === -1) return createResponse({ success: false, error: "Candidate not found." });

    const fieldMapping = {
        "fullName": "Full Name", "gender": "Gender", "dob": "DOB", "age": "Age",
        "whatsapp": "WhatsApp", "email": "Email", "houseInfo": "House Name/No.", "place": "Place",
        "postOffice": "Post Office", "panchayat": "Panchayat/Municipality", "district": "District",
        "location": "Preferred Location", "qualification": "Highest Qualification", "specialization": "Specialization",
        "yearOfPassing": "Year of Passing", "percentage": "Grade", "employed": "Emp Status",
        "currentRole": "Current Role", "experience": "Experience", "prevCompany": "Prev Company",
        "expectedSalary": "Expected Salary", "noticePeriod": "Notice Period",
        "sector1": "Sector 1", "sector2": "Sector 2", "sector3": "Sector 3"
    };

    for (let key in fieldMapping) {
        if (data[key] !== undefined) {
            const col = findColumnByName(sheet, fieldMapping[key]);
            if (col > 0) sheet.getRange(rowIdx, col).setValue(data[key]);
        }
    }

    return createResponse({ success: true });
}

function applyJobs(mainSheet, data) {
    try {
        const appSsId = "12IcAzz9dPhOSQergDkUiEya2IjLkbSqiRBZrMfWZpgk";
        const appSs = SpreadsheetApp.openById(appSsId);
        let appSheet = appSs.getSheets()[0];

        if (appSheet.getLastRow() === 0) {
            const headers = [
                "Timestamp", "ID No", "Full Name", "Gender", "Mobile",
                "Company", "Job Role", "Company", "Job Role",
                "Company", "Job Role", "Company", "Job Role"
            ];
            appSheet.appendRow(headers);
            appSheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#e2e8f0");
        }

        const jobs = data.selectedJobs || [];
        const rowData = [new Date(), data.regId, data.fullName, data.gender, data.mobile];

        for (let i = 0; i < 4; i++) {
            if (jobs[i]) {
                const parts = jobs[i].split(" - ");
                rowData.push(parts[0] || ""); rowData.push(parts[1] || "");
            } else {
                rowData.push(""); rowData.push("");
            }
        }

        appSheet.appendRow(rowData);
        return createResponse({ success: true });
    } catch (e) {
        return createResponse({ success: false, error: "Application failed: " + e.toString() });
    }
}

function checkApplicationStatus(data) {
    try {
        const appSsId = "12IcAzz9dPhOSQergDkUiEya2IjLkbSqiRBZrMfWZpgk";
        const appSs = SpreadsheetApp.openById(appSsId);
        const appSheet = appSs.getSheets()[0];
        const rows = appSheet.getDataRange().getValues();
        const regId = data.regId;

        for (let i = 1; i < rows.length; i++) {
            if (rows[i][1] === regId) { // Column B is ID No
                const row = rows[i];
                const jobs = [];
                // Check the 4 job slots (Columns F-G, H-I, J-K, L-M)
                for (let j = 5; j <= 11; j += 2) {
                    if (row[j] && row[j + 1]) {
                        jobs.push({
                            company: row[j],
                            role: row[j + 1],
                            status: "Pending" // Hardcoded status as requested
                        });
                    }
                }
                return createResponse({ success: true, applied: true, jobs: jobs });
            }
        }
        return createResponse({ success: true, applied: false });
    } catch (e) {
        return createResponse({ success: false, error: e.toString() });
    }
}

function findRowByMobile(sheet, mobile) {
    const lastRow = sheet.getLastRow();
    if (lastRow < 2) return -1;

    const colIdx = findColumnByName(sheet, "Mobile");
    if (colIdx === -1) return -1;

    const mobiles = sheet.getRange(2, colIdx, lastRow - 1, 1).getDisplayValues();
    const searchMobile = mobile.toString().trim();

    for (let i = 0; i < mobiles.length; i++) {
        const sheetMobile = mobiles[i][0].toString().trim();
        if (sheetMobile === searchMobile) return i + 2;
        if (sheetMobile.length >= 10 && searchMobile.length >= 10) {
            if (sheetMobile.slice(-10) === searchMobile.slice(-10)) return i + 2;
        }
    }
    return -1;
}

function findColumnByName(sheet, name) {
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getDisplayValues()[0];
    for (let i = 0; i < headers.length; i++) {
        if (headers[i].toLowerCase().trim() === name.toLowerCase().trim()) return i + 1;
    }
    return -1;
}

function getDebugInfo(ss, sheet) {
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getDisplayValues()[0];
    return createResponse({
        spreadsheetName: ss.getName(),
        sheetName: sheet.getName(),
        rowCount: sheet.getLastRow(),
        headers: headers,
        mobileColIndex: findColumnByName(sheet, "Mobile"),
        passwordColIndex: findColumnByName(sheet, "Password")
    });
}

function sendWelcomeEmailInternal(email, name, regId, username, password) {
    if (!email || email.indexOf('@') === -1) return false;
    try {
        MailApp.sendEmail({
            to: email,
            subject: "Placement Drive 2026 - Registration Successful",
            htmlBody: `<div style="font-family: Arial; line-height: 1.6; color: #333;">
                        <h2 style="color: #2563eb;">Hi ${name},</h2>
                        <p>Welcome to <b>Placement Drive 2026</b>, organized by <b>KASE in association with ODEPEC</b>. Your registration is successful.</p>
                        
                        <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; margin: 15px 0;">
                            <h3 style="margin-top: 0; color: #2563eb;">Event Details:</h3>
                            <p style="margin: 5px 0;"><b>Date:</b> 28th February 2026</p>
                            <p style="margin: 5px 0;"><b>Time:</b> 10:00 AM to 04:00 PM</p>
                            <p style="margin: 5px 0;"><b>Venue:</b> LBS Institute Of Technology for Women, Poojappura, Thiruvananthapuram</p>
                        </div>

                        <div style="background: #fff; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; margin: 15px 0;">
                            <h3 style="margin-top: 0; color: #10b981;">Login Credentials:</h3>
                            <p style="margin: 5px 0;"><b>Registration ID:</b> <span style="color: #2563eb;">${regId}</span></p>
                            <p style="margin: 5px 0;"><b>Login Username:</b> ${username}</p>
                            <p style="margin: 5px 0;"><b>Password:</b> ${password}</p>
                        </div>

                        <p>Please use these credentials to login at our portal and apply for your preferred jobs before the event.</p>
                        <p>Best Regards,<br><b>Team KASE & ODEPEC</b></p>
                       </div>`
        });
        return true;
    } catch (e) { return false; }
}

function createResponse(obj) {
    return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
    const action = e.parameter.action;
    if (action === "getVacancies") {
        try {
            const vacancySs = SpreadsheetApp.openById("1Twquj5TqGXNbuujPkonexHKNc6tQFfD4F3rM1SL6vu4");
            const vacancySheet = vacancySs.getSheets()[0];
            const rows = vacancySheet.getDataRange().getValues();
            const rawHeaders = rows[0];
            const vacancies = rows.slice(1).map(row => {
                const obj = {};
                rawHeaders.forEach((header, i) => {
                    const cleanKey = header.toString().trim();
                    if (cleanKey.includes("Organization")) obj.company = row[i];
                    else if (cleanKey.toLowerCase().includes("sector")) obj.sector = row[i];
                    else if (cleanKey.includes("Job Title")) obj.title = row[i];
                    else if (cleanKey.includes("Vacancies")) obj.vacancies = row[i];
                    else if (cleanKey.includes("Location")) obj.location = row[i];
                    else if (cleanKey.includes("Qualification")) obj.qualification = row[i];
                    else if (cleanKey.includes("Salary") || cleanKey.includes("CTC")) obj.salary = row[i];
                    else obj[cleanKey] = row[i];
                });
                return obj;
            });
            return createResponse(vacancies);
        } catch (err) { return createResponse({ error: err.toString() }); }
    }
}
