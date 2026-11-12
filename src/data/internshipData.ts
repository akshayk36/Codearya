
import { Users, Grid2x2, FileText, Code } from 'lucide-react';

export const internshipAreas = [
  {
    id: 'web-development',
    title: "Web Development",
    description: "Build modern web applications using React, Node.js, and cloud technologies",
    icon: Grid2x2,
    skills: ["React/Next.js", "Node.js/Express", "Database Design", "API Development"],
    duration: "8 weeks - 3 months",
    color: "from-neon-blue to-cyan-400",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    learningPrompt: "Learn HTML, CSS, JavaScript, Git, and modern frameworks like React. Build full-stack applications and deploy real-world projects.",
    tools: ["VS Code", "GitHub", "React", "Node.js", "MongoDB", "AWS"],
    outcomes: ["Full-stack web applications", "RESTful API development", "Database design projects", "Deployment on cloud platforms"]
  },
  {
    id: 'ai-ml-engineering',
    title: "AI/ML Engineering",
    description: "Work on machine learning models, data analysis, and AI-powered applications",
    icon: Users,
    skills: ["Python/TensorFlow", "Data Science", "Machine Learning", "Neural Networks"],
    duration: "4-6 months",
    color: "from-neon-purple to-purple-400",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
    learningPrompt: "Explore Python, NumPy, Pandas, Scikit-learn, TensorFlow, and data modeling. Work on machine learning problems with mentorship.",
    tools: ["Python", "TensorFlow", "Jupyter", "Pandas", "NumPy", "Scikit-learn"],
    outcomes: ["Machine learning models", "Data analysis projects", "AI-powered applications", "Research publications"]
  },
  {
    id: 'ui-ux-design',
    title: "UI/UX Design",
    description: "Create beautiful, user-centered designs and interactive prototypes",
    icon: FileText,
    skills: ["Figma/Adobe XD", "User Research", "Prototyping", "Design Systems"],
    duration: "3-4 months",
    color: "from-neon-pink to-pink-400",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    learningPrompt: "Master user research, wireframing, prototyping with Figma and Adobe XD. Learn responsive design and usability testing.",
    tools: ["Figma", "Adobe XD", "Sketch", "InVision", "Miro", "Principle"],
    outcomes: ["User interface designs", "Interactive prototypes", "Design system creation", "User research reports"]
  },
  {
    id: 'digital-marketing',
    title: "Digital Marketing",
    description: "Drive growth through SEO, content marketing, and performance analytics",
    icon: Code,
    skills: ["SEO/SEM", "Content Strategy", "Analytics", "Social Media"],
    duration: "3-5 months",
    color: "from-orange-400 to-yellow-400",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
    learningPrompt: "Practice SEO, analytics, content strategy, and social media management using real campaigns and tools like Google Analytics, SEMrush, and Canva.",
    tools: ["Google Analytics", "SEMrush", "Canva", "Hootsuite", "Mailchimp", "WordPress"],
    outcomes: ["SEO optimization campaigns", "Content marketing strategies", "Social media campaigns", "Analytics reports"]
  }
];

export const testimonials = [
  {
    quote: "The internship at CodeArya transformed my understanding of web development. The mentorship was exceptional!",
    author: "Alex Johnson",
    position: "Former Web Development Intern",
    avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face",
    company: "Now at Google"
  },
  {
    quote: "Working on real AI projects gave me the confidence to pursue machine learning as my career path.",
    author: "Priya Sharma",
    position: "Former AI/ML Intern",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face",
    company: "Now at Microsoft"
  },
  {
    quote: "The design thinking approach I learned here shaped my entire creative process. Incredible experience!",
    author: "David Chen",
    position: "Former UI/UX Intern",
    avatar: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop&crop=face",
    company: "Now at Apple"
  }
];

export const processSteps = [
  { step: "01", title: "Apply Online", description: "Submit your application with portfolio/resume" },
  { step: "02", title: "Initial Review", description: "We review your application and skills" },
  { step: "03", title: "Technical Interview", description: "Assessment of technical skills and fit" },
  { step: "04", title: "Onboarding", description: "Welcome to the CodeArya team!" }
];
