const tenders = [
    {
        tenderId: "100001",
        tenderName: "Construction of Community Hall",
        title: "E-Tender for Civil Construction Work",
        issueDate: "2025-05-20",
        tenderFloatingDate: "2025-05-22",
        description: "Construction of a multi-purpose community hall in XYZ district.",
        bidderName: "ABC Constructions Pvt. Ltd.",
        documentDownloadStartDate: "2025-05-22",
        documentDownloadEndDate: "2025-06-05",
        bidSubmissionStartDate: "2025-05-25",
        bidSubmissionEndDate: "2025-06-10",
        prebidMeetingAddressPortal: "https://tender.gov.in/prebid/12345",
        technicalBidOpeningDate: "2025-06-11",
        periodOfWork: "6 Months",
        location: "XYZ District",
        pincode: "123456",
        bidOpeningPlace: "Office of Chief Engineer",
        productCategory: "Construction",
        natureOfWork: "Civil Works",
        proposalsInvitedBy: "XYZ Municipal Corporation",
        dateOfOpeningFinancialProposals: "2025-06-15",
        modeOfSubmittingProposals: "Online",
        tenderWebsite: "https://tender.gov.in",
        modeOfPayment: "Bank Transfer",
        bankName: "SBI",
        methodOfSelection: "L1",
        authorizedManager: "Mr. Rajeev Sharma"
    },
    {
        tenderId: "100002",
        tenderName: "Supply of Office Furniture",
        title: "Tender for Procurement of Modular Furniture",
        issueDate: "2025-04-10",
        tenderFloatingDate: "2025-04-12",
        description: "Supply and installation of modular furniture at Secretariat.",
        bidderName: "FurniTech India",
        documentDownloadStartDate: "2025-04-12",
        documentDownloadEndDate: "2025-04-25",
        bidSubmissionStartDate: "2025-04-15",
        bidSubmissionEndDate: "2025-04-30",
        prebidMeetingAddressPortal: "https://tender.gov.in/prebid/22334",
        technicalBidOpeningDate: "2025-05-01",
        periodOfWork: "1 Month",
        location: "ABC Nagar",
        pincode: "654321",
        bidOpeningPlace: "Procurement Office",
        productCategory: "Furniture",
        natureOfWork: "Supply",
        proposalsInvitedBy: "Admin Dept",
        dateOfOpeningFinancialProposals: "2025-05-05",
        modeOfSubmittingProposals: "Online",
        tenderWebsite: "https://tender.gov.in",
        modeOfPayment: "Online/DD",
        bankName: "PNB",
        methodOfSelection: "QCBS",
        authorizedManager: "Ms. Priya Mehta"
    },
    {
        tenderId: "100003",
        tenderName: "Road Repair in Sector 15",
        title: "Asphalt Road Resurfacing",
        issueDate: "2025-03-01",
        tenderFloatingDate: "2025-03-02",
        description: "Resurfacing of damaged roadways in Sector 15.",
        bidderName: "RoadFix Solutions",
        documentDownloadStartDate: "2025-03-02",
        documentDownloadEndDate: "2025-03-10",
        bidSubmissionStartDate: "2025-03-05",
        bidSubmissionEndDate: "2025-03-15",
        prebidMeetingAddressPortal: "https://tender.gov.in/prebid/33456",
        technicalBidOpeningDate: "2025-03-17",
        periodOfWork: "2 Months",
        location: "Sector 15, Metro City",
        pincode: "110015",
        bidOpeningPlace: "PWD Office",
        productCategory: "Infrastructure",
        natureOfWork: "Repair",
        proposalsInvitedBy: "PWD Department",
        dateOfOpeningFinancialProposals: "2025-03-20",
        modeOfSubmittingProposals: "Online",
        tenderWebsite: "https://tender.gov.in",
        modeOfPayment: "Online",
        bankName: "HDFC",
        methodOfSelection: "L1",
        authorizedManager: "Er. Sameer Verma"
    },
    {
        tenderId: "100004",
        tenderName: "Installation of Solar Panels",
        title: "Solar Energy Project for Govt Schools",
        issueDate: "2025-06-01",
        tenderFloatingDate: "2025-06-03",
        description: "Supply and installation of rooftop solar panels.",
        bidderName: "SunGrid Power Ltd.",
        documentDownloadStartDate: "2025-06-03",
        documentDownloadEndDate: "2025-06-20",
        bidSubmissionStartDate: "2025-06-05",
        bidSubmissionEndDate: "2025-06-25",
        prebidMeetingAddressPortal: "https://tender.gov.in/prebid/34567",
        technicalBidOpeningDate: "2025-06-28",
        periodOfWork: "3 Months",
        location: "District HQ",
        pincode: "789012",
        bidOpeningPlace: "Energy Dept Office",
        productCategory: "Renewable Energy",
        natureOfWork: "Installation",
        proposalsInvitedBy: "Energy Department",
        dateOfOpeningFinancialProposals: "2025-07-01",
        modeOfSubmittingProposals: "Online",
        tenderWebsite: "https://tender.gov.in",
        modeOfPayment: "NEFT/RTGS",
        bankName: "ICICI",
        methodOfSelection: "QCBS",
        authorizedManager: "Mr. Aditya Nair"
    },
    {
        tenderId: "100005",
        tenderName: "IT Infrastructure AMC",
        title: "Annual Maintenance Contract for Servers",
        issueDate: "2025-01-15",
        tenderFloatingDate: "2025-01-16",
        description: "AMC for IT servers and networking equipment.",
        bidderName: "TechCare Systems",
        documentDownloadStartDate: "2025-01-16",
        documentDownloadEndDate: "2025-01-30",
        bidSubmissionStartDate: "2025-01-17",
        bidSubmissionEndDate: "2025-01-31",
        prebidMeetingAddressPortal: "https://tender.gov.in/prebid/45678",
        technicalBidOpeningDate: "2025-02-02",
        periodOfWork: "12 Months",
        location: "IT Dept, State HQ",
        pincode: "500001",
        bidOpeningPlace: "IT Building",
        productCategory: "IT Services",
        natureOfWork: "AMC",
        proposalsInvitedBy: "IT Department",
        dateOfOpeningFinancialProposals: "2025-02-05",
        modeOfSubmittingProposals: "Online",
        tenderWebsite: "https://tender.gov.in",
        modeOfPayment: "Online",
        bankName: "Axis Bank",
        methodOfSelection: "QCBS",
        authorizedManager: "Ms. Kavita Rao"
    },
    {
        tenderId: "100006",
        tenderName: "Printing of Books",
        title: "Tender for School Book Printing",
        issueDate: "2025-02-20",
        tenderFloatingDate: "2025-02-22",
        description: "Printing and delivery of school books for academic year 2025-26.",
        bidderName: "EduPrint Press",
        documentDownloadStartDate: "2025-02-22",
        documentDownloadEndDate: "2025-03-05",
        bidSubmissionStartDate: "2025-02-25",
        bidSubmissionEndDate: "2025-03-10",
        prebidMeetingAddressPortal: "https://tender.gov.in/prebid/55678",
        technicalBidOpeningDate: "2025-03-12",
        periodOfWork: "2 Months",
        location: "Book Depot, City Center",
        pincode: "700001",
        bidOpeningPlace: "School Education Office",
        productCategory: "Printing",
        natureOfWork: "Book Printing",
        proposalsInvitedBy: "School Education Dept",
        dateOfOpeningFinancialProposals: "2025-03-15",
        modeOfSubmittingProposals: "Online",
        tenderWebsite: "https://tender.gov.in",
        modeOfPayment: "NEFT",
        bankName: "Union Bank",
        methodOfSelection: "L1",
        authorizedManager: "Dr. Sunil Bhatt"
    },
    {
        tenderId: "100007",
        tenderName: "CCTV Installation",
        title: "Security Surveillance System Setup",
        issueDate: "2025-04-05",
        tenderFloatingDate: "2025-04-06",
        description: "Installation of CCTV systems in public areas.",
        bidderName: "SecureCam Pvt. Ltd.",
        documentDownloadStartDate: "2025-04-06",
        documentDownloadEndDate: "2025-04-20",
        bidSubmissionStartDate: "2025-04-08",
        bidSubmissionEndDate: "2025-04-22",
        prebidMeetingAddressPortal: "https://tender.gov.in/prebid/66789",
        technicalBidOpeningDate: "2025-04-25",
        periodOfWork: "45 Days",
        location: "Multiple City Locations",
        pincode: "400012",
        bidOpeningPlace: "Surveillance Dept",
        productCategory: "Security Equipment",
        natureOfWork: "Installation",
        proposalsInvitedBy: "City Safety Dept",
        dateOfOpeningFinancialProposals: "2025-04-28",
        modeOfSubmittingProposals: "Online",
        tenderWebsite: "https://tender.gov.in",
        modeOfPayment: "Online/DD",
        bankName: "Bank of Baroda",
        methodOfSelection: "L1",
        authorizedManager: "Mr. Alok Deshmukh"
    },
    {
        tenderId: "100008",
        tenderName: "Medical Equipment Supply",
        title: "Procurement of Diagnostic Tools",
        issueDate: "2025-05-05",
        tenderFloatingDate: "2025-05-07",
        description: "Supply of ECG and X-Ray machines to govt hospitals.",
        bidderName: "MediTech Equipments",
        documentDownloadStartDate: "2025-05-07",
        documentDownloadEndDate: "2025-05-18",
        bidSubmissionStartDate: "2025-05-08",
        bidSubmissionEndDate: "2025-05-20",
        prebidMeetingAddressPortal: "https://tender.gov.in/prebid/77890",
        technicalBidOpeningDate: "2025-05-22",
        periodOfWork: "1.5 Months",
        location: "Govt Hospitals across district",
        pincode: "600004",
        bidOpeningPlace: "Health Dept",
        productCategory: "Medical Equipment",
        natureOfWork: "Supply",
        proposalsInvitedBy: "Health Department",
        dateOfOpeningFinancialProposals: "2025-05-25",
        modeOfSubmittingProposals: "Online",
        tenderWebsite: "https://tender.gov.in",
        modeOfPayment: "Online",
        bankName: "IDBI Bank",
        methodOfSelection: "L1",
        authorizedManager: "Dr. Neha Bansal"
    },
    {
        tenderId: "100009",
        tenderName: "Website Revamp",
        title: "Design and Development of Official Website",
        issueDate: "2025-01-01",
        tenderFloatingDate: "2025-01-03",
        description: "Revamp and redesign of the department's official portal.",
        bidderName: "WebGenius Pvt. Ltd.",
        documentDownloadStartDate: "2025-01-03",
        documentDownloadEndDate: "2025-01-15",
        bidSubmissionStartDate: "2025-01-05",
        bidSubmissionEndDate: "2025-01-17",
        prebidMeetingAddressPortal: "https://tender.gov.in/prebid/88901",
        technicalBidOpeningDate: "2025-01-20",
        periodOfWork: "2 Months",
        location: "Secretariat, Capital",
        pincode: "100001",
        bidOpeningPlace: "IT Wing",
        productCategory: "IT Services",
        natureOfWork: "Web Development",
        proposalsInvitedBy: "Information Dept",
        dateOfOpeningFinancialProposals: "2025-01-23",
        modeOfSubmittingProposals: "Online",
        tenderWebsite: "https://tender.gov.in",
        modeOfPayment: "Online",
        bankName: "Kotak Mahindra",
        methodOfSelection: "QCBS",
        authorizedManager: "Mr. Arvind Menon"
    },
    {
        tenderId: "100010",
        tenderName: "Solid Waste Management",
        title: "Door-to-Door Waste Collection Contract",
        issueDate: "2025-06-10",
        tenderFloatingDate: "2025-06-12",
        description: "Waste collection and transportation in XYZ city.",
        bidderName: "CleanCity Waste Solutions",
        documentDownloadStartDate: "2025-06-12",
        documentDownloadEndDate: "2025-06-25",
        bidSubmissionStartDate: "2025-06-13",
        bidSubmissionEndDate: "2025-06-27",
        prebidMeetingAddressPortal: "https://tender.gov.in/prebid/99012",
        technicalBidOpeningDate: "2025-06-29",
        periodOfWork: "1 Year",
        location: "XYZ City",
        pincode: "800001",
        bidOpeningPlace: "Sanitation Dept",
        productCategory: "Waste Management",
        natureOfWork: "Outsourcing",
        proposalsInvitedBy: "Municipal Board",
        dateOfOpeningFinancialProposals: "2025-07-02",
        modeOfSubmittingProposals: "Online",
        tenderWebsite: "https://tender.gov.in",
        modeOfPayment: "Bank Transfer",
        bankName: "Canara Bank",
        methodOfSelection: "L1",
        authorizedManager: "Ms. Renu Srivastava"
    }
];

export default tenders;
