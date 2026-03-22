// Mock Indian Bills Dataset (simulates bills scraped from Digital Sansad/OGD)
export const mockBills = [

  // ───────── 2026 Bills ─────────
  {
    id: "FINANCE-2026",
    title: "The Finance Bill, 2026",
    shortTitle: "Finance Bill 2026",
    ministry: "Ministry of Finance",
    category: "Economy & Taxation",
    status: "passed",
    house: "Lok Sabha",
    year: 2026,
    dateIntroduced: "2026-02-01",
    datePassed: "2026-03-28",
    tokenCount: 104000,
    pdfUrl: "https://indiabudget.gov.in",
    tags: ["Budget 2026-27", "Taxes", "Economy", "Fiscal Policy"],
    citizenImpact: "HIGH",
    summary: {
      oneLiner: "Implements Union Budget 2026-27 with zero tax up to ₹12 lakh and a ₹1 lakh crore Economic Stabilisation Fund.",
      keyPoints: [
        "Zero income tax for individuals earning up to ₹12 lakh per year under new regime.",
        "₹1 lakh crore Economic Stabilisation Fund created to buffer global economic shocks.",
        "6% digital advertising tax (equalisation levy) on online ad platforms removed.",
        "Capital expenditure doubled in infrastructure, energy, and railways for FY 2026-27.",
        "TDS and TCS provisions further simplified for salaried and senior citizen taxpayers."
      ],
      impactOnYou: "If your annual income is ₹12 lakh or below, you pay zero income tax from FY 2026-27. Online services may become cheaper with the removal of the digital advertising tax.",
      effectiveDate: "April 1, 2026 (FY 2026-27)",
      tokenEfficiency: { inputTokens: 104000, outputTokens: 780, factsExtracted: 17, efficiencyScore: 0.022 }
    }
  },
  {
    id: "IR-CODE-AMEND-2026",
    title: "The Industrial Relations Code (Amendment) Bill, 2026",
    shortTitle: "IR Code Amendment 2026",
    ministry: "Ministry of Labour & Employment",
    category: "Labour & Industry",
    status: "passed",
    house: "Lok Sabha",
    year: 2026,
    dateIntroduced: "2026-02-10",
    datePassed: "2026-02-13",
    tokenCount: 61000,
    pdfUrl: "https://sansad.in",
    tags: ["Labour Law", "Workers Rights", "Industry", "Employment"],
    citizenImpact: "HIGH",
    summary: {
      oneLiner: "Amends labour dispute rules, raises the retrenchment threshold to 300 workers, and legalises fixed-term contracts in all sectors.",
      keyPoints: [
        "Companies with up to 300 workers (was 100) can now hire and fire without government approval.",
        "Fixed-term employment contracts allowed in ALL sectors — same benefits as permanent workers.",
        "Strike notice period increased from 14 to 21 days for public utility services.",
        "Tribunal resolution time for labour disputes capped at 18 months (was 3 years).",
        "Standing Orders mandatory for all firms with 50+ employees covering wages and working hours."
      ],
      impactOnYou: "Fixed-term contract workers now get equal pay, leave, and gratuity as permanent staff. Labour dispute resolution must happen within 18 months — faster justice for workers.",
      effectiveDate: "February 2026",
      tokenEfficiency: { inputTokens: 61000, outputTokens: 670, factsExtracted: 14, efficiencyScore: 0.021 }
    }
  },
  {
    id: "TRANSGENDER-2026",
    title: "The Protection of Transgender Persons (Amendment) Bill, 2026",
    shortTitle: "Transgender Protection 2026",
    ministry: "Ministry of Social Justice & Empowerment",
    category: "Social Justice",
    status: "pending",
    house: "Lok Sabha",
    year: 2026,
    dateIntroduced: "2026-03-05",
    datePassed: null,
    tokenCount: 48000,
    pdfUrl: "https://sansad.in",
    tags: ["LGBTQ+", "Social Justice", "Rights", "Inclusion"],
    citizenImpact: "MEDIUM",
    summary: {
      oneLiner: "Strengthens legal protections, self-identification rights, and anti-discrimination measures for transgender persons.",
      keyPoints: [
        "Self-identification of gender permitted without mandatory medical certificate.",
        "Separate welfare boards for transgender persons mandatory in every state.",
        "Penalties for workplace and housing discrimination doubled.",
        "Transgender-inclusive curriculum in government schools and vocational training.",
        "Annual national survey of transgender population to assess welfare implementation."
      ],
      impactOnYou: "Transgender individuals can self-identify without requiring surgery. Employers and housing providers who discriminate face stricter penalties. Government schools required to be more inclusive.",
      effectiveDate: "Pending Parliamentary Approval",
      tokenEfficiency: { inputTokens: 48000, outputTokens: 640, factsExtracted: 13, efficiencyScore: 0.020 }
    }
  },

  // ───────── 2025 Bills ─────────
  {
    id: "FINANCE-2025",
    title: "The Finance Bill, 2025",
    shortTitle: "Finance Bill 2025",
    ministry: "Ministry of Finance",
    category: "Economy & Taxation",
    status: "passed",
    house: "Lok Sabha",
    year: 2025,
    dateIntroduced: "2025-02-01",
    datePassed: "2025-03-25",
    tokenCount: 101000,
    pdfUrl: "https://indiabudget.gov.in",
    tags: ["Budget 2025-26", "Taxes", "Income Tax", "Economy"],
    citizenImpact: "HIGH",
    summary: {
      oneLiner: "Implements Union Budget 2025-26: zero tax up to ₹12 lakh, removes digital ad tax, and boosts infrastructure to ₹11.21 lakh crore.",
      keyPoints: [
        "Zero income tax for individuals earning up to ₹12 lakh per year (new tax regime).",
        "6% equalisation levy (digital advertising tax) removed, benefiting startups and advertisers.",
        "₹11.21 lakh crore capital expenditure for FY 2025-26 — all-time high.",
        "TDS and TCS provisions streamlined across 50+ categories for easier compliance.",
        "MSME credit guarantee limit raised to ₹10 crore to boost small business lending."
      ],
      impactOnYou: "Salaried individuals under ₹12 lakh pay zero income tax from April 2025. Digital services may become cheaper. Small business owners can access bigger government-backed loans.",
      effectiveDate: "April 1, 2025 (FY 2025-26)",
      tokenEfficiency: { inputTokens: 101000, outputTokens: 760, factsExtracted: 16, efficiencyScore: 0.021 }
    }
  },
  {
    id: "IMMIGRATION-2025",
    title: "The Immigration and Foreigners Bill, 2025",
    shortTitle: "Immigration Bill 2025",
    ministry: "Ministry of Home Affairs",
    category: "Immigration & Security",
    status: "passed",
    house: "Lok Sabha",
    year: 2025,
    dateIntroduced: "2025-03-20",
    datePassed: "2025-03-27",
    tokenCount: 89000,
    pdfUrl: "https://sansad.in",
    tags: ["Immigration", "Foreigners", "Visa", "National Security"],
    citizenImpact: "MEDIUM",
    summary: {
      oneLiner: "Consolidates 4 colonial-era immigration laws into one modern act governing visas, entry, registration, and foreigner regulation.",
      keyPoints: [
        "Replaces Foreigners Act 1946, Passports Entry into India Act 1920, and two others.",
        "Visa overstay beyond 180 days is now a cognisable, non-bailable offence.",
        "Foreigners must register with FRRO within 14 days of arrival (was 180 days).",
        "Companies employing foreigners must report to authorities digitally within 24 hours.",
        "Biometric data collection mandatory for all foreign visitors at entry points."
      ],
      impactOnYou: "If you have foreign family or employees visiting India, they must register with authorities within 14 days. Companies hiring foreign workers face strict digital reporting requirements.",
      effectiveDate: "2025 (After Presidential assent)",
      tokenEfficiency: { inputTokens: 89000, outputTokens: 720, factsExtracted: 15, efficiencyScore: 0.021 }
    }
  },
  {
    id: "BANKING-AMEND-2025",
    title: "The Banking Laws (Amendment) Bill, 2025",
    shortTitle: "Banking Laws 2025",
    ministry: "Ministry of Finance",
    category: "Banking & Finance",
    status: "passed",
    house: "Lok Sabha",
    year: 2025,
    dateIntroduced: "2025-02-10",
    datePassed: "2025-03-12",
    tokenCount: 72000,
    pdfUrl: "https://sansad.in",
    tags: ["Banking", "RBI", "Depositors", "PSB Reform"],
    citizenImpact: "HIGH",
    summary: {
      oneLiner: "Strengthens bank governance, allows 4 nominees per account, and improves audit quality in public sector banks.",
      keyPoints: [
        "Nomination rules updated: up to 4 nominees allowed per bank account (was 1).",
        "All public sector banks must submit quarterly reports directly to RBI.",
        "Bank board independence strengthened — MD & CEO terms now capped at 10 years.",
        "Concurrent audit mandatory for all PSBs with assets above ₹2 lakh crore.",
        "Unclaimed deposits automatically transferred to Depositor Education Fund after 10 years."
      ],
      impactOnYou: "You can now add up to 4 family members as nominees in your bank account — important for joint families. Unclaimed old accounts are safer and traceable through the Depositor Education Fund.",
      effectiveDate: "April 2025",
      tokenEfficiency: { inputTokens: 72000, outputTokens: 710, factsExtracted: 15, efficiencyScore: 0.021 }
    }
  },
  {
    id: "RAILWAYS-AMEND-2025",
    title: "The Railways (Amendment) Bill, 2025",
    shortTitle: "Railways Amendment 2025",
    ministry: "Ministry of Railways",
    category: "Infrastructure",
    status: "passed",
    house: "Lok Sabha",
    year: 2025,
    dateIntroduced: "2025-02-14",
    datePassed: "2025-03-18",
    tokenCount: 56000,
    pdfUrl: "https://sansad.in",
    tags: ["Railways", "Infrastructure", "Transport", "Safety", "Kavach"],
    citizenImpact: "MEDIUM",
    summary: {
      oneLiner: "Modernises railway administration, mandates Kavach anti-collision on all A-routes, and enables private passenger train operators.",
      keyPoints: [
        "Railway Safety Authority made fully independent from the Ministry of Railways.",
        "Private operators can run passenger trains on dedicated corridors under license.",
        "Kavach anti-collision system deployment made mandatory on all A-category routes.",
        "Penalty for railway trespass increased from ₹500 to ₹5,000.",
        "AI-based track inspection systems given legal recognition for safety certification."
      ],
      impactOnYou: "Train travel becomes safer with mandatory Kavach deployment on key routes. Trespassing on tracks is heavily penalised. New private train options may increase availability and punctuality.",
      effectiveDate: "July 2025 (phased rollout)",
      tokenEfficiency: { inputTokens: 56000, outputTokens: 660, factsExtracted: 13, efficiencyScore: 0.020 }
    }
  },
  {
    id: "WAQF-AMEND-2025",
    title: "The Waqf (Amendment) Act, 2025",
    shortTitle: "Waqf Amendment 2025",
    ministry: "Ministry of Minority Affairs",
    category: "Religion & Land",
    status: "passed",
    house: "Rajya Sabha",
    year: 2025,
    dateIntroduced: "2024-08-08",
    datePassed: "2025-04-04",
    tokenCount: 112000,
    pdfUrl: "https://sansad.in",
    tags: ["Waqf", "Muslim Law", "Land Reform", "Minority Affairs"],
    citizenImpact: "HIGH",
    summary: {
      oneLiner: "Overhauls Waqf property management with mandatory digital registration, government oversight, and dispute reforms.",
      keyPoints: [
        "Waqf properties must be registered on a Central Waqf digital portal within 6 months.",
        "Non-Muslims can serve on State Waqf Boards as government nominees for transparency.",
        "Waqf Tribunals can no longer decide government-owned land disputes — moved to civil courts.",
        "Government retains power to audit and survey any Waqf property at any time.",
        "Mutawallis (caretakers) who default on accounts face stricter criminal penalties."
      ],
      impactOnYou: "Waqf property dispute resolution moves partly to civil courts. All Waqf lease tenants should verify digital registration status of their property on the Central portal.",
      effectiveDate: "April 2025",
      tokenEfficiency: { inputTokens: 112000, outputTokens: 800, factsExtracted: 17, efficiencyScore: 0.021 }
    }
  },
  {
    id: "DISASTER-AMEND-2025",
    title: "The Disaster Management (Amendment) Bill, 2025",
    shortTitle: "Disaster Management 2025",
    ministry: "Ministry of Home Affairs",
    category: "Disaster & Emergency",
    status: "passed",
    house: "Lok Sabha",
    year: 2025,
    dateIntroduced: "2025-02-18",
    datePassed: "2025-03-22",
    tokenCount: 44000,
    pdfUrl: "https://sansad.in",
    tags: ["Disaster", "Emergency", "NDRF", "Urban Flood", "Safety"],
    citizenImpact: "MEDIUM",
    summary: {
      oneLiner: "Creates Urban Disaster Management Authorities in major cities and mandates faster relief fund disbursement within 30 days.",
      keyPoints: [
        "Urban Disaster Management Authorities (UDMAs) to be set up in all major cities.",
        "NDMA given power to direct private companies during national disasters.",
        "City corporations must prepare and test disaster plans every 2 years.",
        "Relief funds legally required to reach beneficiaries within 30 days of disaster.",
        "Private hospitals and schools mandated to have registered disaster response protocols."
      ],
      impactOnYou: "City residents get better-organised local disaster response through UDMAs. Hospitals and schools in your area must now have emergency plans. Relief funds have a legal 30-day disbursement deadline.",
      effectiveDate: "June 2025",
      tokenEfficiency: { inputTokens: 44000, outputTokens: 630, factsExtracted: 12, efficiencyScore: 0.019 }
    }
  },

  // ───────── 2023–2024 Bills ─────────
  {
    id: "DPDPA-2023",
    title: "The Digital Personal Data Protection Act, 2023",
    shortTitle: "DPDPA 2023",
    ministry: "Ministry of Electronics & IT",
    category: "Technology & Privacy",
    status: "passed",
    house: "Lok Sabha",
    year: 2023,
    dateIntroduced: "2023-08-03",
    datePassed: "2023-08-10",
    tokenCount: 142000,
    pdfUrl: "https://indiacode.nic.in",
    tags: ["Data Privacy", "Digital Rights", "Tech"],
    citizenImpact: "HIGH",
    summary: {
      oneLiner: "Regulates how companies collect, store and use your personal data online.",
      keyPoints: [
        "Every Indian has the right to know what personal data is collected.",
        "You can request deletion of your data from any platform.",
        "Children under 18 require parental consent for data collection.",
        "Violations can attract fines up to ₹250 crore per breach.",
        "A new Data Protection Board of India will enforce these rules."
      ],
      impactOnYou: "Your Aadhaar number, phone number, and browsing habits collected by apps now have legal protection. You can ask any company to explain or erase your data.",
      effectiveDate: "August 2023",
      tokenEfficiency: { inputTokens: 142000, outputTokens: 820, factsExtracted: 18, efficiencyScore: 0.022 }
    }
  },
  {
    id: "FINANCE-2024",
    title: "The Finance Bill, 2024",
    shortTitle: "Finance Bill 2024",
    ministry: "Ministry of Finance",
    category: "Economy & Taxation",
    status: "passed",
    house: "Lok Sabha",
    year: 2024,
    dateIntroduced: "2024-02-01",
    datePassed: "2024-02-13",
    tokenCount: 98000,
    pdfUrl: "https://indiabudget.gov.in",
    tags: ["Budget", "Taxes", "Economy"],
    citizenImpact: "HIGH",
    summary: {
      oneLiner: "Proposes changes to income tax slabs, customs duties, and government spending for FY 2024-25.",
      keyPoints: [
        "New tax regime: No tax on income up to ₹7 lakh per year.",
        "Standard deduction raised from ₹50,000 to ₹52,500 for salaried individuals.",
        "Capital gains tax on equity mutual funds increased from 10% to 12.5%.",
        "Customs duty on mobile phones reduced to boost domestic manufacturing.",
        "₹11.1 lakh crore allocated for capital expenditure (infrastructure)."
      ],
      impactOnYou: "Middle-class earners under ₹7 lakh annual income pay zero tax. Home loan deductions remain. Mutual fund investors face slightly higher tax on gains.",
      effectiveDate: "April 2024 (FY 2024-25)",
      tokenEfficiency: { inputTokens: 98000, outputTokens: 740, factsExtracted: 15, efficiencyScore: 0.020 }
    }
  },
  {
    id: "AMEND-CPC-2024",
    title: "Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023",
    shortTitle: "BNSS 2023",
    ministry: "Ministry of Home Affairs",
    category: "Criminal Justice",
    status: "passed",
    house: "Rajya Sabha",
    year: 2023,
    dateIntroduced: "2023-08-11",
    datePassed: "2023-12-21",
    tokenCount: 187000,
    pdfUrl: "https://sansad.in",
    tags: ["Criminal Law", "Police", "Justice Reform"],
    citizenImpact: "HIGH",
    summary: {
      oneLiner: "Replaces the 162-year-old Code of Criminal Procedure (CrPC) with modernised Indian criminal procedure law.",
      keyPoints: [
        "Police can detain a person for up to 60-90 days without charge in terror cases.",
        "Trial via video-conferencing is now legally valid.",
        "First Information Report (FIR) can be filed at any police station (Zero FIR).",
        "Evidence including electronic records (emails, messages) is admissible.",
        "Speedy trials mandated — judgment within 45 days of arguments."
      ],
      impactOnYou: "You can file an FIR at your nearest police station regardless of where the crime occurred. Court proceedings may now happen via video call. Judgments must be faster by law.",
      effectiveDate: "July 1, 2024",
      tokenEfficiency: { inputTokens: 187000, outputTokens: 910, factsExtracted: 20, efficiencyScore: 0.021 }
    }
  },
  {
    id: "FOREST-AMEND-2023",
    title: "The Forest (Conservation) Amendment Act, 2023",
    shortTitle: "Forest Amendment 2023",
    ministry: "Ministry of Environment",
    category: "Environment",
    status: "passed",
    house: "Lok Sabha",
    year: 2023,
    dateIntroduced: "2023-07-19",
    datePassed: "2023-08-02",
    tokenCount: 54000,
    pdfUrl: "https://indiacode.nic.in",
    tags: ["Forest", "Environment", "Land"],
    citizenImpact: "MEDIUM",
    summary: {
      oneLiner: "Limits restrictions on forest clearance for national security and border infrastructure projects.",
      keyPoints: [
        "Land within 100 km of international borders exempt from forest approvals.",
        "Zoos, safaris, eco-tourism facilities can be built in forest land.",
        "Forest clearance exempted for linear projects (roads, railways) up to 5 km near borders.",
        "Removal of 1980 Forest Conservation Act protections for certain land parcels.",
        "Tribal communities may lose protections in newly excluded zones."
      ],
      impactOnYou: "If you live near forest land or tribal areas close to borders, this may affect land rights. Eco-tourism investments may create jobs near forest areas.",
      effectiveDate: "August 2023",
      tokenEfficiency: { inputTokens: 54000, outputTokens: 660, factsExtracted: 12, efficiencyScore: 0.022 }
    }
  },
  {
    id: "MSME-POLICY-2024",
    title: "MSME Development (Amendment) Bill, 2024",
    shortTitle: "MSME Dev 2024",
    ministry: "Ministry of MSME",
    category: "Business & Economy",
    status: "pending",
    house: "Rajya Sabha",
    year: 2024,
    dateIntroduced: "2024-09-15",
    datePassed: null,
    tokenCount: 67000,
    pdfUrl: "https://sansad.in",
    tags: ["MSME", "Small Business", "Employment"],
    citizenImpact: "MEDIUM",
    summary: {
      oneLiner: "Expands the definition of MSMEs and strengthens credit access and market linkages for small businesses.",
      keyPoints: [
        "Revised MSME definition: Micro up to ₹1 cr investment, Small up to ₹10 cr.",
        "Mandatory 45-day payment rule: large firms must pay MSMEs within 45 days.",
        "MSME clusters get priority in government procurement up to 35% allocation.",
        "PM MUDRA Yojana loans increased to ₹20 lakh limit.",
        "Online dispute portal for delayed payment grievances."
      ],
      impactOnYou: "Small business owners will get faster payments from large buyers. Self-employed individuals can access larger MUDRA loans. Government contracts more accessible to small enterprises.",
      effectiveDate: "Pending Parliamentary Approval",
      tokenEfficiency: { inputTokens: 67000, outputTokens: 700, factsExtracted: 14, efficiencyScore: 0.021 }
    }
  }
];

export const statsData = {
  totalBills: 274,
  passed: 218,
  pending: 38,
  rejected: 18,
  avgEfficiencyScore: "0.021",
  totalTokensSaved: "6.8M",
  co2Saved: "19.2 kg"
};

export const categories = [
  "All",
  "Economy & Taxation",
  "Technology & Privacy",
  "Criminal Justice",
  "Environment",
  "Religion & Land",
  "Business & Economy",
  "Banking & Finance",
  "Immigration & Security",
  "Infrastructure",
  "Disaster & Emergency",
  "Labour & Industry",
  "Social Justice"
];

export const yearFilters = [2026, 2025, 2024, 2023];
