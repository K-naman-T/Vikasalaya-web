import { Resource } from './types'

export const resources: { [key: string]: Resource[] } = {
  media: [
    {
      title: "Community Impact Video",
      description: "Experience the transformative impact of our initiatives through this comprehensive video showcase. Watch how our programs are making a real difference in communities across India.",
      url: "wCHqad7nD84",
      type: "video"
    },
    {
      title: "Oxygen Concentrator Donation",
      description: "We donated oxygen concentrators to hospitals in need across India. This is a video showcasing the donation process and the impact it is having on communities.",
      url: "https://fb.watch/lmDKI9o-G4/?mibextid=RUbZ1f",
      type: "facebook"
    },
    {
      title: "Vikasalaya Gallery",
      description: "Explore our visual journey through various initiatives and programs that showcase our impact across communities.",
      type: "gallery",
      folders: [
        'images/Wayanad',
        'images/mental-health',
        'images/after-school',
        'images/play-n-learn',
        'images/aanganwadi-bangalore',
        'images/menstrual-hygiene',
        'images/oxygen-donation',
        'images/kashmir'
      ],
    }
  ],
  reports: [
    {
      title: "Mental Health Awareness for Defense Personnel",
      description: "A comprehensive guide on mental health awareness and support strategies for defense personnel and their families. This report includes detailed findings and recommendations.",
      url: "/reports/Nagpur Activity Report.pdf",
      type: "report"
    },
    {
      title: "Annual Report 2022-2023",
      description: "A detailed annual report covering Vikasalaya Foundation's activities, achievements, and impact over the period of 2022-2023.",
      url: "/reports/ANNUAL REPORT 2022-2023.pdf",
      type: "report"
    },
    {
      title: "Annual Report 2023-2024",
      description: "A detailed annual report covering Vikasalaya Foundation's activities, achievements, and impact over the period of 2023-2024.",
      url: "/reports/ANNUAL REPORT 2023-24.pdf",
      type: "report"
    }
  ],
  publications: [
    {
      title: "Governance, Digital Economy, Start-ups and new horizons in employment sector",
      description: "An in-depth analysis by Vikash Kumar Paul & Priyadarshni Rawal exploring the evolving landscape of governance in the digital age, examining how technological advancements are reshaping economic structures, fostering innovation through start-ups, and creating new employment opportunities across sectors. The article provides valuable insights into the intersection of policy, technology, and workforce development.",
      type: "article",
      category: "Articles",
      url: "/reports/Governance, Digital Economy, Start-ups and new horizons in employment sector - An article by Vikash Kumar Paul & Priyadarshni Rawal.pdf"
    },
    {
      title: "Revisiting the Asian identity and IR",
      description: "A comprehensive analysis by Priyadarshni Rawal examining the complex dynamics of Asian identity in the context of International Relations, exploring historical perspectives, contemporary challenges, and future implications for regional cooperation and global diplomacy.",
      type: "article",
      category: "Articles",
      url: "/reports/Revisiting the Asian identity and IR - Article by Priyadarshni Rawal.pdf"
    },
    {
      title: "The altering dichotomy of self and other",
      description: "A thought-provoking academic paper by Priyadarshni Rawal exploring the evolving relationship between self-identity and otherness in modern society, examining how traditional boundaries and definitions are being redefined in our interconnected world.",
      type: "article",
      category: "Articles",
      url: "/reports/The altering dichotomy of self and other - Paper by Priyadarshni Rawal.pdf"
    },
    {
      title: "Dualism of human rights violations in North Korea",
      description: "An article by Priyadarshni Rawal exploring the human rights violations in North Korea, examining how the regime's policies are impacting the lives of its citizens. The article provides valuable insights into the intersection of policy, technology, and workforce development.",
      type: "article",
      category: "Articles",
      url: "/reports/Dualism of human right violations in North Korea.pdf"
    },
    {
      title: "Newsletters Coming Soon",
      description: "We're working on our newsletter system. Stay tuned for updates on our first newsletter launch!",
      type: "newsletter",
      category: "Newsletters"
    },
    {
      title: "Vikasalaya Foundation Fraud & Anti-Corruption Policy",
      description: "A comprehensive policy on fraud and anti-corruption measures to protect the integrity of Vikasalaya Foundation's operations and ensure transparency in all activities.",
      type: "policy",
      category: "Policies",
      url: "/reports/Vikasalaya Foundation fraud & anti corruption Policy.pdf"
    },
    {
      title: "Vikasalaya Foundation Finance Manual",
      description: "A comprehensive guide covering budgeting, accounting standards, internal controls, and reporting requirements to ensure transparent and efficient financial management across the organization.",
      type: "policy",
      category: "Policies",
      url: "/reports/Vikasalaya Foundation finance manual.pdf"
    },
    {
      title: "Vikasalaya Foundation HR Manual",
      description: "A detailed overview of HR policies including recruitment, benefits, performance management, and professional development, designed to support employee wellbeing and organizational growth.",
      type: "policy",
      category: "Policies",
      url: "/reports/Vikasalaya Foundation HR manual.pdf"
    },
    {
      title: "Vikasalaya Foundation Procurement Policy",
      description: "Guidelines for vendor selection, bidding processes, and quality control measures to ensure cost-effective and transparent procurement while maintaining high standards in our supply chain.",
      type: "policy",
      category: "Policies",
      url: "/reports/Vikasalaya Foundation proccurement Policy.pdf"
    },
    {
      title: "Vikasalaya Foundation Workplace Harassment Policy",
      description: "Essential framework addressing workplace harassment and discrimination, including reporting procedures, investigation protocols, and preventive measures to maintain a safe and inclusive environment.",
      type: "policy",
      category: "Policies",
      url: "/reports/Vikasalaya Foundation workplace harassment policy.pdf"
    }
  ]
} 