const firebaseConfig = {
    apiKey: "AIzaSyARoLteIbD8oFPEtKJ3ZvhxkiOHNgfC-I4",
    authDomain: "placements2026-free.firebaseapp.com",
    projectId: "placements2026-free",
    storageBucket: "placements2026-free.firebasestorage.app",
    messagingSenderId: "672350914241",
    appId: "1:672350914241:web:171f23d75e76a96f103640"
};

// Initialize Firebase (Compatibility Mode)
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

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
        { name: "Info Apps", logo: "" },
        { name: "Digitide", logo: "" },
        { name: "Teleperformance", logo: "" },
        { name: "Quess", logo: "" },
        { name: "IIIC", logo: "" },
        { name: "Zudio", logo: "" },
        { name: "iCloudhomes Pvt Ltd", logo: "" },
        { name: "HDFC LIFE", logo: "" },
        { name: "ODEPC", logo: "" }
    ];

    const sectors = [
        "Retail", "Manufacturing", "Distribution", "Logistics",
        "Hospitality", "Hotel", "Dairy", "Automobile",
        "Commercial Vehicle", "Energy", "Healthcare", "Hospital Management",
        "Banking", "Financial Services", "Insurance",
        "MFI-NBFC", "Sales", "IT", "BPO Services", "Education", "Entertainment",
        "Delivery Services", "Pharmaceuticals", "Construction"
    ];

    const sectorIcons = {
        "Retail": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
        "Manufacturing": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 4.4 3.6 8 8 8s8-3.6 8-8Z"/><path d="M20 10h2"/><path d="M2 10h2"/><path d="M12 2v2"/><path d="M12 18v2"/><path d="M17 4.9l1.4 1.4"/><path d="M5.6 17.7l1.4 1.4"/><path d="M18.4 17.7l-1.4 1.4"/><path d="M7 4.9L5.6 6.3"/></svg>`,
        "Distribution": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22.5V12"/></svg>`,
        "Logistics": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polyline points="16 8 20 8 23 11 23 16 16 16"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
        "Hospitality": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`,
        "Hotel": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></svg>`,
        "Dairy": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 2h10l1 4v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6l1-4Z"/><path d="M7 6h10"/><path d="M10 11h4"/><path d="M10 15h4"/></svg>`,
        "Automobile": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>`,
        "Commercial Vehicle": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polyline points="16 8 20 8 23 11 23 16 16 16"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
        "Energy": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m13 2-2 10h3L11 22"/></svg>`,
        "Healthcare": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
        "Hospital Management": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M14 2v4"/><path d="M10 2v4"/><path d="M3 10h18"/></svg>`,
        "Banking": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="17" width="20" height="3"/><path d="M10 17V11"/><path d="M14 17V11"/><path d="M6 17V11"/><path d="M18 17V11"/><path d="M2 11l10-8 10 8Z"/></svg>`,
        "Financial Services": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
        "Insurance": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>`,
        "MFI-NBFC": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><rect x="2" y="17" width="20" height="3"/><path d="M10 17V11"/><path d="M14 17V11"/></svg>`,
        "Sales": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
        "IT": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
        "BPO Services": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18c.66 2 2.33 3 5 3 2.66 0 4.33-1 5-3"/><path d="M8 11V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a4 4 0 0 0 8 0"/><path d="M22 13V6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v7a4 4 0 0 0 8 0"/></svg>`,
        "Education": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
        "Entertainment": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>`,
        "Delivery Services": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polyline points="16 8 20 8 23 11 23 16 16 16"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
        "Pharmaceuticals": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>`,
        "Construction": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="8" rx="1"/><path d="M17 14v7"/><path d="M7 14v7"/><path d="M17 3v3"/><path d="M7 3v3"/><path d="M10 14 2.3 6.3"/><path d="m14 14 7.7-7.7"/></svg>`
    };

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

    function createSectorCard(name) {
        const div = document.createElement('div');
        div.className = 'logo-card';
        const iconContent = sectorIcons[name] || name.charAt(0);
        div.innerHTML = `<div class="card-icon">${iconContent}</div><span>${name}</span>`;
        return div;
    }

    // Double the items for infinite scroll effect
    if (track) {
        [...recruiters, ...recruiters].forEach(company => {
            track.appendChild(createLogoCard(company));
        });
    }

    // Populate Sectors on Landing Page (Dual Carousel)
    const sectorsTrack1 = document.getElementById('sectors-track-1');
    const sectorsTrack2 = document.getElementById('sectors-track-2');

    if (sectorsTrack1 && sectorsTrack2) {
        const half = Math.ceil(sectors.length / 2);
        const row1 = sectors.slice(0, half);
        const row2 = sectors.slice(half);

        [...row1, ...row1].forEach(name => sectorsTrack1.appendChild(createSectorCard(name)));
        [...row2, ...row2].forEach(name => sectorsTrack2.appendChild(createSectorCard(name)));
    }

    // Stats Counter Animation
    const stats = [
        { id: 'stat-companies', target: 100, suffix: '+' },
        { id: 'stat-vacancies', target: 1000, suffix: '+' },
        { id: 'stat-package', target: 10, suffix: ' LPA' }
    ];

    function animateValue(obj, start, end, duration, suffix) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start) + suffix;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    const observerOptions = {
        threshold: 0.5
    };

    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                stats.forEach(stat => {
                    const el = document.getElementById(stat.id);
                    if (el) animateValue(el, 0, stat.target, 2000, stat.suffix);
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const statsSection = document.querySelector('.stats');
    if (statsSection) statsObserver.observe(statsSection);

    // Populate Sectors as Checkboxes
    const sectorContainer = document.getElementById('sector-checkboxes');
    if (sectorContainer) {
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
    }

    // Age Auto-calculation
    const dobInput = document.getElementById('dob');
    const ageInput = document.getElementById('age');

    if (dobInput && ageInput) {
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
    }

    // Employment Status Toggle Logic
    const toggle = document.getElementById('employment-status-toggle');
    const expDetails = document.getElementById('experience-details');

    if (toggle && expDetails) {
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
    }

    // Success Modal Logic
    const modal = document.getElementById('successModal');
    const downloadBtn = document.getElementById('downloadAdmitCard');
    const closeModal = document.getElementById('closeModal');

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            modal.classList.remove('show');
            document.body.style.overflow = ''; // Unlock scroll
        });
    }

    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            const element = document.getElementById('admitCardPrint');
            const regIdEl = document.getElementById('displayRegId');
            const regId = regIdEl ? regIdEl.innerText : "ADMIT_CARD";

            window.scrollTo(0, 0);

            const opt = {
                margin: 0.5,
                filename: `KASE_AdmitCard_${regId.replace(/\//g, '_')}.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 3, useCORS: true, letterRendering: true, scrollY: 0, scrollX: 0 },
                jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
            };

            const originalText = downloadBtn.innerText;
            downloadBtn.innerText = 'Generating PDF...';
            downloadBtn.disabled = true;

            html2pdf().from(element).set(opt).save().then(() => {
                downloadBtn.innerText = originalText;
                downloadBtn.disabled = false;
            }).catch(err => {
                console.error("PDF Generate Error:", err);
                downloadBtn.innerText = originalText;
                downloadBtn.disabled = false;
            });
        });
    }

    // --- Validation Helpers ---
    function showError(input, message) {
        if (!input) return;
        input.classList.add('error-input');
        const parent = input.closest('.form-group');
        if (!parent) return;
        let hint = parent.querySelector('.error-hint');
        if (!hint) {
            hint = document.createElement('span');
            hint.className = 'error-hint';
            parent.appendChild(hint);
        }
        hint.innerText = message;
    }

    function clearErrors() {
        document.querySelectorAll('.error-input').forEach(el => el.classList.remove('error-input'));
        document.querySelectorAll('.error-hint').forEach(el => el.remove());
    }

    // Form Submission Logic
    const form = document.getElementById('placementForm');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyYGskWMk16ibanumSnjuoI5vO4k88b67UceocRrzMk3awwOSYYEOdbaefB5JfiSro/exec';

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            clearErrors();

            // 1. Manual Validation Check
            if (!form.checkValidity()) {
                const firstInvalid = form.querySelector(':invalid');
                if (firstInvalid) {
                    firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    // Show errors for all invalid fields
                    form.querySelectorAll(':invalid').forEach(field => {
                        const group = field.closest('.form-group');
                        const labelEl = group ? group.querySelector('label') : null;
                        const label = labelEl ? labelEl.innerText.replace('(Required)', '').trim() : "This field";
                        showError(field, `${label} is required or invalid`);
                    });
                }
                return;
            }

            // Visual feedback
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            submitBtn.disabled = true;
            submitBtn.innerText = 'Verifying...';

            const formData = new FormData(form);
            const data = { action: 'register' };
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

            const mobileNum = data.mobile;

            try {
                // 2. CHECK IF MOBILE EXISTS (To prevent duplicates)
                const mobileCheck = await db.collection("users").doc(mobileNum).get();
                if (mobileCheck.exists) {
                    showError(form.querySelector('#mobile'), 'This mobile number is already registered.');
                    form.querySelector('#mobile').scrollIntoView({ behavior: 'smooth', block: 'center' });
                    submitBtn.disabled = false;
                    submitBtn.innerText = originalText;
                    return;
                }

                submitBtn.innerText = 'Registering...';

                // Send Address fields individually to GAS (Matches Apps Script expectation)
                data.houseInfo = formData.get('houseInfo') || "";
                data.place = formData.get('place') || "";
                data.PinCode = formData.get('PinCode') || "";
                data.panchayat = formData.get('panchayat') || "";

                // Split sectors into 3 separate fields (for sheet columns)
                data.sector1 = preferredSectors[0] || "";
                data.sector2 = preferredSectors[1] || "";
                data.sector3 = preferredSectors[2] || "";

                // Join location array
                if (data.location) data.location = data.location.join(', ');

                // Explicitly set PWD field
                data.pwd = formData.get('pwd') || "No";

                // 3. Register in Google Sheets (Get official regId)
                const sheetsRes = await fetch(scriptURL, { method: 'POST', body: JSON.stringify(data) });
                const result = await sheetsRes.json();

                if (!result.success) throw new Error(result.error || 'Google Sheets registration failed');

                const regId = result.regId;
                const fakeEmail = mobileNum + "@placement.com";

                // 4. Create Firebase Auth (Use phone-based email to ignore physical email conflicts)
                try {
                    await auth.createUserWithEmailAndPassword(fakeEmail, data.password);
                } catch (authError) {
                    // If auth already exists but firestore missed it, we ignore and proceed to profile update
                    if (authError.code !== 'auth/email-already-in-use') throw authError;
                }

                // 5. Store user profile in Firestore (Including the official regId!)
                await db.collection("users").doc(mobileNum).set({
                    regId: regId,
                    fullName: data.fullName,
                    gender: data.gender,
                    mobile: mobileNum,
                    email: data.email,
                    district: data.district,
                    qualification: data.qualification,
                    pwd: data.pwd,
                    regDate: new Date().toISOString()
                });

                // Update Success Modal Content
                if (document.getElementById('displayRegId')) {
                    document.getElementById('displayRegId').innerText = regId;
                }

                // Update Admit Card Content
                const admitFields = {
                    'displayRegId': regId,
                    'displayName': data.fullName,
                    'displayGender': data.gender,
                    'displayMobile': mobileNum,
                    'displayEmail': data.email,
                    'displayQualification': data.qualification,
                    'displayDistrict': data.district
                };

                for (const [id, value] of Object.entries(admitFields)) {
                    const el = document.getElementById(id);
                    if (el) el.innerText = value;
                }

                const addressEl = document.getElementById('displayAddress');
                if (addressEl) {
                    addressEl.innerHTML = [
                        data.houseInfo, data.place, data.PinCode,
                        data.panchayat, data.district
                    ].filter(p => p).join('<br>');
                }

                // Success Modal and Reset
                modal.style.display = 'flex';
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
                form.reset();
                if (expDetails) expDetails.classList.add('hidden');

                submitBtn.disabled = false;
                submitBtn.innerText = originalText;

            } catch (error) {
                console.error('Registration Error:', error);
                alert('Registration Error: ' + error.message);
                submitBtn.disabled = false;
                submitBtn.innerText = originalText;
            }
        });
    }
});
