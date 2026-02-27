const csvData = `Employer,Job Title ,Sector,Qualification,Preferred Specialization / Trade,Experience If Required,Salary / CTC Range,Job Location,No. of  Vacancies
Malabar Group,Cashier & Billing Associates,Retail,Degree/Diploma,,1-2year/Freshers,Rs-15000-20000,"Trivandrum, Kochi, Thrisur, Kozhikode",10
Malabar Group,Administration asst,Manufacturing &Distribution,12th,,Freshers /Experienced,"12000 -15,500 (TA,Food,Accomodation,incetive)","Trivandrum,kollam,pathanamthitta,Ernakulam,Trissur,palakkad",10
Malabar Group,store asst,Manufacturing &Distribution,Degree/Diploma,,2 years,"12000 -15,500 (TA,Food,Accomodation,incetive)","Trivandrum,kollam,pathanamthitta,Ernakulam,Trissur,palakkad",10
WHITECORN GROUP,account asst,Manufacturing &Distribution,Degree/Diploma,,2 years,"15,500-60,500(TA,Food,Accomodation,incetive)","Trivandrum,kollam,pathanamthitta,Ernakulam,Trissur,palakkad",10
WHITECORN GROUP,factory asst,Manufacturing &Distribution,ITI/ITC/Diploma,"Iti,diploma",Freshers /Experienced,"12000 -15,500 (TA,Food,Accomodation,incetive)","Trivandrum,kollam,pathanamthitta,Ernakulam,Trissur,palakkad",10
WHITECORN GROUP,distribution asst,Manufacturing &Distribution,ITI/ITC/Diploma,"Iti,diploma",Freshers /Experienced,"12000 -15,500 (TA,Food,Accomodation,incetive)","Trivandrum,kollam,pathanamthitta,Ernakulam,Trissur,palakkad",15
WHITECORN GROUP,sales agent,Manufacturing &Distribution,ITI/ITC/Diploma,"Iti,diploma",Freshers /Experienced,"12000 -15,500 (TA,Food,Accomodation,incetive)","Trivandrum,kollam,pathanamthitta,Ernakulam,Trissur,palakkad",15
WHITECORN GROUP,packing staff,Manufacturing &Distribution,ITI/ITC/Diploma,"Iti,diploma",Freshers /Experienced,"12000 -15,500 (TA,Food,Accomodation,incetive)","Trivandrum,kollam,pathanamthitta,Ernakulam,Trissur,palakkad",10
WHITECORN GROUP,supervisor,Manufacturing &Distribution,BBA/MBA/PG,,3 years,"15,500-60,500(TA,Food,Accomodation,incetive)","Trivandrum,kollam,pathanamthitta,Ernakulam,Trissur,palakkad",20
WHITECORN GROUP,F & B associates,Hospitality,Hotel Management Degree/Diploma,Food & beverages,1 year and above,18000-20000,Trivandrum,3
Hotel Dimora Thiruvananthapuram,Front Office Associate,Hospitality,Hotel Management Degree/Diploma,Front Office Operation,1 year,18000-20000,"Trivandrum, Kozhikode",3
Hotel Dimora Thiruvananthapuram,General Technician,Hospitality,Diploma In Electrical/AC,Electric/AC,1 year,17000-19000,"Trivandrum, Kozhikode",2
Belstar Microfinance Limited (Muthoot Group),Sales Officer,MFI-NBFC,10th,Any,Freshers /Experienced,"15,150 -20,000","Kallambalam, Kumarapuram, Vellanad, Neyyattinkara, Kattakada",15
Muthoot Microfin Ltd,Field Officer,NBFC,12th,NA,Freshers,"25,000 Net Salary",Trivandrum,15
Muthoot Microfin Ltd,Housekeeping staff/ Hospital Cleaning staff,Manpower Outsource,10th below,,Freshers,14000-17000,Trivandrum,20
Professional Hospitality & Support Services,Security Guard,Manpower Outsource,10th,,Freshers,15000 to 17000,Trivandrum,15
Professional Hospitality & Support Services,Multitask Worker,Manpower Outsource,ITI/ITC/Diploma,Any trade,Freshers,14500 + ESI +EPF,Trivandrum,5
Muralya Dairy Products Pvt Ltd,Sales Promoter,Dairy,12th,(Female candidates with two wheeler license. Good communication skills ),1-2 years,15000 to 17000,Trivandrum,3
PIONEER MOTORS,HR Manager,AUTOMOBILE,MBA,,3 years,25000-30000,"Kaimanam,Vazuthacaud,Enjakkal ,Nedumangadu & Kaniyapuram",1
PIONEER MOTORS,HR Executive,AUTOMOBILE,MBA,,Freshers,10000-15000,"Kaimanam,Vazuthacaud,Enjakkal ,Nedumangadu & Kaniyapuram",1
PIONEER MOTORS,Asst Service Mananger,AUTOMOBILE,B Tech,Mechanical,3 years,25000-30000,"Kaimanam,Vazuthacaud,Enjakkal ,Nedumangadu & Kaniyapuram",1
PIONEER MOTORS,Showroom Advisor,AUTOMOBILE,12th,,Freshers,14000-16000,"Kaimanam,Vazuthacaud,Enjakkal ,Nedumangadu & Kaniyapuram",8
PIONEER MOTORS,Service Advisor,AUTOMOBILE,12th,ITI/Diploma,Freshers,14000-16000,"Kaimanam,Vazuthacaud,Enjakkal ,Nedumangadu & Kaniyapuram",4
PIONEER MOTORS,CRE,AUTOMOBILE,12th,,Freshers,14000-16000,"Kaimanam,Vazuthacaud,Enjakkal ,Nedumangadu & Kaniyapuram",3
PIONEER MOTORS,Front office executive,AUTOMOBILE,12th,,Freshers,14000-16000,"Kaimanam,Vazuthacaud,Enjakkal ,Nedumangadu & Kaniyapuram",2
PIONEER MOTORS,Technician,AUTOMOBILE,10th,Male candidate (up to age 50),3 years in Automobile Technician Field,16000-25000,"Kaimanam,Vazuthacaud,Enjakkal ,Nedumangadu & Kaniyapuram",5
"BS Pioneer Vehicles And Services Pvt Ltd, Tata Motors Commercial Vehicle Dealer",Sale executives,Commercial vehicle,12th,,Freshers,12000-18000,"Nalanchira,Attingal,Parassala",10
"BS Pioneer Vehicles And Services Pvt Ltd, Tata Motors Commercial Vehicle Dealer",Team leader,Commercial vehicle,Degree/Diploma,,Freshers,20000-30000,"Nalanchira,Attingal,Parassala",5
"BS Pioneer Vehicles And Services Pvt Ltd, Tata Motors Commercial Vehicle Dealer",Technician,Commercial vehicle,ITI/ITC/Diploma,,Freshers,8000-10000,"Nalanchira,Attingal,Parassala",5
LIFE CARE,Junior officer,Hospital Management,12th,,Freshers,25000,All Kerala,20
LIFE CARE,telecaller,Hospital Management,10th,,Freshers,13000,All Kerala,5
LIFE CARE,accountant,Hospital Management,Degree/Diploma,,Freshers /Experienced,18000,All Kerala,4
LIFE CARE,Driver,Hospital Management,10th,,Experienced,18000,All Kerala,2
LIFE CARE,supervisor (Store/Stock),Hospital Management,10th,,Freshers,18000,All Kerala,5
Popular Motor World PVT LTD,Sales executive,Automobile,12th,,Freshers /Experienced,15000-25000,"Kattakada, Karakkamandapam, Pappanamcode, Charachira, Varkala, Kazhakoottam, Jagathy",15
Popular Motor World PVT LTD,Technician,Automobile,12th,,Freshers /Experienced,12000-25000,"Kattakada, Karakkamandapam, Pappanamcode, Charachira, Varkala, Kazhakoottam, Jagathy",20
Popular Motor World PVT LTD,Team leader,Automobile,Degree/Diploma,,Freshers /Experienced,28000-40000,"Kattakada, Karakkamandapam, Pappanamcode, Charachira, Varkala, Kazhakoottam, Jagathy",4
Popular Motor World PVT LTD,CRE,Automobile,12th,,Freshers /Experienced,14000- 20000,"Kattakada, Karakkamandapam, Pappanamcode, Charachira, Varkala, Kazhakoottam, Jagathy",5
Popular Motor World PVT LTD,Service Adviser,Automobile,12th,,Freshers /Experienced,16000-35000,"Kattakada, Karakkamandapam, Pappanamcode, Charachira, Varkala, Kazhakoottam, Jagathy",7
Lemon Tree Premier Thiruvananthapuram,Housekeeping,Hotel,Degree/Diploma,PWD candidates only,Freshers /Experienced,18000,Thiruvananthapuram,1
Lemon Tree Premier Thiruvananthapuram,F&B Service,Hotel,Degree/Diploma,PWD candidates only,Freshers /Experienced,18000,Thiruvananthapuram,1
Lemon Tree Premier Thiruvananthapuram,Fron Office,Hotel,Degree/Diploma,PWD candidates only,Freshers /Experienced,18000,Thiruvananthapuram,1
Lemon Tree Premier Thiruvananthapuram,Food Production,Hotel,Degree/Diploma,PWD candidates only,Freshers /Experienced,18000,Thiruvananthapuram,1
Electa Energy Pvt Ltd,Technician G1,Energy,ITI/ITC/Diploma,"Electrical & Electronics industry, especially in energy sector",Freshers - 2 year Experienced,15000-25000,"Keltron Junction, Karakulam, Thiruvananthapuram",5
SWIGGY,Delivery partner,Delivery,NA,,NA,Upto 48000,"Pattom,thampanoor, kazhakoottam, technopark, neyyattinkara, kovalam, nedumangad",100
Trinity SkillWorks Private Limited,Associate Customer Service – International Voice Process,"BFSI, IT & BPO Services",Degree/Diploma,,Freshers /Experienced,28000-37000,"Trivandrum, ",40
Trinity SkillWorks Private Limited,Associate Technical Customer Support – International Voice Process,"BFSI, IT & BPO Services",Degree/Diploma,,Freshers /Experienced,19000-32000,Kochi,40
Trinity SkillWorks Private Limited,Customer Experience Specialist – Hindi,"BFSI, IT & BPO Services",Degree/Diploma,,Freshers /Experienced,19000-30000,Kochi,25
Trinity SkillWorks Private Limited,Customer Experience Specialist – Kannada,"BFSI, IT & BPO Services",Degree/Diploma,,Freshers /Experienced,19000-30000,Kochi,40
Trinity SkillWorks Private Limited,Customer Experience Specialist – Tamil,"BFSI, IT & BPO Services",Degree/Diploma,,Freshers /Experienced,19000-30000,Kochi,40
Trinity SkillWorks Private Limited,Customer Experience Specialist – Telugu,"BFSI, IT & BPO Services",Degree/Diploma,,Freshers /Experienced,19000-30000,Kochi,40
Trinity SkillWorks Private Limited,Business Support Executive,"BFSI, IT & BPO Services",Degree/Diploma,,Freshers /Experienced,21000-40000,"Trivandrum, Tiruvalla, Kollam",3
Trinity SkillWorks Private Limited,Financial Consultant,"BFSI, IT & BPO Services",UG/PG/MBA/MCom,Minimum education requirement for specific banks/financial roles,6 months – 5 years,19000-26000,Across Kerala,29
Trinity SkillWorks Private Limited,Junior Financial Consultant,"BFSI, IT & BPO Services",UG/PG/MBA/MCom,Minimum education requirement for specific banks/financial roles,6 months – 5 years,26000-32000,Across Kerala,10
Trinity SkillWorks Private Limited,Senior Financial Consultant,"BFSI, IT & BPO Services",UG/PG/MBA/MCom,Minimum education requirement for specific banks/financial roles,6 months – 5 years,32000-40000,Across Kerala,12
Trinity SkillWorks Private Limited,Assistant Manager Financial Consultant,"BFSI, IT & BPO Services",UG/PG/MBA/MCom,Minimum education requirement for specific banks/financial roles,6 months – 5 years,40000-60000,Across Kerala,6
Trinity SkillWorks Private Limited,NRI Financial Consultant,"BFSI, IT & BPO Services",UG/PG/MBA/MCom,Minimum education requirement for specific banks/financial roles,6 months – 5 years,30000-52000,Across Kerala,10
Trinity SkillWorks Private Limited,Equity Dealer,"BFSI, IT & BPO Services",UG/PG/MBA/MCom,Minimum education requirement for specific banks/financial roles,6 months – 5 years,21000-40000,Across Kerala,4
Trinity SkillWorks Private Limited,Commodity Dealer,"BFSI, IT & BPO Services",UG/PG/MBA/MCom,Minimum education requirement for specific banks/financial roles,6 months – 5 years,24000-35000,Across Kerala,3
Trinity SkillWorks Private Limited,Branch Sales Executive (House Loan / Personal Loan),"BFSI, IT & BPO Services",UG/PG/MBA/MCom,Minimum education requirement for specific banks/financial roles,6 months – 5 years,24000,Across Kerala,21
Trinity SkillWorks Private Limited,Associate Agency Development Manager,"BFSI, IT & BPO Services",UG/PG/MBA/MCom,Minimum education requirement for specific banks/financial roles,6 months – 5 years,25000-58000,Across Kerala,12
Trinity SkillWorks Private Limited,Relationship Manager,"BFSI, IT & BPO Services",UG/PG/MBA/MCom,Minimum education requirement for specific banks/financial roles,6 months – 5 years,25000-33000,Across Kerala,8
Trinity SkillWorks Private Limited,Human Resources Executive,"BFSI, IT & BPO Services",UG/PG/MBA/MCom,Minimum education requirement for specific banks/financial roles,6 months – 5 years,15000- 25000,"Nalanchira , Trivandrum",2
Trinity SkillWorks Private Limited,HR intern,"BFSI, IT & BPO Services",UG/PG/MBA/MCom,Minimum education requirement for specific banks/financial roles,Fresher- 6 months ,12000-15000 TA ,"Nalanchira , Trivandrum",1
Team waves,Business development manager,education and entertainment division,Degree/Diploma,,Fresher,18000,"Trivandrum, Kochi and Calicut",36
Team waves,Logistics Trainee,education and entertainment division,Logistics Diploma/ Degree,,Fresher,12000,"Trivandrum, Kochi and Calicut",9
Team waves,Admin Executive,education and entertainment division,12th,,Freshers /Experienced,12000-15000,"Trivandrum, Kochi and Calicut",18
Team waves,Business Development Executive,education and entertainment division,ITI/ITC/Diploma,,Fresher,15000,"Trivandrum, Kochi and Calicut",32
Team waves,Graphic Designer,education and entertainment division,Graphic designing Course,,Experienced,20000,"Trivandrum, Kochi and Calicut",5
Team waves,Accountant,education and entertainment division,Degree+ GST filing,1 year experience in GST filing compulsory,Experienced,"12000+ allowances (TA, food , Accomodation)","Trivandrum, Kochi and Calicut",15
Team waves,Collection Executive,education and entertainment division,10th,,,15000,,10
Ayur herbals,Junior officer,Health care,Degree/Diploma,,Fresher,16000- 20000,"Trivandrum, Palakkad",10
Ayur herbals,Data entry,Health care,12th & DCA,,Freshers /Experienced,10000- 14000,"Trivandrum, Palakkad",2
Ayur herbals,Tele caller,Health care,12th,,Freshers /Experienced,10000-12000,"Trivandrum, Palakkad",2
Ayur herbals,Sales Coordinator,Health care,Degree/Diploma,,Freshers /Experienced,14000-16000,"Trivandrum, Palakkad",8
Ayur herbals,Packing,Health care,10th,female prefered,Freshers,10000,"Trivandrum, Palakkad",6
Ayur herbals,Sales staff,Health care,Degree/Diploma,,Freshers /Experienced,10000-15000,"Trivandrum, Palakkad",8
Info Apps,Office Assistant,Learning Application Promoting Company,Degree/Diploma,,Freshers,15000,Kozhikode Ernakulam Trivandrum,3
Info Apps,Business Development Executive,Learning Application Promoting Company,12th,,Freshers,15000,Kozhikode Ernakulam Trivandrum,15
Info Apps,Business Development Manager,Learning Application Promoting Company,Degree/Diploma,,I year,20000,Kozhikode Ernakulam Trivandrum,10
Info Apps,Marketing Executive,Learning Application Promoting Company,12th,,Freshers,15000,Kozhikode Ernakulam Trivandrum,7
Info Apps,Telecalling,Learning Application Promoting Company,12th,,Freshers,12000,Kozhikode Ernakulam Trivandrum,10
Quess,xiomi sales promoter,Retail,12th,,Freshers /Experienced,18000-20000 PF & ESI separate,All kerala,252
ULCCS,RURAL MASON (CIVIL),CONSTRUCTION,10th,,Freshers /Experienced,AS PER INDUSTRY STANDARD,All kerala,150
ULCCS,BAR BENDER (CIVIL),CONSTRUCTION,10th,,Freshers /Experienced,AS PER INDUSTRY STANDARD,All kerala,125
ULCCS,SHUTTERING MASON (CIVIL),CONSTRUCTION,10th,,Freshers /Experienced,AS PER INDUSTRY STANDARD,All kerala,150
ULCCS,STAGING MASON (CIVIL),CONSTRUCTION,10th,,Freshers /Experienced,AS PER INDUSTRY STANDARD,All kerala,100
ULCCS,SCAFFOLDING (CIVIL),CONSTRUCTION,10th,,Freshers /Experienced,AS PER INDUSTRY STANDARD,All kerala,75
ULCCS,CONCRETE MASON (CIVIL),CONSTRUCTION,10th,,Freshers /Experienced,AS PER INDUSTRY STANDARD,All kerala,100
ULCCS,INTERIOR (INTERIOR FITOUT),CONSTRUCTION,10th,,Freshers /Experienced,AS PER INDUSTRY STANDARD,All kerala,150
ULCCS,FLOORING (INTERIOR FITOUT),CONSTRUCTION,10th,,Freshers /Experienced,AS PER INDUSTRY STANDARD,All kerala,150
ULCCS,LANDSCAPING (INTERIOR FITOUT),CONSTRUCTION,ITI/ITC/Diploma,,Freshers /Experienced,AS PER INDUSTRY STANDARD,All kerala,25
ULCCS,ELECTRONICS(GENERAL)SKILLED (ELECTRICAL),CONSTRUCTION,ITI/ITC/Diploma,,Freshers /Experienced,AS PER INDUSTRY STANDARD,All kerala,100
ULCCS,INDUSTRIAL ELECTRONICS (ELECTRICAL),CONSTRUCTION,10th,,Freshers /Experienced,AS PER INDUSTRY STANDARD,All kerala,25
ULCCS,WIREMAN-SEMI SKILLED (ELECTRICAL),CONSTRUCTION,ITI/ITC/Diploma,,Freshers /Experienced,AS PER INDUSTRY STANDARD,All kerala,30
ULCCS,PANEL & CONTROL WIRING TECHNICIAN (ELECTRICAL),CONSTRUCTION,ITI/ITC/Diploma,,Freshers /Experienced,AS PER INDUSTRY STANDARD,All kerala,15
ULCCS,WIRING & SOLAR ENERGY TECHNICIAN (ELECTRICAL),CONSTRUCTION,10th,,Freshers /Experienced,AS PER INDUSTRY STANDARD,All kerala,15
ULCCS,MAINTENANCE TECHNICIAN (ELECTRICAL),CONSTRUCTION,ITI/ITC/Diploma,,Freshers /Experienced,AS PER INDUSTRY STANDARD,All kerala,20
ULCCS,TECHNICIANS & TECHNICIAN HELPER(ELECTRICAL & ELECTRONICS),CONSTRUCTION,10th,,Freshers /Experienced,AS PER INDUSTRY STANDARD,All kerala,15
ULCCS,PUBLIC HEALTH ENGINEERING (PLUMBER),CONSTRUCTION,12th,,Freshers /Experienced,AS PER INDUSTRY STANDARD,All kerala,25
ULCCS,FIRE PROTECTION SYSTEM (SAFETY)TECHNICIANB(MECHANICAL),CONSTRUCTION,ITI/ITC/Diploma,,Freshers /Experienced,AS PER INDUSTRY STANDARD,All kerala,10
ULCCS,HVAC (MECHANICAL),CONSTRUCTION,ITI/ITC/Diploma,,Freshers /Experienced,AS PER INDUSTRY STANDARD,All kerala,8
ULCCS,WELDER (MECHANICAL),CONSTRUCTION,ITI/ITC/Diploma,,Freshers /Experienced,AS PER INDUSTRY STANDARD,All kerala,30
ULCCS,ALUMINIUM FABRICATOR (MECHANICAL),CONSTRUCTION,ITI/ITC/Diploma,,Freshers /Experienced,AS PER INDUSTRY STANDARD,All kerala,30
ULCCS,LAB TECHNICIAN (LABORATORY),CONSTRUCTION,10th,,Freshers /Experienced,AS PER INDUSTRY STANDARD,All kerala,20
ULCCS,LAB ASSISTANT (LABORATORY),CONSTRUCTION,10th,,Freshers /Experienced,AS PER INDUSTRY STANDARD,All kerala,34
ULCCS,MECHANIC HYDRAULIC,CONSTRUCTION,12th,,Freshers /Experienced,AS PER INDUSTRY STANDARD,All kerala,40
ULCCS,ASSISTANT EXCAVATOR OPERATOR,CONSTRUCTION,12th,,Freshers /Experienced,AS PER INDUSTRY STANDARD,All kerala,40
Zudio ,Sales Associates ,Fashion Retail,10th,,Fresher,14000,,25
Zudio ,Sales Officers & Department Managers,Fashion Retail ,12th,,1 to 5 years,15000 - 25000,,15
iCloudhomes -iScape Designers Pvt LTD,Site Engineers,Builders and Construction,B Tech/Diploma,,Freshers /Minimum 1 to 2 years,10000-15000,,3
iCloudhomes -iScape Designers Pvt LTD,Electrical Engineers ,Builders and Construction,B Tech/Diploma,,Freshers /Minimum 1 to 2 years,15000-20000,,2
iCloudhomes -iScape Designers Pvt LTD,Carpenter,Builders and Construction,ITI/ITC/Diploma,,Freshers /Minimum 1 to 2 years,10000-15000,,2
iCloudhomes -iScape Designers Pvt LTD,Driver/ Mechanic,Builders and Construction,ITI/ITC/Diploma,Machine Mechanic is preffered,Freshers /Minimum 1 to 2 years,10000-15000,,1
iCloudhomes -iScape Designers Pvt LTD, Sales Trainee,Builders and Construction,Degree/Diploma,,Freshers /Minimum 1 to 2 years,12000-20000,,2
HDFC LIFE,Business development Managers,Insurance/Banking,Degree/Diploma,1 year Experience in Insurance field is must,1 year,27000,,10
HDFC LIFE,Financial consultant ,Insurance/Banking,12th,,Fresher,15000-25000,,25
ODEPC,"Art Teacher
 (Indian School , SULTHANATE OF OMAN)",Education,Bachelor of Fine Arts,,2,OMR 300/-,,1
ODEPC,Assistant Nurse Homecare ( Dr.Sunny Home Health Care United Arab Emirates),Health care,"GNM with MOH/DHA License as Assistant Nurse
",GNM with MOH/DHA License as Assistant Nurse, 1 year and above in Hospital/ Clinic/ Homecare,"AED 3,500/-
",,50
ODEPC,Male Industrial Nurse- at UAE,Health care,BSc Nursing,BSc Nursing / Post Basic BSc Nursing,2 Years,"AED 5,000/-",,100
Muralya Dairy Products Pvt Ltd,Field sales Executive,Dairy,12th,,1-3 years,18000- 20000,Trivandrum,3
Muralya Dairy Products Pvt Ltd,Cashier,Dairy,BCOM,Male candidates-Working experience as cashier,3-5 years,up to 250000,"Trivandrum, Ernakulam",2
Muralya Dairy Products Pvt Ltd,Drivers- Heavy/ Light Vehicle Motor,Dairy,10 th,Below 35 years of age,3- 5 years,20000,Trivandrum,4
Muralya Dairy Products Pvt Ltd,Helper,Dairy,10th / 12th,Male candidates,Fresher,15500,Trivandrum,6\`;

function parseCSV(csv) {
    const lines = csv.split('\\n');
    const result = [];
    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
        if (!lines[i].trim()) continue;
        
        let currentline = [];
        let inQuotes = false;
        let start = 0;
        
        for (let j = 0; j < lines[i].length; j++) {
            if (lines[i][j] === '"') inQuotes = !inQuotes;
            if (lines[i][j] === ',' && !inQuotes) {
                currentline.push(lines[i].substring(start, j).replace(/^"|"$/g, '').replace(/\\n/g, ' ').trim());
                start = j + 1;
            }
        }
        currentline.push(lines[i].substring(start).replace(/^"|"$/g, '').replace(/\\n/g, ' ').trim());

        if (currentline.length < 9) continue;

        result.push({
            company: currentline[0],
            role: currentline[1],
            sector: currentline[2],
            qualification: currentline[3],
            specialization: currentline[4],
            experience: currentline[5],
            salary: currentline[6],
            location: currentline[7],
            vacancies: currentline[8]
        });
    }
    return result;
}

const jobs = parseCSV(csvData);
console.log(JSON.stringify(jobs, null, 4));
