document.addEventListener('DOMContentLoaded', () => {
    // Recruiters Data with Logos
    const recruiters = [
        { name: "ZOHO", logo: "https://res.cloudinary.com/dbpyjdqt2/image/upload/zoho-logo-512_gvy0aw.png" },
        { name: "Adani", logo: "https://res.cloudinary.com/dbpyjdqt2/image/upload/Adani_2012_logo_iqeu3o.png" },
        { name: "Malabar Group", logo: "https://res.cloudinary.com/dbpyjdqt2/image/upload/images_scvzhq.png" },
        { name: "WHITECORN GROUP", logo: "" },
        { name: "Hotel Dimora Thiruvananthapuram", logo: "https://res.cloudinary.com/dbpyjdqt2/image/upload/images_1_ybiwrf.png" },
        { name: "Belstar Microfinance Limited (Muthoot Group)", logo: "https://res.cloudinary.com/dbpyjdqt2/image/upload/logo_vxufj4.png" },
        { name: "Muthoot Microfin Ltd", logo: "https://res.cloudinary.com/dbpyjdqt2/image/upload/Muthoot-Fincorp-Logo-Vector.svg-_amjj03.png" },
        { name: "Professional Hospitality & Support Services", logo: "https://res.cloudinary.com/dbpyjdqt2/image/upload/logo_1_qvfplb.png" },
        { name: "Muralya Dairy Products Pvt Ltd", logo: "https://res.cloudinary.com/dbpyjdqt2/image/upload/FW0o61HVUAAPUJ3_tpvf7i.png" },
        { name: "PIONEER MOTORS", logo: "" },
        { name: "BSPioneer Vehicles And Services Pvt Ltd", logo: "" },
        { name: "LIFE CARE", logo: "" },
        { name: "Popular Motor World PVT LTD", logo: "https://res.cloudinary.com/dbpyjdqt2/image/upload/images_2_pnpkir.png" },
        { name: "Lemon Tree Premier Thiruvananthapuram", logo: "https://res.cloudinary.com/dbpyjdqt2/image/upload/5-1_qjj0sa.jpg" },
        { name: "Electa Energy Pvt Ltd", logo: "https://res.cloudinary.com/dbpyjdqt2/image/upload/2026-02-22_12_04_51_odrasu.png" },
        { name: "SWIGGY", logo: "https://res.cloudinary.com/dbpyjdqt2/image/upload/swiggy-logo_brandlogos.net_fplmb_c8o479.png" },
        { name: "Trinity SkillWorks Private Limited", logo: "" },
        { name: "Team waves", logo: "" },
        { name: "Ayur herbals", logo: "" },
        { name: "Info Apps", logo: "" }
    ];

    const sectors = [
        "Retail", "Manufacturing", "Distribution", "Logistics",
        "Hospitality", "Hotel", "Dairy", "Automobile",
        "Commercial Vehicle", "Energy", "Healthcare", "Hospital Management",
        "Banking", "Financial Services", "Insurance",
        "MFI-NBFC","Sales", "IT", "BPO Services", "Education", "Entertainment",
        "Delivery Services", "Pharmaceuticals", "Construction"
    ];

    // Populate Year of Passing Dropdown (2026 to 1980)
    const yearSelect = document.getElementById('yearOfPassing');
    if (yearSelect) {
        for (let year = 2026; year >= 1980; year--) {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            yearSelect.appendChild(option);
        }
    }

    // Populate Recruiter Carousel (Train style)
    const track = document.getElementById('recruiters-track');

    function createLogoCard(company) {
        const div = document.createElement('div');
        div.className = 'logo-card';
        if (company.logo) {
            div.innerHTML = `<img src="${company.logo}" alt="${company.name}">`;
        } else {
            div.innerHTML = `<span>${company.name}</span>`;
        }
        return div;
    }

    // Double the items for infinite scroll effect
    [...recruiters, ...recruiters].forEach(company => {
        track.appendChild(createLogoCard(company));
    });

    // Populate Sectors on Landing Page
    const landingSectorsList = document.getElementById('sectors-list');
    sectors.forEach(name => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `<div class="card-icon">${name.charAt(0)}</div><span>${name}</span>`;
        if (landingSectorsList) landingSectorsList.appendChild(div);
    });

    // Populate Sectors as Checkboxes
    const sectorContainer = document.getElementById('sector-checkboxes');
    sectors.forEach(name => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="checkbox" name="preferredSector" value="${name}"> ${name}`;
        sectorContainer.appendChild(label);
    });

    // Sector Checkbox Limit (Max 3)
    sectorContainer.addEventListener('change', () => {
        const checked = sectorContainer.querySelectorAll('input:checked');
        if (checked.length >= 3) {
            sectorContainer.querySelectorAll('input:not(:checked)').forEach(cb => cb.disabled = true);
        } else {
            sectorContainer.querySelectorAll('input').forEach(cb => cb.disabled = false);
        }
    });

    // Age Auto-calculation
    const dobInput = document.getElementById('dob');
    const ageInput = document.getElementById('age');

    dobInput.addEventListener('change', () => {
        if (!dobInput.value) return;
        const dob = new Date(dobInput.value);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        ageInput.value = age;
    });

    // Employment Status Toggle Logic
    const toggle = document.getElementById('employment-status-toggle');
    const expDetails = document.getElementById('experience-details');
    const expInputs = expDetails.querySelectorAll('input, select');

    toggle.addEventListener('change', (e) => {
        if (e.target.value === 'Experienced') {
            expDetails.classList.remove('hidden');
            expInputs.forEach(input => input.required = true);
        } else {
            expDetails.classList.add('hidden');
            expInputs.forEach(input => input.required = false);
        }
    });

    // Success Modal Logic
    const modal = document.getElementById('successModal');
    const downloadBtn = document.getElementById('downloadAdmitCard');
    const closeModal = document.getElementById('closeModal');

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.classList.remove('show');
        });
    }

    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            const element = document.getElementById('admitCardPrint');
            const regId = document.getElementById('displayRegId').innerText;

            // Fix: Scroll to top to ensure capturing the modal area correctly
            window.scrollTo(0, 0);

            const opt = {
                margin: 0.5,
                filename: `KASE_AdmitCard_${regId.replace(/\//g, '_')}.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: {
                    scale: 2,
                    useCORS: true,
                    letterRendering: true,
                    scrollY: 0,
                    scrollX: 0
                },
                jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
            };

            downloadBtn.innerText = 'Generating PDF...';
            downloadBtn.disabled = true;

            html2pdf().from(element).set(opt).save().then(() => {
                downloadBtn.innerText = 'Download Admit Card (PDF)';
                downloadBtn.disabled = false;
            });
        });
    }

    // Form Submission to Google Sheet
    const form = document.getElementById('placementForm');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyYGskWMk16ibanumSnjuoI5vO4k88b67UceocRrzMk3awwOSYYEOdbaefB5JfiSro/exec';

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Visual feedback
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;
        submitBtn.disabled = true;
        submitBtn.innerText = 'Submitting...';

        const formData = new FormData(form);
        const data = {};
        const preferredSectors = [];

        formData.forEach((value, key) => {
            if (key === 'preferredSector') {
                preferredSectors.push(value);
            } else if (key === 'location') {
                if (!data[key]) data[key] = [];
                data[key].push(value);
            } else {
                data[key] = value;
            }
        });

        // Send Address fields individually to GAS
        data.houseInfo = formData.get('houseInfo') || "";
        data.place = formData.get('place') || "";
        data.postOffice = formData.get('postOffice') || "";
        data.panchayat = formData.get('panchayat') || "";

        // Combine for Admit Card display
        const addressParts = [data.houseInfo, data.place, data.postOffice, data.panchayat].filter(p => p);
        const displayAddress = addressParts.join(', ');

        // Split sectors into 3 separate fields (for sheet columns)
        data.sector1 = preferredSectors[0] || "";
        data.sector2 = preferredSectors[1] || "";
        data.sector3 = preferredSectors[2] || "";

        // Join location array
        if (data.location) data.location = data.location.join(', ');

        if (scriptURL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL' || scriptURL === "") {
            alert('Setup Error: Please configure the scriptURL in script.js');
            submitBtn.disabled = false;
            submitBtn.innerText = originalText;
            return;
        }

        fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                // Populate Admit Card View
                document.getElementById('displayRegId').innerText = result.regId || "KASE/PD/NM/0000";
                document.getElementById('displayName').innerText = data.fullName;
                document.getElementById('displayQual').innerText = data.qualification;
                document.getElementById('displayAddress').innerText = displayAddress;
                document.getElementById('displaySectors').innerText = preferredSectors.join(', ');

                modal.classList.add('show');
                form.reset();
                expDetails.classList.add('hidden');
                submitBtn.disabled = false;
                submitBtn.innerText = originalText;
            })
            .catch(error => {
                console.error('Submission Error:', error);
                alert('Submission Error: Could not connect to the Google Sheet. Please check your Web App URL and deployment settings.');
                submitBtn.disabled = false;
                submitBtn.innerText = originalText;
            });
    });
});


