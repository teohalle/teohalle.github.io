import Fuse from 'fuse.js';

// 1. Restructure the data into an array of documents for Fuse.js to index
const knowledgeBase = [
  {
    category: "greeting",
    keywords: ["hello", "hi", "hey", "bonjour", "salut", "who are you", "what can you do"],
    answer: `Hi! I'm Téo's AI assistant, trained on his CV and experience. \nYou can ask me about his projects, skills, experience at BPCE, or his research at EPITA's lab. \nWhat would you like to know?`
  },
  {
    category: "projects",
    keywords: ["project", "built", "made", "created", "work", "42sh", "shell", "java", "microservice", "portfolio", "github"],
    answer: `Téo has worked on 3 notable projects:\n\n**42sh** (C, Jan–Feb 2024) — A POSIX-compliant Unix shell built from scratch with a full Lexer, Parser, and AST pipeline in a team of 4.\n\n**Java Microservice Architecture** (Java, March 2024) — A scalable REST API using Quarkus and Hibernate, designed following Clean Architecture principles.\n\n**RedTeamLLM** (Python, Sept 2025–Present) — An autonomous pentesting agent at EPITA's research lab. Python microservices with deterministic backtracking and MCP integration.`
  },
  {
    category: "experience",
    keywords: ["experience", "job", "work", "bpce", "bank", "apprenticeship", "company", "internship", "professional"],
    answer: `Téo is currently a **Software Engineer Apprentice at Groupe BPCE** (Innovation Department, Sept 2024–Aug 2026).\n\nKey work: Designed and deployed NLP & GenAI solutions for the French banking sector — RAG architectures with LangChain and Hugging Face, full-stack React/FastAPI apps, and CI/CD pipelines with Jenkins and Kubernetes.\n\nStack: Python, FastAPI, LangChain, Hugging Face, Faiss, React, MongoDB, Docker, K8s.`
  },
  {
    category: "research",
    keywords: ["research", "lab", "lre", "epita", "pentesting", "redteam", "security", "agent", "agentic", "offensive"],
    answer: `Téo is a **Student Researcher at LRE** (EPITA's Research Laboratory) since Sept 2025.\n\nHe contributes to **RedTeamLLM** — an autonomous agent for automated pentesting. His focus is on the planning engine and a dynamic plan corrector with deterministic backtracking. He's also exploring MCP integration for cybersecurity tooling.`
  },
  {
    category: "skills",
    keywords: ["skill", "know", "stack", "language", "technology", "tech", "tools", "use", "framework", "database", "devops"],
    answer: `Téo's technical stack covers:\n\n**Languages:** Python, Java, C/C++/C#, TypeScript\n**AI/ML:** LangChain, Hugging Face, Faiss (VectorDB), RAG architectures, LLMs\n**Web:** React, FastAPI, SQL, MongoDB\n**DevOps:** Docker, Kubernetes, GCP, Jenkins, OpenShift, SonarQube, Git\n\nHis sweet spot is the intersection of **GenAI** and **production-grade software engineering**.`
  },
  {
    category: "education",
    keywords: ["education", "school", "study", "degree", "epita", "erasmus", "mcast", "istanbul", "malta", "university", "master"],
    answer: `Téo is pursuing a **Master of Science in Computer Engineering at EPITA** (Paris, 2021–2026).\n\nHe also attended an **International AI Summer School at MCAST** (Malta, June–July 2025) covering ML (TensorFlow), NLP (PyTorch), and Data Engineering.\n\nAnd completed an **Erasmus+ Exchange Semester at Bahçeşehir University** (Istanbul, Feb–June 2023).`
  },
  {
    category: "availability",
    keywords: ["available", "hire", "hiring", "start", "when", "open", "contact", "email", "reach", "freelance"],
    answer: `Téo is **available starting September 2026**.\n\nYou can reach him at teohalle14@gmail.com or connect on LinkedIn (teo-halle). He's based in Paris, France and open to opportunities in AI, GenAI, and Software Engineering.`
  }
];

// 2. Configure the Fuse.js search engine
const fuseOptions = {
  isCaseSensitive: false,
  includeScore: true,
  // The threshold determines how "fuzzy" the search is.
  // 0.0 requires a perfect match. 1.0 matches anything. 
  // 0.4 is the sweet spot for handling typos while staying accurate.
  threshold: 0.4, 
  keys: [
    { name: 'keywords', weight: 1 } // Search heavily inside the keywords array
  ]
};

const fuse = new Fuse(knowledgeBase, fuseOptions);

const fallbackAnswer = `I'm not sure I have the right context for that. Try asking me about Téo's **projects**, **experience**, **skills**, **education**, or **availability**. I'm trained on his CV and can answer most questions about his background!`;

// 3. The new intelligent matching function (with tokenization)
export function getResponse(userMessage) {
  if (!userMessage.trim()) return fallbackAnswer;

  // Split the user's sentence into individual words (tokens)
  // We also remove punctuation to make the search even cleaner
  const cleanMessage = userMessage.toLowerCase().replace(/[^\w\s]/g, '');
  const words = cleanMessage.split(/\s+/);

  let bestMatch = null;
  let bestScore = 1; // In Fuse.js, 0 is a perfect match and 1 is a total mismatch

  // Run each word through the fuzzy search
  for (const word of words) {
    // Skip tiny words like "a", "is", "of" to speed things up and prevent false positives
    if (word.length < 3) continue;

    const results = fuse.search(word);
    
    if (results.length > 0) {
      const result = results[0];
      
      // Keep track of the absolute best matching word in the sentence
      if (result.score < bestScore) {
        bestScore = result.score;
        bestMatch = result.item.answer;
      }
    }
  }

  // We only return the match if it's a strong fuzzy match (score is lower than our threshold)
  // If the best match score is good, return the answer!
  if (bestMatch && bestScore <= fuseOptions.threshold) {
    return bestMatch;
  }

  // If no word was close enough to any keyword, fallback
  return fallbackAnswer;
}