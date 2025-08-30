export interface LanguageState {
  menu: {
    home: string;
    courses: string;
    blog: string;
    resources: string;
    contact: string;
  };
  pricing: {
    title: string;
    description: string;
    period: string;
    popularTag: string;
    specialOffer: {
      title: string;
      description: string;
    };
    plans: {
      basic: {
        name: string;
        features: string[];
      };
      intensive: {
        name: string;
        features: string[];
      };
      premium: {
        name: string;
        features: string[];
      };
    };
    ctaChooseButton: string;
    ctaStartButton: string;
  };
  testimonials: {
    title: string;
    description: string;
    items: Array<{
      name: string;
      country: string;
      text: string;
      level: string;
    }>;
  };
  home: {
    title: string;
    intro: string;
    cta: {
      info: string;
      courses: string;
    };
    offer: {
      title: string;
      items: string[];
    };
    specialization: {
      title: string;
      items: string[];
    };
    whyUs: {
      title: string;
      items: string[];
    };
    cta_section: {
      title: string;
      description: string;
      trial: string;
      plans: string;
    };
  };
  contact: {
    title: string;
    description: string;
    form: {
      fullName: string;
      email: string;
      phone: string;
      level: string;
      interests: string;
      submit: string;
    };
    wechat: {
      title: string;
      description: string;
    };
  };
  tools: {
    title: string;
    description: string;
    openTool: string;
  };
}
