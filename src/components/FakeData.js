const fakeCV = {
  personal: {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    city: "San Francisco",
    state: "CA",
  },
  contact: {
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    website: "https://alexjohnson.dev",
    address: "123 Market Street, San Francisco, CA",
  },
  education: [
    { degree: "B.Sc. in Computer Science", institution: "Stanford University", year: "2020" },
    { degree: "M.Sc. in Software Engineering", institution: "MIT", year: "2022" },
  ],
  skills: [
    { skillName: "JavaScript" },
    { skillName: "React" },
    { skillName: "Node.js" },
    { skillName: "CSS / Tailwind" },
  ],
  experience: [
    { jobTitle: "Frontend Developer", company: "TechCorp", years: "2020 - 2022" },
    { jobTitle: "Full Stack Engineer", company: "InnovateX", years: "2022 - Present" },
  ],
};

export default fakeCV;