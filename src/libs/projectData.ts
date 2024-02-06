export interface ProjectData {
  image: string;
  projectName: string;
  projectLink: string;
  projectDescription: string;
  projectTech: string[];
  projectExternalLinks: {
    github: string;
    externalLink: string;
  };
}

const otherProjectsData: ProjectData[] = [
  {
    image: "/img/dpmptsp.jpg",
    projectName: "Website DPMPTSP",
    projectLink: "https://dpmptsp.pratama.tech",
    projectDescription:
      "This is the information system website of a regional agency in my area called dpmptsp.",
    projectTech: ["Laravel", "Bootstrap CSS", "MySQL", "Javascript"],
    projectExternalLinks: {
      github: "",
      externalLink: "https://dpmptsp.pratama.tech",
    },
  },
  {
    image: "/img/temp.jpg",
    projectName: "Templatenesia",
    projectLink: "https://templatenesia.com",
    projectDescription:
      "This is Website Templates, Plugins, and Graphics Digital Marketplace Best place to buy and sell digital products. created with Laravel and already uses the Ipaymu payment gateway which can make it easier for users to make transactions.",
    projectTech: [
      "Laravel",
      "Payment Gateaway",
      "Livewire",
      "Tailwind",
      "MySQL",
    ],
    projectExternalLinks: {
      github: "",
      externalLink: "https://templatenesia.com",
    },
  },
  {
    image: "/img/book.png",
    projectName: "Book Ecommerce",
    projectLink: "",
    projectDescription:
      "This is an e-book e-commerce website that provides various kinds of ebooks. This website was created with NextJS technology and also uses a payment gateway, namely MidTrans.",
    projectTech: ["Next", "Tailwind", "MySQL", "Payment Gateway", "Javascript"],
    projectExternalLinks: {
      github: "",
      externalLink: "",
    },
  },
  {
    image: "/img/find.jpg",
    projectName: "Search Github Person",
    projectLink: "https://find-person.vercel.app",
    projectDescription:
      "This is a small project that aims to consume api from github and on this website users can search for github users and can see their details. This website was created with Next.js and public GitHub API.",
    projectTech: ["Next", "Tailwind", "API"],
    projectExternalLinks: {
      github: "",
      externalLink: "https://find-person.vercel.app",
    },
  },
  {
    image: "/img/mamaD.png",
    projectName: "Mama D Cookies",
    projectLink: "",
    projectDescription:
      "This is a small project that I made about an ecommerce cake made with Vue JS technology and the backend uses Laravel Api.",
    projectTech: [
      "Vue",
      "Laravel",
      "API",
      "MySQL",
      "Bootstrap",
      "Payment Gateway",
    ],
    projectExternalLinks: {
      github: "",
      externalLink: "",
    },
  },
  {
    image: "/img/inv.png",
    projectName: "Inventory App",
    projectLink: "",
    projectDescription:
      "Inventory application application from the final project of SMK made with PHP natively",
    projectTech: ["PHP", "CSS", "MySQL", "Javascript"],
    projectExternalLinks: {
      github: "",
      externalLink: "",
    },
  },
  {
    image: "/img/kejari.jpg",
    projectName: "Kejari Purwakarta",
    projectLink: "https://kejari-purwakarta.kejaksaan.go.id/",
    projectDescription:
      "Purwakarta State Prosecutor's Office government service project created using Laravel and Api for Android mobile",
    projectTech: ["Laravel", "API", "MySQL", "Javascript"],
    projectExternalLinks: {
      github: "",
      externalLink: "https://kejari-purwakarta.kejaksaan.go.id/",
    },
  },
  {
    image: "/img/kesbangpol.jpg",
    projectName: "Kesbangpol Purwakarta",
    projectLink: "https://kesbangpol.purwakartakab.go.id/",
    projectDescription:
      "The kesbangpol website is a service website for foreigners, research students, and political parties",
    projectTech: ["Laravel", "MySQL", "Javascript"],
    projectExternalLinks: {
      github: "",
      externalLink: "https://kesbangpol.purwakartakab.go.id/",
    },
  },
  {
    image: "/img/mars.jpg",
    projectName: "Marspedia",
    projectLink: "https://marspedia.id/",
    projectDescription:
      "Marspedia is a website for top up games or online payment services for various online applications",
    projectTech: [
      "Laravel",
      "AlpineJs",
      "Payment Gateway",
      "Tailwind",
      "MySQL",
      "API",
    ],
    projectExternalLinks: {
      github: "",
      externalLink: "https://marspedia.id/",
    },
  },
  {
    image: "/img/news.png",
    projectName: "Tenews",
    projectLink: "",
    projectDescription:
      "tenews is a website that I created when I was an intern at a company, this application is a news portal application that has admin features and various features like news portals in general",
    projectTech: ["CodeIgniter", "MySQL", "Javascript"],
    projectExternalLinks: {
      github: "",
      externalLink: "",
    },
  },
  {
    image: "/img/spp.png",
    projectName: "SPP App",
    projectLink: "",
    projectDescription:
      "spp app is a website application that provides school fee payment services which I created when I was still in high school and it was a test project before I was declared graduated",
    projectTech: ["Laravel", "MySQL", "Javascript"],
    projectExternalLinks: {
      github: "",
      externalLink: "",
    },
  },
  {
    image: "/img/disdik.jpg",
    projectName: "Disdik Purwakarta",
    projectLink: "https://disdik.pratama.tech/",
    projectDescription:
      "Disdik is the Purwakarta education department. This website is a company profile and there is a complaint service and so on",
    projectTech: ["Laravel", "MySQL", "Javascript"],
    projectExternalLinks: {
      github: "",
      externalLink: "https://disdik.pratama.tech/",
    },
  },
  {
    image: "/img/dinkes.jpg",
    projectName: "Dinkes Purwakarta",
    projectLink: "https://dinkes.purwakarta.go.id/",
    projectDescription:
      "Dinkes is the Purwakarta education office whose website contains various information regarding the Purwakarta health center",
    projectTech: ["Laravel", "MySQL", "RestAPI", "Javascript"],
    projectExternalLinks: {
      github: "",
      externalLink: "https://dinkes.purwakarta.go.id/",
    },
  },
  {
    image: "/img/dprd.jpg",
    projectName: "JDIH DPRD Purwakarta",
    projectLink: "https://dprd.pratama.tech/",
    projectDescription:
      "DPRD is a regional people's representative council service whose website has various kinds of legal documents and I also made an api for the mobile",
    projectTech: ["Laravel", "MySQL", "RestAPI", "Javascript"],
    projectExternalLinks: {
      github: "",
      externalLink: "https://dprd.pratama.tech",
    },
  },
  {
    image: "/img/e-learn.png",
    projectName: "E-Learning",
    projectLink: "",
    projectDescription:
      "e-learn is an online learning website that can be managed by the admin starting from learning videos, questions, materials, classes, etc",
    projectTech: ["Laravel", "MySQL", "Javascript"],
    projectExternalLinks: {
      github: "",
      externalLink: "",
    },
  },
  {
    image: "/img/android-kejari.png",
    projectName: "Android Kejari Purwakarta",
    projectLink:
      "https://play.google.com/store/apps/details?id=id.co.pratamatechsolution.kejari&hl=id&gl=US",
    projectDescription:
      "Kejari Android is the mobile version of the Purwakarta State Prosecutor's Office website which contains a lot of information and services",
    projectTech: ["Flutter", "Dart", "RestAPI"],
    projectExternalLinks: {
      github: "",
      externalLink:
        "https://play.google.com/store/apps/details?id=id.co.pratamatechsolution.kejari&hl=id&gl=US",
    },
  },
  {
    image: "/img/sinakes.jpg",
    projectName: "Sinakes Komit",
    projectLink: "https://sinakeskomit.dinkes.purwakartakab.go.id",
    projectDescription:
      "Sinakes Komit is an automatic information system for the appointment or promotion of health workers",
    projectTech: ["Laravel", "MySQL", "Javascript"],
    projectExternalLinks: {
      github: "",
      externalLink: "https://sinakeskomit.dinkes.purwakartakab.go.id",
    },
  },
];

export default otherProjectsData;
