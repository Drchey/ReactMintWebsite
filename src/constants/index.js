import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
  chairman,
  md,
  edcs,
  ed_ops,
  ed_ops_lagos,
  ed_sd,
  adviser,
} from '../assets'
import { layout } from '../style'

export const navLinks = [
  {
    id: 'home',
    link: '',
    title: 'Home',
  },

  {
    id: 'service',
    link: 'services',
    title: 'Our Services',
  },
  {
    id: 'contact',
    link: 'contactus',
    title: 'Contact Us',
  },

  {
    id: 'history',
    link: 'history',
    title: 'History',
  },

  {
    id: 'board',
    link: 'teams',
    title: 'Our Board',
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
    icon: star,
    title: 'Rewards',
    content:
      'The best credit cards offer some tantalizing combinations of promotions and prizes',
  },
  {
    id: 'feature-2',
    icon: shield,
    title: '100% Secured',
    content:
      'We take proactive steps make sure your information and transactions are secure.',
  },
  {
    id: 'feature-3',
    icon: send,
    title: 'Balance Transfer',
    content:
      'A balance transfer credit card can save you a lot of money in interest charges.',
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
    content: '+234 90 390 39 237, + 234 80 359 70 609',
  },
  {
    id: 'contact-2',
    icon: star,
    title: 'Email Address',
    content: 'joeydias@gmail.com',
  },
  {
    id: 'contact-3',
    icon: star,
    title: 'GeoLocation',
    content: '34 Samuel Ladoke Boulevard, Garki',
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
        name: 'About Us',
        link: '',
      },
      {
        name: 'Our Services',
        link: 'services',
      },
      {
        name: 'Our Team',
        link: 'team',
      },
      {
        name: 'Explore Our History',
        link: 'history',
      },
      {
        name: 'Our Privacy Policy',
        link: 'https://www.hoobank.com/terms-and-services/',
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
        link: 'https://www.hoobank.com/partners/',
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
        name: 'Become a Partner With Us',
        link: 'contactus',
      },
    ],
  },
]

export const socialMedia = [
  {
    id: 'social-media-1',
    icon: instagram,
    link: 'https://www.instagram.com/',
  },
  {
    id: 'social-media-2',
    icon: facebook,
    link: 'https://www.facebook.com/',
  },
  {
    id: 'social-media-3',
    icon: twitter,
    link: 'https://www.twitter.com/',
  },
  {
    id: 'social-media-4',
    icon: linkedin,
    link: 'https://ng.linkedin.com/company/nspmplc',
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

export const boards = [
  {
    id: 'board-1',
    logo: chairman,
    title: 'chairman',
    name: 'Mr. Godwin Emefiele',
    content:
      'Godwin Emefiele is the Governor of the Central Bank of Nigeria (CBN). Prior to his joining the CBN, he spent over 26 years in commercial banking culminating in his tenure as Group Managing Director and Chief Executive Officer of Zenith Bank PLC, one of Nigeria’s largest banks .',
  },
  {
    id: 'board-2',
    logo: md,
    title: 'Managing Director & Chief Executive',
    name: 'Mr Ahmed Halilu Mni',
    content:
      'Mr Ahmed A. Halilu has over 23 years of experience in the banking sector having worked for African International Bank Ltd (AIB) and Zenith Bank Plc. He was appointed Executive Director Operations of the Nigerian Security Printing and Minting Plc and later redeployed to Corporate Services Directorate in 2018. This appointment came after he attended Senior executive Course 39, 2017 of the National Institute for Policy and Strategic Studies (NIPSS) Kuru, Jos leading to the award of Member of the National Institute, mni. Mr Halilu has been Acting Managing Director since May, 2022 following the resignation of the former Managing Director. His confirmation as Managing Director and Chief Executive is effective September, 2022. Mr Halilu holds a Bachelor Degree in Agriculture (B. Agric), Masters in Business Administration (MBA) and Masters in International Affairs and Diplomacy (MIAD) all from Ahmadu Bello University (ABU), Zaria. He is a Member of the National Institute (mni), Honorary Senior Member of the Chartered Institute of Bankers of Nigeria (HCIB), fellow Institute of Corporate Administration (FICA) and member Nigeria Institute of Management (MNIM).',
  },
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
  {
    id: 'board-7',
    logo: adviser,
    title: 'SENIOR TECHNICAL ADVISER TO CBN GOVERNOR',
    name: 'PROFESSOR THOMAS ONYISI ODOZI',
    content:
      'Currently the Senior Technical Adviser to the Governor, Central Bank of Nigeria, on NSPM Plc , he holds a PhD. Industrial Chemistry, University of Lagos, Nigeria, M.Sc, Industrial Chemistry, Synthesized Nylon 3 for Liquid Crystal Display, Atlanta University, Atlanta, USA , B.Sc Chemistry, Southern University, Louisiana,USA. He was the Former GM (Security Documents) of NSPM, and directly responsible then to the MD/CE of NSPM, Plc on matters related to technology adoption, adaptation and its relevance to NSPM, Plc viability. Besides, he had held some adhoc functions in various capacities at different levels. Among these, the Current Chairman of the African Banknote Security Documents Printers Association’s Technical Committee, sits on the Executive Membership Committee of the Association, and a plethora of other administrative functions. Professor Odozi is a constant face in the Security Print Industry and has through devotion of duty and diligence carved a niche for himself not only in this hybrid discipline as a professional, but also in other facets of life.',
  },
]
