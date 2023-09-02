import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  airbnb,
  binance,
  coinbase,
  dropbox,
  star,
  edcs,
  ed_ops,
  ed_ops_lagos,
  ed_sd,
  oldkobo,
  justme,
  secure,
  access,
  trust,
  aisha_board,
  edward_board,
  obiora_board,
} from '../assets'
import { layout } from '../style'

export const navLinks = [
  {
    id: 'home',
    link: '',
    title: 'Home',
  },

  {
    id: 'values',
    title: 'Our Values',
    dropdown: true,
    historyLinks: [
      {
        id: 'values-1',
        title: 'Our Values',
        link: 'values',
      },

      {
        id: 'values-2',
        title: 'Our Partners',
        link: 'our_partners',
      },
    ],
  },

  {
    id: 'service',
    title: 'Our Services',
    dropdown: true,
    historyLinks: [
      {
        id: 'service-1',
        title: 'Currency Mint',
        link: 'currency_service',
      },
      {
        id: 'service-2',
        title: 'Security Prints',
        link: 'security_prints',
      },
    ],
  },

  {
    id: 'contact',
    link: 'contactus',
    title: 'Contact Us',
  },

  {
    id: 'history',
    title: 'History',
    dropdown: true,
    historyLinks: [
      {
        id: 'history-1',
        title: 'Holding Structure',
        link: 'history_structure',
      },
      {
        id: 'history-2',
        title: 'Shared Capital',
        link: 'history_sharedcapital',
      },
      {
        id: 'history-3',
        title: 'Currency History',
        link: 'history',
      },
    ],
  },

  {
    id: 'management',
    link: 'teams',
    title: 'Our Team',
  },
]

export const services = [
  {
    id: 'service-1',
    class: layout.serviceSection,
    title: 'Currency Production',
    context: `The MINT produces Nigeria's Naira Notes. The MINT has been in charge of the production of local currency notes since they were introduced in 1965. It does this on behalf of the Central Bank of Nigeria. The naira note is an enabler of Nigeria's physical economy. It is the country's official unit of exchange and store of value. It is also a national symbol.These facts warrant the protection of the naira against counterfeiting. Nigeria's monetary regulators want to guarantee the integrity of the Nigerian currency, and they take steps to secure the notes. Thousands of counterfeit naira notes are captured and recovered from circulation every year.Currency imitators try to counterfeit notes by using scanning and printing techniques with varying resolutions. Most fake currencies can be detected with the naked eye. A fraction will only be found out with the use of light-based examination and authenticating machines.We Ensure the Security of Naira Notes.For decades, the MINT has produced Nigeria's naira notes. The notes are among the most secure in the world, with features that are almost impossible to replicate outside of our production system`,
  },

  {
    id: 'service-2',
    class: layout.serviceSectionReverse,
    title: 'Certificates Print',
    context:
      'The Mint produces all certificates, particularly academic, birth, death, and marriage certificates. These certificates are printed with security features embedded that prevent forgery, cloning, or counterfeiting',
  },

  {
    id: 'service-3',
    class: layout.serviceSection,
    title: 'SmartCard Perso Bureau',
    context:
      'The Mint produces all certificates, particularly academic, birth, death, and marriage certificates. These certificates are printed with security features embedded that prevent forgery, cloning, or counterfeiting',
  },

  {
    id: 'service-4',
    class: layout.serviceSectionReverse,
    title: 'Verification and Authentication of Certificates (VAC) Solution',
    context:
      'In conjunction with higher institutions of learning in Nigeria, we assist in verifying the authenticity of certificates presented by graduates of tertiary institutions and professional bodies. We also assist graduates in transmitting transcripts securely from their alma mater to end-users anywhere in the world',
  },

  {
    id: 'service-5',
    class: layout.serviceSection,
    title: 'Quick Response (QR) Technology in Security',
    context:
      'In conjunction with higher institutions of learning in Nigeria, we assist in verifying the authenticity of certificates presented by graduates of tertiary institutions and professional bodies. We also assist graduates in transmitting transcripts securely from their alma mater to end-users anywhere in the world',
  },

  {
    id: 'service-6',
    class: layout.serviceSectionReverse,
    title: 'Digital Tax Stamp Solution',
    context:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vitae magnam et quis aliquid itaque incidunt voluptas natus quae? Tempora placeat, hic ad quia sapiente unde itaque quidem quisquam reprehenderit.',
  },
]

export const features = [
  {
    id: 'feature-1',
    icon: secure,
    title: 'Security',
    content:
      'With the potential to generate most up-to-date security features,  We take proactive steps make sure your information is secured.',
  },
  {
    id: 'feature-2',
    icon: access,
    title: 'Accessibility',
    content:
      'We have Set Up a Tier II Data Center, with an Uptime of 99%. You Data is Accessible to you where you need it. When you need it.',
  },
  {
    id: 'feature-3',
    icon: trust,
    title: 'Trust',
    content:
      'We have built a circle of trust working with Ministries, Universities and the Central Bank of Nigeria among others.',
  },
]

export const feedback = [
  {
    id: 'feedback-1',
    content:
      'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
    name: 'Herman Jensen',
    title: 'Founder & Leader',
    img: people01,
  },
  {
    id: 'feedback-2',
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: 'Steve Mark',
    title: 'Founder & Leader',
    img: people02,
  },
  {
    id: 'feedback-3',
    content:
      'It is usually people in the money business, finance, and international trade that are really rich.',
    name: 'Kenn Gallagher',
    title: 'Founder & Leader',
    img: people03,
  },
]

export const stats = [
  {
    id: 'stats-1',
    title: 'Clients',
    value: '3700+',
  },
  {
    id: 'stats-2',
    title: 'Naira Notes Printed',
    value: 'N200B+',
  },
  {
    id: 'stats-3',
    title: 'Printed Certificates',
    value: 'N230M+',
  },
]

export const contact_data = [
  {
    id: 'contact-1',
    icon: star,
    title: 'Phone Number',
    is_both: true,
    lagos_office: '+234 90 622 74 656',
    abuja_office: '+234 91 393 62 827',
  },
  {
    id: 'contact-2',
    icon: star,
    title: 'Email Address',
    content: 'business.sales@mintnigeria.com',
  },
  {
    id: 'contact-3',
    icon: star,
    title: 'GeoLocation',
    is_both: true,
    lagos_office:
      'P.O. Box 3053, 26 Ahmadu Bello Way, Victoria Island 106104, Lagos',
    abuja_office: '160 Samuel Ladoke Boulevard, Garki 2, Abuja',
  },
]

// Stats Data for Vac

export const vac_stats = [
  {
    id: 'stats-1',
    title: 'Partnering Universities',
    value: '17',
  },
  {
    id: 'stats-2',
    title: 'Revenue Generated',
    value: 'N200B+',
  },
  {
    id: 'stats-3',
    title: 'Verifications',
    value: '30M+',
  },
]

export const footerLinks = [
  {
    title: 'Useful Links',
    links: [
      {
        name: 'Our Values',
        link: 'values',
      },

      {
        name: 'Our Team',
        link: 'teams',
      },
      {
        name: 'Explore Our History',
        link: 'history',
      },
      {
        name: 'Our Privacy Policy',

        link: 'privacy',
      },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        name: 'Contact Us',
        link: 'contactus',
      },
      {
        name: 'VAC',
        tab: true,
        link: 'https://www.authenticatehub.com',
      },
      {
        name: 'Suggestions',
        link: 'contactus',
      },
    ],
  },
  {
    title: 'Partner',
    links: [
      {
        name: 'Our Partnership',
        link: 'our_partners',
      },
    ],
  },
]

export const socialMedia = [
  {
    id: 'social-media-1',
    icon: instagram,
    link: 'https://www.instagram.com/nspmplc/',
  },
  {
    id: 'social-media-2',
    icon: facebook,
    link: 'https://web.facebook.com/NSPMPlc/',
  },
  // {
  //   id: 'social-media-3',
  //   icon: twitter,
  //   link: 'https://www.twitter.com/',
  // },
  {
    id: 'social-media-4',
    icon: linkedin,
    link: 'https://ng.linkedin.com/company/nspmplc',
  },
]

export const digital_division = [
  {
    id: 'division-1',
    links: [
      {
        name: 'Verification and Authentication of Certificates (VAC)',
        link: 'vac',
        content:
          'In conjunction with higher institutions of learning in Nigeria, we assist in verifying and authenticating the genuineness of certificates presented by graduates of tertiary institutions and professional bodies. We also assist graduates in transmitting transcripts securely from their alma mater to end-users anywhere in the world',
      },
      {
        name: 'SmartCards & IDs',
        link: 'track_trace',
        content:
          "We produce payment cards, ID cards, voter's cards, state resident cards, etc that is value, data and brand by nature. These also ensures digital service offerings.",
      },
      {
        name: 'Track and Trace Solutions',
        link: 'track_trace',
        content:
          'We offer track and trace solutions for your products with improved safety that eliminates fakes from the supply chain. Also, a track and trace solution can conveniently monitor your products throughout their lifecycle. This solution ensures efficiency in service delivery and curbs the challenges of revenue loss due to product counterfeiting',
      },
    ],
  },
]

export const physical_division = [
  {
    id: 'division-1',
    links: [
      {
        name: 'Digitalized Certificates',
        content:
          'The Nigerian Security Printing & Minting Plc prints certificates embedded with security features which deterrent to forgers, and  counterfeiters.',
        link: 'certificates',
      },

      {
        name: 'QR codes on Documents',
        content:
          'We embed our print products with quick response codes QR codes (with concealed information) which can be decrypted and the information revealed with smart phones. ',
        link: 'letterhead',
      },
    ],
  },
]

export const conventional_division = [
  {
    id: 'division-1',
    links: [
      {
        name: 'Certificates',
        content:
          'We print academic institutions certificates, indigenes certificates,marriage, birth & death certificates etc.',
        link: 'certificates',
      },

      {
        name: 'Secured LetterHead',
        content:
          'Letterhead papers are sensitive office documents that should be secured to protect communication flow within and outside an organization. The Mint secured letterheads help you achieve this goal.',
        link: 'letterhead',
      },

      {
        name: 'Examination Papers',
        content:
          'With our state-of-the-art press, The Mint prints randomized examination papers that can be personalized to each candidate. Randomization can be which be achieved at high volume print and eliminates examination malpractice on site.',
        link: 'examination',
      },

      {
        name: 'Revenue Receipts / Invoices',
        content:
          'As a highly sensitive document for generating revenue for public and private sector organizations, our revenue receipts can be printed on customized paper embedded with various customized overt, covert, and forensic security features. These features minimize and eliminate any form of malpractice that may arise.',
        link: 'receipts',
      },

      {
        name: 'Stamps',
        content:
          'The Mint produces highly secured and traceable stamps embedded with different characteristics, which authenticity and origin can be ascertained.',
        link: 'stamps',
      },

      {
        name: 'Electoral Materials',
        content:
          'The Mint produces election materials for the Independent National Electoral Commission and the Independent Electoral Commission in various states in Nigeria. Our prints can be location specific to local/ward voting units. This feature helps eliminate or minimize cross-border malpractices.',
        link: 'electoral',
      },

      {
        name: 'Real Estate Documents',
        content:
          'NSPM prints real estate documents on the finest security papers, which are embedded with modern security features that prevent forgery and make fakes easy to detect. These documents include a certificate of occupancy, right of occupancy, deeds of assignment, etc',
        link: 'real_estate',
      },

      {
        name: 'Shipping Documents',
        content:
          'Shipping documents are printed with modern security features that distinguish Mint products from ingenuine documents and also prevent tampering and counterfeiting. These include bill of lading, waybill, certificate of origin, etc.',
        link: 'shipping_docs',
      },
    ],
  },
]

export const clients = [
  {
    id: 'client-1',
    logo: airbnb,
  },
  {
    id: 'client-2',
    logo: binance,
  },
  {
    id: 'client-3',
    logo: coinbase,
  },
  {
    id: 'client-4',
    logo: dropbox,
  },
]

export const boards_nspm = [
  {
    id: 'board-3',
    logo: edcs,
    title: 'EXECUTIVE DIRECTOR CORPORATE SERVICES',
    name: 'MALAM ADO DANJUMA',
    content:
      'ADO Danjuma is currently the Executive Director, Corporate Services of the NSPM PLC when he was appointed on 1st September, 2022. He has B.Sc. (Hons.) in Economics (Second Class Upper) in 1983/84 from Bayero University, Kano, and a Masters’ Degree in Business Administration from the same University. After graduating in 1984, he joined the services of Habib Nigeria Bank in 1985. He rose to the position of DGM/GM and Assistant to the Managing Director from 2001 – 2005. During that period, he was also on the Board of the Bank in the United Kingdom UK, United Arab Emirates UAE and Pakistan. He was Divisional Director of Bank PHB when Habib Nigeria Bank and Platinum Bank merged in 2005 – 2006 before he voluntarily retired in 2006. Malam Ado Danjuma has over 20 years’ experience in the Financial and Banking Industry with Habib Nigeria Bank and later with Bank PHB at Strategic Management Levels and over 10 years’ experience (2009 – 2019) in Management and Consulting with the Harley Reed International, UK (CIPS UK Accredited Centre in Nigeria). He was the Country Director, Nigeria for Harley Reed International, a Consulting Firm based in the United Kingdom with a network of offices in Nigeria, Ghana, South Africa and Kenya. In Nigeria, Harley Reed International provided Consultancy Services to NLNG, SPDC, NCC, NEMA and a host of World Bank Projects. Following the Consulting role, he played, he was appointed Board Member Nigerian Red Cross International (NRCI) Bida from 2017 – 2021. He was also Board Member of FIRS (Part-time) 2019 – 2023. Malam Ado Danjuma is a member of the Chartered Institute of Procurement & Supply (MCIPS) UK, and also to issues on Leadership in Johannesburg South Africa; Performance Management, UK; Cultural Change, Alexandria Egypt; Fiscal Policy UAE and a host of other Leadership issues in China, India amongst others.',
  },
  {
    id: 'board-4',
    logo: ed_ops,
    title: 'EXECUTIVE DIRECTOR – OPERATIONS (ABUJA FACTORY)',
    name: 'Mr Abubakar Sule Minjibir',
    content:
      "Abubakar is currently, the Executive Director (Operations)-Abuja factory who provides the required leadership and effective coordination of the day-to-day operations of the factory in synergy and support from other Executive committee members in line with the current Board mandate of restructuring and rejuvenating the company. Prior to this current position, he worked with the Federal civil service commission, Uni Petrol Nigeria Limited, Valtha oil & Gas, Oando PIc, Abuja Investment, Central Bank of Nigeria, and Tawada Limited. Abubakar is a Harvard-trained General Management Executive (GMP-9), Chartered Chemist with BSc in Chemistry, MSc in Financial Economics, MBA in Financial Management & Executive Masters certificate in Project Management- PMC London. He is also a recipient of a Doctor of Business Administration (DBA) - Honoris causa from commonwealth university UK. A fellow of the Institute of Management consultant with extensive cross-functional experiences of about 33 years across various industries, from Manufacturing, Oil & Gas, Investment, Project Management functions, Operations management functions, Security ink manufacturing &Security Printing. Drives high commitment to the essentials of Good Corporate Governance and turnaround. Highly skilled and well-motivated experienced manufacturing Operations expert, extremely knowledgeable with almost 20 years at Executive and Board level. He has also attended senior Executive programs at Harvard Business School USA, London Business School UK, Kellogg's School of Management USA, Oxford University UK, Peking University China, University of Columbia New York, USA, and Lagos Business School. An active member of the following International & local associations: Member, Harvard Alumni Association, Member, London Business School Alumni Association, Member, Columbia University Alumni Association, USA, Member, Institute of Chartered Chemist of Nigeria (ICCON), Fellow, Institute of Management Consultant, Nigeria, Member, Institute of Directors, Nigeria/UK, Member, National Council, Member, Manufacturer's Association of Nigeria (MAN), Chairman, Manufacturers Association of Nigeria (MAN) Abuja, Nasarawa & Niger Branch, Member, Nigerian Institute of Management (NIM), Presented various papers at both local & International conferences.",
  },

  {
    id: 'board-5',
    logo: ed_ops_lagos,
    title: 'EXECUTIVE DIRECTOR – OPERATIONS (LAGOS FACTORY)',
    name: 'Engr Chris Orewa',
    content:
      'Chris is a professional Engineer with over 34 years of extensive Leadership on managerial levels in the manufacturing industry, where he has been involved in building, implementing, overseeing systems, processes and workflows. He has had the opportunity of working in three continents in various sectors of the economy with multinational Conglomerates some of which are Betol Machinery, Luton, Unilever Canada, Sanofi Pasteur, Bayer Canada, Flour Mills of Nigeria. Engineer Chris holds a Bachelor degree in Engineering (B.Eng) and a Master’s degree in Business Administration (MBA) from the University of Benin, Benin City. He has attended various technical, project and executive management Courses. He is a member of Nigeria Society of Engineers, council of registered Engineers of Nigeria and association of Professional Engineers and geoscientists of Saskatchewan.',
  },
  {
    id: 'board-6',
    logo: ed_sd,
    title: 'EXECUTIVE DIRECTOR – SECURITY DOCUMENTS',
    name: 'Tunji Kazeem',
    content:
      'Mr. Tunji Kazeem is a seasoned Financial Executive with a wealth of experience spanning several years working in global financial institutions such as Citigroup, Standard and Poor’s and the Nigerian Stock Exchange. He was appointed the Executive Director (Security Documents) at the Nigerian Security Printing and Minting, where he currently works as a member of the Executive Management overseeing all the activities of the Mint and driving the company’s digital transformational agenda. Mr. Kazeem holds a Bachelor’s degree in Economics and Accounting from Rutgers University and an MBA from Columbia Business School. He has also attended several leadership, business management and strategy courses.',
  },
  // {
  //   id: 'board-7',
  //   logo: adviser,
  //   title: 'SENIOR TECHNICAL ADVISER TO CBN GOVERNOR',
  //   name: 'PROFESSOR THOMAS ONYISI ODOZI',
  //   content:
  //     'Currently the Senior Technical Adviser to the Governor, Central Bank of Nigeria, on NSPM Plc , he holds a PhD. Industrial Chemistry, University of Lagos, Nigeria, M.Sc, Industrial Chemistry, Synthesized Nylon 3 for Liquid Crystal Display, Atlanta University, Atlanta, USA , B.Sc Chemistry, Southern University, Louisiana,USA. He was the Former GM (Security Documents) of NSPM, and directly responsible then to the MD/CE of NSPM, Plc on matters related to technology adoption, adaptation and its relevance to NSPM, Plc viability. Besides, he had held some adhoc functions in various capacities at different levels. Among these, the Current Chairman of the African Banknote Security Documents Printers Association’s Technical Committee, sits on the Executive Membership Committee of the Association, and a plethora of other administrative functions. Professor Odozi is a constant face in the Security Print Industry and has through devotion of duty and diligence carved a niche for himself not only in this hybrid discipline as a professional, but also in other facets of life.',
  // },
]

export const boards_cbn = [
  // {
  //   id: 'board-1',
  //   logo: acting_cbn,
  //   is_cbn: true,

  //   title: 'Acting Chairman, Board of Directors',
  //   name: 'Mr. Folashodun Adebisi Shonubi',
  //   content:
  //     'Godwin Emefiele is the Governor of the Central Bank of Nigeria (CBN). Prior to his joining the CBN, he spent over 26 years in commercial banking culminating in his tenure as Group Managing Director and Chief Executive Officer of Zenith Bank PLC, one of Nigeria’s largest banks .',
  // },
  {
    id: 'board-1-1',
    logo: aisha_board,
    title: 'Deputy Governor, Financial System Stability Directorate',
    name: 'Mrs. Aishah N, Ahmad',
    is_cbn: true,

    content:
      'Godwin Emefiele is the Governor of the Central Bank of Nigeria (CBN). Prior to his joining the CBN, he spent over 26 years in commercial banking culminating in his tenure as Group Managing Director and Chief Executive Officer of Zenith Bank PLC, one of Nigeria’s largest banks .',
  },

  {
    id: 'board-1-2',
    logo: edward_board,
    title: 'Deputy Governor, Corporate Services Directorate',
    name: 'Mr. Edward L. Adamu',
    is_cbn: true,
    content:
      'Godwin Emefiele is the Governor of the Central Bank of Nigeria (CBN). Prior to his joining the CBN, he spent over 26 years in commercial banking culminating in his tenure as Group Managing Director and Chief Executive Officer of Zenith Bank PLC, one of Nigeria’s largest banks .',
  },

  {
    id: 'board-1-3',
    logo: obiora_board,
    is_cbn: true,

    name: 'Dr. Kingsley Obiora',
    title: 'Deputy Governor, Economic Policy Directorate',
    content:
      'Godwin Emefiele is the Governor of the Central Bank of Nigeria (CBN). Prior to his joining the CBN, he spent over 26 years in commercial banking culminating in his tenure as Group Managing Director and Chief Executive Officer of Zenith Bank PLC, one of Nigeria’s largest banks .',
  },

  // {
  //   id: 'board-2',
  //   logo: md,
  //   title: 'Managing Director & Chief Executive',
  //   name: 'Mr Ahmed Halilu Mni',
  //   content:
  //     'Mr Ahmed A. Halilu has over 23 years of experience in the banking sector having worked for African International Bank Ltd (AIB) and Zenith Bank Plc. He was appointed Executive Director Operations of the Nigerian Security Printing and Minting Plc and later redeployed to Corporate Services Directorate in 2018. This appointment came after he attended Senior executive Course 39, 2017 of the National Institute for Policy and Strategic Studies (NIPSS) Kuru, Jos leading to the award of Member of the National Institute, mni. Mr Halilu has been Acting Managing Director since May, 2022 following the resignation of the former Managing Director. His confirmation as Managing Director and Chief Executive is effective September, 2022. Mr Halilu holds a Bachelor Degree in Agriculture (B. Agric), Masters in Business Administration (MBA) and Masters in International Affairs and Diplomacy (MIAD) all from Ahmadu Bello University (ABU), Zaria. He is a Member of the National Institute (mni), Honorary Senior Member of the Chartered Institute of Bankers of Nigeria (HCIB), fellow Institute of Corporate Administration (FICA) and member Nigeria Institute of Management (MNIM).',
  // },
  // {
  //   id: 'board-3',
  //   logo: edcs,
  //   title: 'EXECUTIVE DIRECTOR CORPORATE SERVICES',
  //   name: 'MALAM ADO DANJUMA',
  //   content:
  //     'ADO Danjuma is currently the Executive Director, Corporate Services of the NSPM PLC when he was appointed on 1st September, 2022. He has B.Sc. (Hons.) in Economics (Second Class Upper) in 1983/84 from Bayero University, Kano, and a Masters’ Degree in Business Administration from the same University. After graduating in 1984, he joined the services of Habib Nigeria Bank in 1985. He rose to the position of DGM/GM and Assistant to the Managing Director from 2001 – 2005. During that period, he was also on the Board of the Bank in the United Kingdom UK, United Arab Emirates UAE and Pakistan. He was Divisional Director of Bank PHB when Habib Nigeria Bank and Platinum Bank merged in 2005 – 2006 before he voluntarily retired in 2006. Malam Ado Danjuma has over 20 years’ experience in the Financial and Banking Industry with Habib Nigeria Bank and later with Bank PHB at Strategic Management Levels and over 10 years’ experience (2009 – 2019) in Management and Consulting with the Harley Reed International, UK (CIPS UK Accredited Centre in Nigeria). He was the Country Director, Nigeria for Harley Reed International, a Consulting Firm based in the United Kingdom with a network of offices in Nigeria, Ghana, South Africa and Kenya. In Nigeria, Harley Reed International provided Consultancy Services to NLNG, SPDC, NCC, NEMA and a host of World Bank Projects. Following the Consulting role, he played, he was appointed Board Member Nigerian Red Cross International (NRCI) Bida from 2017 – 2021. He was also Board Member of FIRS (Part-time) 2019 – 2023. Malam Ado Danjuma is a member of the Chartered Institute of Procurement & Supply (MCIPS) UK, and also to issues on Leadership in Johannesburg South Africa; Performance Management, UK; Cultural Change, Alexandria Egypt; Fiscal Policy UAE and a host of other Leadership issues in China, India amongst others.',
  // },
  // {
  //   id: 'board-4',
  //   logo: ed_ops,
  //   title: 'EXECUTIVE DIRECTOR – OPERATIONS (ABUJA FACTORY)',
  //   name: 'Mr Abubakar Sule Minjibir',
  //   content:
  //     "Abubakar is currently, the Executive Director (Operations)-Abuja factory who provides the required leadership and effective coordination of the day-to-day operations of the factory in synergy and support from other Executive committee members in line with the current Board mandate of restructuring and rejuvenating the company. Prior to this current position, he worked with the Federal civil service commission, Uni Petrol Nigeria Limited, Valtha oil & Gas, Oando PIc, Abuja Investment, Central Bank of Nigeria, and Tawada Limited. Abubakar is a Harvard-trained General Management Executive (GMP-9), Chartered Chemist with BSc in Chemistry, MSc in Financial Economics, MBA in Financial Management & Executive Masters certificate in Project Management- PMC London. He is also a recipient of a Doctor of Business Administration (DBA) - Honoris causa from commonwealth university UK. A fellow of the Institute of Management consultant with extensive cross-functional experiences of about 33 years across various industries, from Manufacturing, Oil & Gas, Investment, Project Management functions, Operations management functions, Security ink manufacturing &Security Printing. Drives high commitment to the essentials of Good Corporate Governance and turnaround. Highly skilled and well-motivated experienced manufacturing Operations expert, extremely knowledgeable with almost 20 years at Executive and Board level. He has also attended senior Executive programs at Harvard Business School USA, London Business School UK, Kellogg's School of Management USA, Oxford University UK, Peking University China, University of Columbia New York, USA, and Lagos Business School. An active member of the following International & local associations: Member, Harvard Alumni Association, Member, London Business School Alumni Association, Member, Columbia University Alumni Association, USA, Member, Institute of Chartered Chemist of Nigeria (ICCON), Fellow, Institute of Management Consultant, Nigeria, Member, Institute of Directors, Nigeria/UK, Member, National Council, Member, Manufacturer's Association of Nigeria (MAN), Chairman, Manufacturers Association of Nigeria (MAN) Abuja, Nasarawa & Niger Branch, Member, Nigerian Institute of Management (NIM), Presented various papers at both local & International conferences.",
  // },

  // {
  //   id: 'board-5',
  //   logo: ed_ops_lagos,
  //   title: 'EXECUTIVE DIRECTOR – OPERATIONS (LAGOS FACTORY)',
  //   name: 'Engr Chris Orewa',
  //   content:
  //     'Chris is a professional Engineer with over 34 years of extensive Leadership on managerial levels in the manufacturing industry, where he has been involved in building, implementing, overseeing systems, processes and workflows. He has had the opportunity of working in three continents in various sectors of the economy with multinational Conglomerates some of which are Betol Machinery, Luton, Unilever Canada, Sanofi Pasteur, Bayer Canada, Flour Mills of Nigeria. Engineer Chris holds a Bachelor degree in Engineering (B.Eng) and a Master’s degree in Business Administration (MBA) from the University of Benin, Benin City. He has attended various technical, project and executive management Courses. He is a member of Nigeria Society of Engineers, council of registered Engineers of Nigeria and association of Professional Engineers and geoscientists of Saskatchewan.',
  // },
  // {
  //   id: 'board-6',
  //   logo: ed_sd,
  //   title: 'EXECUTIVE DIRECTOR – SECURITY DOCUMENTS',
  //   name: 'Tunji Kazeem',
  //   content:
  //     'Mr. Tunji Kazeem is a seasoned Financial Executive with a wealth of experience spanning several years working in global financial institutions such as Citigroup, Standard and Poor’s and the Nigerian Stock Exchange. He was appointed the Executive Director (Security Documents) at the Nigerian Security Printing and Minting, where he currently works as a member of the Executive Management overseeing all the activities of the Mint and driving the company’s digital transformational agenda. Mr. Kazeem holds a Bachelor’s degree in Economics and Accounting from Rutgers University and an MBA from Columbia Business School. He has also attended several leadership, business management and strategy courses.',
  // },
  // {
  //   id: 'board-7',
  //   logo: adviser,
  //   title: 'SENIOR TECHNICAL ADVISER TO CBN GOVERNOR',
  //   name: 'PROFESSOR THOMAS ONYISI ODOZI',
  //   content:
  //     'Currently the Senior Technical Adviser to the Governor, Central Bank of Nigeria, on NSPM Plc , he holds a PhD. Industrial Chemistry, University of Lagos, Nigeria, M.Sc, Industrial Chemistry, Synthesized Nylon 3 for Liquid Crystal Display, Atlanta University, Atlanta, USA , B.Sc Chemistry, Southern University, Louisiana,USA. He was the Former GM (Security Documents) of NSPM, and directly responsible then to the MD/CE of NSPM, Plc on matters related to technology adoption, adaptation and its relevance to NSPM, Plc viability. Besides, he had held some adhoc functions in various capacities at different levels. Among these, the Current Chairman of the African Banknote Security Documents Printers Association’s Technical Committee, sits on the Executive Membership Committee of the Association, and a plethora of other administrative functions. Professor Odozi is a constant face in the Security Print Industry and has through devotion of duty and diligence carved a niche for himself not only in this hybrid discipline as a professional, but also in other facets of life.',
  // },
]

export const history = [
  {
    id: 'history-1',
    header_logo: oldkobo,
    placeholder:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim possimus error praesentium, quis commodi ea distinctio illo culpa sequi architecto.',
    year: '1963',
  },
  {
    id: 'history-1',
    header_logo: oldkobo,
    placeholder:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim possimus error praesentium, quis commodi ea distinctio illo culpa sequi architecto.',
    year: '1963',
  },
  {
    id: 'history-2',
    header_logo: oldkobo,
    placeholder:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim possimus error praesentium, quis commodi ea distinctio illo culpa sequi architecto.',
    year: '1963',
  },
  {
    id: 'history-3',
    header_logo: oldkobo,
    placeholder:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim possimus error praesentium, quis commodi ea distinctio illo culpa sequi architecto.',
    year: '1963',
  },
]

export const past_exec = [
  {
    id: 'history-1',
    header_logo: justme,
    placeholder:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim possimus error praesentium, quis commodi ea distinctio illo culpa sequi architecto.',
    year: '1963',
  },
  {
    id: 'history-1',
    header_logo: justme,
    placeholder:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim possimus error praesentium, quis commodi ea distinctio illo culpa sequi architecto.',
    year: '1963',
  },
  {
    id: 'history-2',
    header_logo: justme,
    placeholder:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim possimus error praesentium, quis commodi ea distinctio illo culpa sequi architecto.',
    year: '1963',
  },
  {
    id: 'history-3',
    header_logo: justme,
    placeholder:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim possimus error praesentium, quis commodi ea distinctio illo culpa sequi architecto.',
    year: '1963',
  },
]
