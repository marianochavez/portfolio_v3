export type DataEN = typeof dataEN;

export const dataEN = {
  sections: [
    {title: "About", to: "about"},
    {title: "Projects", to: "projects"},
    {title: "Contact", to: "contact"},
  ],
  about: {
    firstName: "Mariano",
    lastName: "Chavez",
    img: "https://res.cloudinary.com/chavedo/image/upload/v1660949890/portfolio/profile.webp",
    hobbies: ["Drumming 🥁", "Read 📙", "Exercise 🏋", "Beer 🍺"],
//     bio: `<p>
// I am a fullstack developer with a great passion for programming. I specialize in frontend development, using technologies such as JavaScript, React and Next.js.

// I also have experience in backend development, using Node.js, Django and Ruby on Rails. I like to apply
// <strong>design patterns and engineering principles</strong> to create web applications of quality and efficiency.

// My goal is to keep learning new technologies and exploring different domains of knowledge.
// </p>
// `,
    skills: ["Python", "Django", "JavaScript", "TypeScript", "Node.js", "React", "Next.js"],
  },
  projects: [
    {
      name: "Tesla Shop",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1661522748/portfolio/tesla-shop.webp",
      tools: ["NextJS", "TypeScript", "MongoDB", "ChakraUI", "NextAuth", "Paypal"],
      url: "https://tesla-shop-nextjs.vercel.app/",
      github: "https://github.com/marianochavez/tesla_shop_nextjs",
      description: `Store for clothing sales with user management, orders, purchases and payment. It contains an administrative part for statistics, users and products.`,
    },
    {
      name: "UPS Clone",
      img: "https://res.cloudinary.com/chavedo/image/upload/v1666536699/portfolio/react_native.png",
      tools: ["React Native", "TypeScript", "Stepzen", "Tailwind", "RNElements", "Expo"],
      github: "https://github.com/marianochavez/ups_react_native",
      description: `Application to track packages and search for users.`,
    },
    {
      name: "Amazon Scraper",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1678727891/portfolio/amazon-scraper.png",
      tools: ["NextJS", "TypeScript","BrightData",  "Firebase", "WebHook", "Tailwind"],
      github: "https://github.com/marianochavez/amazon_scraper",
      url: "https://amazon-scraper-frontend.vercel.app/",
      description: "Application to scrape Amazon products, implementing functions in the cloud to perform asynchronous tasks.",
    },
    {
      name: "Jaguarete Kaa",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1661525134/portfolio/jaguarete-kaa.webp",
      tools: ["Django", "SQL", "CrispyForms", "Bootstrap"],
      url: "https://www.youtube.com/watch?v=KVkEf167GME",
      github: "https://github.com/marianochavez/jaguarete_ecommerce_django",
      description: `Ecommerce for the sale of technological products. It has user management, products, categories, account recovery and administrative page.`,
    },
    {
      name: "Ebay Thirdweb",
      img: "https://res.cloudinary.com/chavedo/image/upload/v1668881622/portfolio/ebay-thirdweb.webp",
      tools: ["NextJS", "TypeScript", "Thirdweb", "Tailwind", "Ethers"],
      url: "https://ebay-thirdweb-five.vercel.app/",
      github: "https://github.com/marianochavez/ebay_thirdweb",
      description: `Page for sale of NFTs from my collection with auction included.`,
    },
    {
      name: "Repositorio FRM",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1678729128/portfolio/repository-frm.png",
      tools: ["NextJS", "TypeScript", "ChakraUI", "React-Query", "MongoDB", "NextAuth"],
      url: "https://repository-frm.vercel.app/",
      github: "https://github.com/marianochavez/repository_frm",
      description: "Application for the management of faculty subject repositories. Only students belonging to the faculty will be able to access their repositories.",
    },
    {
      name: "Calendar",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1661524268/portfolio/calendar-app.webp",
      tools: ["React", "Node", "Redux", "PWA", "MongoDB", "Enzyme"],
      url: "https://react-calendar-app-frontend.vercel.app/",
      github: "https://github.com/marianochavez/react_calendarApp_frontend",
      description: `Calendar with different views that allows you to add events by date and time. It uses a backend made in Node.js.`,
    },
    {
      name: "Tateti",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1661525803/portfolio/tateti-app.webp",
      tools: ["React", "Rails", "TypeScript", "PostgreSQL", "NESS.css"],
      url: "https://tateti-react-rails.vercel.app/",
      github: "https://github.com/marianochavez/tateti_frontend_react",
      description: `Tateti game with user registration, 1 vs 1 in real time, uses backend made in Rails.`,
    },
    {
      name: "Map box",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1661526366/portfolio/mapbox-app.webp",
      tools: ["React", "TypeScript", "Mapbox", "Axios"],
      url: "https://mapbox-react-mc.netlify.app/",
      github: "https://github.com/marianochavez/react_mapbox",
      description: `Page to search for addresses and mark your route using mapbox.`,
    },
    {
      name: "Arg News",
      img: "https://res.cloudinary.com/chavedo/image/upload/v1666538359/portfolio/node_news.png",
      tools: ["Node.js", "Express", "Docker", "EJS", "Axios"],
      github: "https://github.com/marianochavez/openjira_nextjs",
      description: `Dockerized page to obtain news, weather, dollar exchange and covid statistics.`,
    },
    {
      name: "Porfolio",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1678729309/portfolio/portfolio.png",
      tools: ["NextJS", "TypeScript", "ChakraUI", "React-Scroll", "Framer-Motion"],
      github: "https://github.com/marianochavez/portfolio_motion_next",
      url: "https://marianochavez.vercel.app/",
      description: "Page for personal projects and contact.",
    },
    {
      name: "+50 Projects",
      img: "https://res.cloudinary.com/chavedo/image/upload/v1666538824/portfolio/github.webp",
      tools: ["GitHub"],
      github: "https://github.com/marianochavez",
      description: `These are just some of my projects, you can see more in my GitHub repository.`,
    },
  ],
};
