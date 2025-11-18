// export enum SelectedPage {
//   Home = 'home',
//   Doctors = 'doctors',
//   Services = 'services',
//   Reviews = 'reviews',
// }

// export enum SelectedService {
//   Neurology = 'neurology',
//   Cardiology = 'cardiology',
//   Orthopedics = 'orthopedics',
//   Surgery = 'surgery',
//   Dentistry = 'dentistry',
//   Radiology = 'radiology',
//   Urology = 'urology',
//   Medicine = 'medicine',
//   SeeMore = 'seemore',
// }

export enum SelectedPage {
  Home = 'home',
  About = 'about',
  Services = 'services',
  FAQ = 'faq',
  Contact = 'contact',
    Blog = "blog", 
}

export interface ServiceType {
  icon: string;
  title: string;
  description: string;
}

export interface FAQType {
  question: string;
  answer: string;
}


export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
  readTime: string;

  banner?: string;  // <-- banner belongs at root level

  content: {
    introduction: string;

    sections: {
      heading: string;
      content: string;
    }[];

    conclusion: string;
  };
}