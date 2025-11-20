import { ServiceType, FAQType } from './Types';

export const links = ['Home', 'About', 'Contact'];

export const services: ServiceType[] = [
  {
    icon: '🥚',
    title: 'Egg Donation',
    description:
      'Access our extensive database of carefully screened egg donors. We maintain only the top 5% of candidates with comprehensive medical, genetic, and psychological screening.',
  },
  {
    icon: '👶',
    title: 'Surrogacy Programs',
    description:
      'Comprehensive gestational surrogacy services with thoroughly screened surrogates, complete legal support, and dedicated medical care throughout the pregnancy journey.',
  },
  {
    icon: '🔬',
    title: 'IVF Treatment',
    description:
      'Advanced IVF procedures including our innovative eSET (Elective Single Embryo Transfer) protocol, utilizing state-of-the-art technology for optimal success rates.',
  },
];

export const faqs: FAQType[] = [
  {
    question: 'Why choose fresh donor eggs over frozen?',
    answer:
      'Fresh donor eggs frequently result in higher success rates of fertilization and implantation compared to frozen eggs. Recent 2025 research confirms that cryopreserved oocytes yield significantly lower rates of implantation and live births. At Embryon Family, we prioritize transparency and invest fully to ensure live birth success.',
  },
  {
    question: 'How long does the surrogacy process take?',
    answer:
      'Once your match is confirmed, egg retrieval can happen within 30 days! The complete surrogacy journey typically takes 12-18 months from initial consultation to birth, including surrogate matching, medical procedures, pregnancy, and delivery.',
  },
  {
    question: 'What makes Embryon Family different?',
    answer:
      'We are American-managed and operated with over 30 years of legacy since 1994. We have facilitated over 28,000 transformative journeys with outstanding live birth rates. Our philosophy of "Everything Matters" ensures personalized care, and every single client chooses to work with the first Embryon Family surrogate they connect with.',
  },
  {
    question: 'What is the egg donor selection process?',
    answer:
      'We simplify the process with 5 clear stages: Submit your desired characteristics, review detailed donor profiles with photos, connect with potential donors, choose your perfect match, and confirm for fresh transfer. All donors undergo extensive medical and psychological screening.',
  },
  {
    question: 'Is surrogacy legal in Ukraine?',
    answer:
      'Yes, surrogacy is legal in Ukraine for heterosexual couples where the wife is unable to give birth or has medical contraindications. Legally, at least one parent must have a genetic link to the child. Single parent surrogacy is not permitted in Ukraine.',
  },
];

export const FooterData = {
  logo: '/footerLogo.svg',

  clinicName: 'The Embryon Family Fertility Center',

  address: 'Zahorivska St, 1, Kyiv, Ukraine',
  workingDays: 'Mon–Sun 08:00–23:00 (GMT+2)',

  hotline: '+380 975972636',
  tollFree: '+1 (866) 446-6222 (USA/Canada)',
  email: 'letstalk@embryon-ukraine.com',

  pages: [
    'About Our Clinic',
    'Meet Ira',
    'Articles',
    'Contact',
    'About Our Egg Donors',
    'Privacy Policy',
    'Sitemap',
  ],

  services: [
    'Egg Donation Overview',
    'The Surrogacy Program',
    'Egg Donation Program',
    'Egg Donation Costs',
    'Embryo Donation Costs',
    'Egg Donor Matching',
    'Surrogate Screening Process',
  ],

  socials: ['Facebook-f', 'Instagram', 'Linkedin-in', 'Whatsapp', 'Youtube'],
};


// Add this to your Consts.ts file

import { BlogArticle } from './Types';

export const blogArticles: BlogArticle[] = [
  {
    id: 'types-of-surrogacy',
    title: 'What are the Different types of Surrogacy: From Hope to Pregnancy',
    excerpt: 'Understanding the various types of surrogacy arrangements and which option might be right for your family-building journey.',
    image: '/blog/surrogacy-types.jpg',
    category: 'Surrogacy Information',
    date: 'November 15, 2025',
    author: 'Dr. Embryon Team',
    readTime: '8 min read',
    content: {
      introduction: 'Surrogacy has become an increasingly popular option for individuals and couples who dream of having children but face challenges in conceiving or carrying a pregnancy. Understanding the different types of surrogacy is crucial in making an informed decision about your path to parenthood.',
      sections: [
        {
          heading: 'Gestational Surrogacy',
          content: 'Gestational surrogacy is the most common type of surrogacy arrangement today. In this process, the surrogate has no genetic connection to the baby. An embryo created through IVF using the intended parents\' egg and sperm (or donors) is transferred to the surrogate\'s uterus. This method provides clear legal and emotional boundaries while allowing intended parents to have a genetic connection to their child.'
        },
        {
          heading: 'Traditional Surrogacy',
          content: 'Traditional surrogacy involves the surrogate\'s own egg being fertilized, typically through artificial insemination. This means the surrogate has a genetic connection to the baby. While this was more common in the past, gestational surrogacy has largely replaced it due to legal and emotional complexities.'
        },
        {
          heading: 'The Embryon Family Approach',
          content: 'At The Embryon Family Fertility Center, we specialize in gestational surrogacy with comprehensive screening and support. Our surrogates undergo thorough medical and psychological evaluation, and we maintain a database of qualified candidates ready to help you on your journey. With over 30 years of experience, we ensure ethical practices and legal compliance throughout the process.'
        }
      ],
      conclusion: 'Choosing the right type of surrogacy depends on your individual circumstances, preferences, and legal considerations. Our experienced team at Embryon Family is here to guide you through every step, ensuring you make the best decision for your family-building journey.'
    }
  },
  {
    id: 'surrogacy-ukraine-2025',
    title: 'Why Surrogacy in Ukraine Remains the Top Choice for in 2025',
    excerpt: 'Discover why Ukraine continues to be a premier destination for surrogacy services with legal framework, medical excellence, and affordable options.',
    image: '../../assets/Images/iStockImages/b1.jpg',
    category: 'Free Subscription',
    date: 'November 10, 2025',
    author: 'Embryon Legal Team',
    readTime: '10 min read',
    content: {
      introduction: 'Ukraine has established itself as one of the world\'s leading destinations for surrogacy, offering a unique combination of legal support, medical expertise, and cost-effectiveness that continues to attract intended parents from around the globe.',
      sections: [
        {
          heading: 'Legal Framework and Protection',
          content: 'Ukraine has clear and well-established surrogacy legislation that protects the rights of intended parents. The legal framework ensures that intended parents are recognized as the legal parents from the moment of birth, with the surrogate having no parental rights. This provides security and peace of mind throughout the journey.'
        },
        {
          heading: 'Medical Excellence',
          content: 'Ukrainian fertility clinics, particularly The Embryon Family Fertility Center, boast world-class medical facilities and experienced specialists. With over 28,000 successful births facilitated, our clinic demonstrates the high standards of care and expertise available in Ukraine.'
        },
        {
          heading: 'Cost-Effectiveness',
          content: 'Compared to surrogacy in the United States or Western Europe, Ukraine offers significantly more affordable options without compromising on quality of care. This makes surrogacy accessible to more families who dream of having children.'
        },
        {
          heading: 'Comprehensive Support',
          content: 'At Embryon Family, we provide 24/7 support with dedicated fertility coaches who guide you through every stage. Our American-managed approach ensures transparency and personalized care that international clients appreciate.'
        }
      ],
      conclusion: 'Ukraine remains a top choice for surrogacy in 2025 due to its combination of supportive legal environment, medical excellence, and accessibility. The Embryon Family Fertility Center continues to lead the way with our "Everything Matters" philosophy and commitment to making your parenthood dreams a reality.'
    }
  },
  // {
  //   id: 'surrogacy-process-timeline',
  //   title: 'How Long Does the Surrogacy Process Take?',
  //   excerpt: 'A comprehensive timeline guide to help you understand each stage of the surrogacy journey from initial consultation to bringing your baby home.',
  //   image: '../../assets/Images/iStockImages/b1.jpg',
  //   category: 'Free Subscription',
  //   date: 'November 5, 2025',
  //   author: 'Embryon Coordination Team',
  //   readTime: '7 min read',
  //   content: {
  //     introduction: 'One of the most common questions intended parents ask is: "How long will the surrogacy process take?" While every journey is unique, understanding the typical timeline can help you plan and prepare for this life-changing experience.',
  //     sections: [
  //       {
  //         heading: 'Initial Consultation and Matching (1-2 months)',
  //         content: 'The journey begins with your initial consultation where we understand your needs and preferences. At Embryon Family, matching with a surrogate is remarkably efficient - every single client chooses to work with the first surrogate they connect with. This phase includes reviewing surrogate profiles and meeting your potential match.'
  //       },
  //       {
  //         heading: 'Medical Screening and Legal Contracts (1-2 months)',
  //         content: 'Once matched, comprehensive medical screening is conducted for all parties. Legal contracts are prepared to protect everyone involved. This phase ensures medical readiness and legal clarity before proceeding.'
  //       },
  //       {
  //         heading: 'Egg Retrieval and IVF (1 month)',
  //         content: 'Once your match is confirmed, egg retrieval can happen within 30 days! This includes ovarian stimulation for the egg donor (if using donor eggs), egg collection, fertilization, and embryo development. Our advanced IVF techniques maximize success rates.'
  //       },
  //       {
  //         heading: 'Embryo Transfer and Pregnancy (9-10 months)',
  //         content: 'After successful embryo transfer, the surrogate carries the pregnancy for approximately 9 months. Regular monitoring and medical care ensure the health of both surrogate and baby throughout this period.'
  //       },
  //       {
  //         heading: 'Birth and Post-Birth Procedures (1 month)',
  //         content: 'The final stage includes the birth, legal documentation, and preparation for taking your baby home. Our team supports you through every detail of this exciting milestone.'
  //       }
  //     ],
  //     conclusion: 'In total, the surrogacy process typically takes 12-18 months from start to finish. At The Embryon Family, our streamlined processes and experienced team work to make your journey as efficient and smooth as possible while maintaining the highest standards of care.'
  //   }
  // },
  {
  id: 'surrogacy-process-timeline',
  title: 'How Long Does the Surrogacy Process Take?',
  excerpt:
    'A comprehensive timeline guide to help you understand each stage of the surrogacy journey from initial consultation to bringing your baby home.',
  image: '../../assets/Images/iStockImages/b1.jpg',

  // ⭐ Add this line
  banner: '/assets/Images/iStockImages/iStock-1256257042.jpg',

  category: 'Free Subscription',
  date: 'November 5, 2025',
  author: 'Embryon Coordination Team',
  readTime: '7 min read',
  content: {
    introduction:
      'One of the most common questions intended parents ask is: "How long will the surrogacy process take?" While every journey is unique, understanding the typical timeline can help you plan and prepare for this life-changing experience.',
    sections: [
      {
        heading: 'Initial Consultation and Matching (1-2 months)',
        content:
          'The journey begins with your initial consultation where we understand your needs and preferences. At Embryon Family, matching with a surrogate is remarkably efficient - every single client chooses to work with the first surrogate they connect with. This phase includes reviewing surrogate profiles and meeting your potential match.',
      },
      {
        heading: 'Medical Screening and Legal Contracts (1-2 months)',
        content:
          'Once matched, comprehensive medical screening is conducted for all parties. Legal contracts are prepared to protect everyone involved. This phase ensures medical readiness and legal clarity before proceeding.',
      },
      {
        heading: 'Egg Retrieval and IVF (1 month)',
        content:
          'Once your match is confirmed, egg retrieval can happen within 30 days! This includes ovarian stimulation for the egg donor (if using donor eggs), egg collection, fertilization, and embryo development. Our advanced IVF techniques maximize success rates.',
      },
      {
        heading: 'Embryo Transfer and Pregnancy (9-10 months)',
        content:
          'After successful embryo transfer, the surrogate carries the pregnancy for approximately 9 months. Regular monitoring and medical care ensure the health of both surrogate and baby throughout this period.',
      },
      {
        heading: 'Birth and Post-Birth Procedures (1 month)',
        content:
          'The final stage includes the birth, legal documentation, and preparation for taking your baby home. Our team supports you through every detail of this exciting milestone.',
      },
    ],
    conclusion:
      'In total, the surrogacy process typically takes 12-18 months from start to finish. At The Embryon Family, our streamlined processes and experienced team work to make your journey as efficient and smooth as possible while maintaining the highest standards of care.',
  },
},
  {
    id: 'sperm-egg-implant-timeline',
    title: 'How long does it take for sperm to reach the egg and implant?',
    excerpt: 'Understanding the biological timeline from fertilization to implantation in both natural conception and IVF procedures.',
    image: '/blog/fertilization.jpg',
    category: 'Free Subscription',
    date: 'October 28, 2025',
    author: 'Dr. Embryon Scientific Team',
    readTime: '6 min read',
    content: {
      introduction: 'Understanding the intricate timing of fertilization and implantation is fascinating for anyone going through fertility treatment. This knowledge helps set realistic expectations and understand the critical early stages of pregnancy development.',
      sections: [
        {
          heading: 'Natural Conception Timeline',
          content: 'In natural conception, sperm can survive in the female reproductive tract for up to 5 days, though most remain viable for 2-3 days. Once released, the egg must be fertilized within 12-24 hours. The actual meeting of sperm and egg typically occurs in the fallopian tube within 30 minutes to 24 hours after intercourse.'
        },
        {
          heading: 'The Journey to Implantation',
          content: 'After fertilization, the newly formed embryo (zygote) begins dividing as it travels down the fallopian tube toward the uterus. This journey takes approximately 5-6 days. Implantation - when the embryo attaches to the uterine wall - typically occurs 6-10 days after fertilization, with day 8-9 being most common.'
        },
        {
          heading: 'IVF and Embryo Transfer',
          content: 'In IVF procedures like those performed at Embryon Family, we carefully control this process. Fertilization occurs in our laboratory, and we monitor embryo development closely. We typically transfer embryos at either day 3 (cleavage stage) or day 5 (blastocyst stage). Our eSET (Elective Single Embryo Transfer) approach maximizes success while reducing multiple pregnancy risks.'
        },
        {
          heading: 'Post-Transfer Implantation',
          content: 'After embryo transfer, implantation usually occurs within 1-5 days. A day 5 blastocyst transfer may implant within 1-3 days, while a day 3 transfer takes slightly longer. This is why pregnancy tests are typically performed 9-14 days after transfer.'
        }
      ],
      conclusion: 'Whether through natural conception or IVF, the journey from sperm meeting egg to successful implantation is a remarkable process that takes approximately 6-10 days. At Embryon Family, our advanced IVF protocols and careful embryo selection optimize this crucial process for the best possible outcomes.'
    }
  },
  {
    id: 'low-progesterone-pregnancy',
    title: 'Low Progesterone in Pregnancy: Causes, Symptoms & Treatment',
    excerpt: 'Essential information about progesterone\'s role in pregnancy and how low levels are identified and treated to support healthy pregnancy.',
    image: '/blog/progesterone.jpg',
    category: 'Free Subscription',
    date: 'October 20, 2025',
    author: 'Dr. Embryon Medical Team',
    readTime: '9 min read',
    content: {
      introduction: 'Progesterone plays a crucial role in maintaining a healthy pregnancy. Understanding low progesterone - its causes, symptoms, and treatments - is essential for anyone on their fertility journey, especially those undergoing IVF or using a surrogate.',
      sections: [
        {
          heading: 'The Role of Progesterone',
          content: 'Progesterone is often called the "pregnancy hormone" because it prepares the uterine lining for embryo implantation and helps maintain pregnancy. It prevents uterine contractions that could reject the embryo and supports the development of blood vessels in the uterine wall that nourish the growing fetus.'
        },
        {
          heading: 'Causes of Low Progesterone',
          content: 'Low progesterone can result from various factors including luteal phase defect, thyroid problems, high stress levels, inadequate ovarian function, or complications from IVF cycles. In surrogacy arrangements, progesterone supplementation is routinely provided to ensure optimal uterine conditions.'
        },
        {
          heading: 'Symptoms to Watch For',
          content: 'Symptoms of low progesterone may include spotting or bleeding, abdominal pain, frequent low blood sugar, irregular menstrual cycles, or previous miscarriages. However, many women with low progesterone experience no symptoms, which is why monitoring is important during fertility treatment.'
        },
        {
          heading: 'Treatment and Support',
          content: 'At Embryon Family, we carefully monitor progesterone levels throughout the IVF and surrogacy process. Treatment typically involves progesterone supplementation through injections, vaginal suppositories, or oral medications. We ensure our surrogates receive appropriate progesterone support to optimize conditions for pregnancy success.'
        }
      ],
      conclusion: 'Low progesterone is a manageable condition when properly identified and treated. With our comprehensive monitoring and support at Embryon Family Fertility Center, we ensure optimal hormonal conditions for successful pregnancy, whether you\'re carrying yourself or working with a surrogate.'
    }
  },
  {
    id: 'period-lasting-long',
    title: 'Why Is My Period Lasting So Long? 7 Causes You Need to Know',
    excerpt: 'Understanding prolonged menstrual bleeding, when to be concerned, and how it relates to your fertility health.',
    image: '/blog/menstrual-health.jpg',
    category: 'Free Subscription',
    date: 'October 12, 2025',
    author: 'Dr. Embryon Gynecology Team',
    readTime: '8 min read',
    content: {
      introduction: 'A normal menstrual period typically lasts 3-7 days. If you\'re experiencing bleeding that extends beyond this timeframe, it\'s natural to be concerned. Understanding the potential causes can help you determine when to seek medical advice and how it might affect your fertility.',
      sections: [
        {
          heading: '1. Hormonal Imbalances',
          content: 'Fluctuations in estrogen and progesterone can lead to prolonged bleeding. This is particularly common during perimenopause, after starting or stopping birth control, or due to conditions like PCOS (Polycystic Ovary Syndrome). Hormonal imbalances are also a common cause of fertility challenges.'
        },
        {
          heading: '2. Uterine Fibroids or Polyps',
          content: 'These benign growths in the uterus can cause heavier, longer periods. While usually not dangerous, they can affect fertility and may need treatment if you\'re planning to conceive. At Embryon Family, we screen for these conditions during fertility evaluations.'
        },
        {
          heading: '3. Endometriosis',
          content: 'This condition, where uterine lining tissue grows outside the uterus, can cause prolonged and painful periods. Endometriosis is a leading cause of infertility, but many women with this condition successfully conceive with fertility treatment or surrogacy options.'
        },
        {
          heading: '4. Blood Clotting Disorders',
          content: 'Conditions like von Willebrand disease can affect blood clotting and lead to prolonged menstrual bleeding. These conditions are important to diagnose before pregnancy planning.'
        },
        {
          heading: '5. Medications',
          content: 'Certain medications, including blood thinners, anti-inflammatory drugs, and some hormonal medications, can affect menstrual bleeding patterns.'
        },
        {
          heading: '6. Thyroid Disorders',
          content: 'Both hypothyroidism and hyperthyroidism can affect menstrual cycles, causing prolonged or irregular bleeding. Thyroid function is crucial for fertility and is routinely tested during fertility evaluations.'
        },
        {
          heading: '7. Stress and Lifestyle Factors',
          content: 'Extreme stress, rapid weight changes, excessive exercise, or significant lifestyle changes can affect your menstrual cycle and cause prolonged bleeding.'
        }
      ],
      conclusion: 'While occasional irregularities are normal, consistently prolonged periods warrant medical evaluation, especially if you\'re planning to conceive. At The Embryon Family Fertility Center, our comprehensive evaluations include assessing menstrual health to identify and address any issues that might affect your fertility journey.'
    }
  },
  
];