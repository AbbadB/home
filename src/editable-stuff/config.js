// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Bruno",
  middleName: "",
  lastName: "Abbad",
  message: " Data Engineering | Big Data | Cloud ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/abbadb",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/abbad-bruno/",
    },
    {
      image: "fa-medium",
      url: "https://medium.com/@abbad"
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/brunoabbad.png"),
  imageSize: 375,
  message:
    "I am a Bachelor of Information Systems and a Data Engineer passionate about creating data-driven solutions that help companies make better and more informed decisions. Currently, I work at Capgemini, a global leader in consulting, digital transformation, technology, and engineering services. I have excellent programming skills in Python and SQL, especially in the Big Data environment, and I am capable of working both in teams and independently to complete projects. Additionally, I hold European citizenship, which allows me to work throughout the European Union.",
  resume: "https://drive.google.com/file/d/1rAKmoVf9KJpk6-E_cmlU59cE0ilCzuxx/view",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "abbadb", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/brunoabbad.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/brunoabbad.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Hadoop", value: 85 },
    { name: "Spark", value: 65 },
    { name: "Azure", value: 90 },
    { name: "Databricks", value: 65 },
    { name: "Airflow", value: 55 },
    { name: "Data Warehousing", value: 80 },
  ],
  softSkills: [
    { name: "Communication Skills", value: 80 },
    { name: "Problem-solving", value: 90 },
    { name: "Collaboration", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Analytical Thinking", value: 75 },
    { name: "Continuous Learning", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "bwolffabbad@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Data Engineer',// Here Add Company Name
      companylogo: require('../assets/img/Capgemini-Logo.png'),
      date: 'September 2022 – Present',
      link: 'https://www.capgemini.com/',
    },
    {
      role: 'Junior Data Engineer',
      companylogo: require('../assets/img/digifarmz_yellow.png'),
      date: 'May 2021 – September 2022',
      link: 'https://www.digifarmz.com/',
    },
    {
      role: 'Data Analyst',
      companylogo: require('../assets/img/logo-dufrio.png'),
      date: 'November 2020 – April 2021',
      link: 'https://www.dufrio.com.br/',
    },
  ]
}

const certifications = {
  show: true,
  heading: "Certifications",
  data: [
    {
      role: 'Academy Accreditation - Databricks Lakehouse Fundamentals',// Here Add Company Name
      companylogo: require('../assets/img/lakehouse-fundamentals.png'),
      //date: 'February 2022 – February 2023',
      link: 'https://credentials.databricks.com/93211e43-8c2b-4453-a9fc-fcd0723bed42',
    },
    {
      role: 'Apache Airflow Fundamentals',// Here Add Company Name
      companylogo: require('../assets/img/airflow.png'),
      //date: 'February 2022 – February 2023',
      link: 'https://www.credly.com/badges/ca8e8353-ab86-473f-9255-105895185ff0/public_url',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, certifications };
