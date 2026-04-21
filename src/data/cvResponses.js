export const responses = {
  greeting: {
    keywords: ["hello", "hi", "hey", "bonjour", "salut"],
    answer: `Hi! I'm Téo's AI assistant, trained on his CV and experience. 
You can ask me about his projects, skills, experience at BPCE, or his research at EPITA's lab. 
What would you like to know?`
  },

  projects: {
    keywords: ["project", "built", "made", "created", "work", "42sh", "shell", "java", "microservice"],
    answer: `Téo has worked on 3 notable projects:

**42sh** (C, Jan–Feb 2024) — A POSIX-compliant Unix shell built from scratch with a full Lexer, Parser, and AST pipeline in a team of 4. This covered process management, pipes, and redirections.

**Java Microservice Architecture** (Java, March 2024) — A scalable REST API using Quarkus and Hibernate, designed following Clean Architecture principles for domain isolation.

**RedTeamLLM** (Python, Sept 2025–Present) — An autonomous pentesting agent at EPITA's research lab. Python microservices for Planning, Memory, LLM, and an Orchestrator, with deterministic backtracking and MCP integration.`
  },

  experience: {
    keywords: ["experience", "job", "work", "bpce", "bank", "apprenticeship", "company"],
    answer: `Téo is currently a **Software Engineer Apprentice at Groupe BPCE** (Innovation Department, Sept 2024–Aug 2026).

Key work: Designed and deployed NLP & GenAI solutions for the French banking sector — RAG architectures with LangChain and Hugging Face, full-stack React/FastAPI apps, and CI/CD pipelines with Jenkins and Kubernetes.

Stack: Python, FastAPI, LangChain, Hugging Face, Faiss, React, MongoDB, Docker, K8s.`
  },

  research: {
    keywords: ["research", "lab", "lre", "epita", "pentesting", "redteam", "security", "agent", "agentic"],
    answer: `Téo is a **Student Researcher at LRE** (EPITA's Research Laboratory) since Sept 2025.

He contributes to **RedTeamLLM** — an autonomous agent for automated pentesting. His focus is on the planning engine and a dynamic plan corrector with deterministic backtracking. He's also exploring MCP integration for cybersecurity tooling.`
  },

  skills: {
    keywords: ["skill", "know", "stack", "language", "technology", "tech", "tools", "use"],
    answer: `Téo's technical stack covers:

**Languages:** Python, Java, C/C++/C#, TypeScript  
**AI/ML:** LangChain, Hugging Face, Faiss (VectorDB), RAG architectures, LLMs  
**Web:** React, FastAPI, SQL, MongoDB  
**DevOps:** Docker, Kubernetes, GCP, Jenkins, OpenShift, SonarQube, Git  

His sweet spot is the intersection of **GenAI** and **production-grade software engineering**.`
  },

  education: {
    keywords: ["education", "school", "study", "degree", "epita", "erasmus", "mcast", "istanbul", "malta"],
    answer: `Téo is pursuing a **Master of Science in Computer Engineering at EPITA** (Paris, 2021–2026).

He also attended an **International AI Summer School at MCAST** (Malta, June–July 2025) covering ML (TensorFlow), NLP (PyTorch), and Data Engineering.

And completed an **Erasmus+ Exchange Semester at Bahçeşehir University** (Istanbul, Feb–June 2023).`
  },

  availability: {
    keywords: ["available", "hire", "hiring", "start", "when", "open", "contact"],
    answer: `Téo is **available starting September 2026**. 

You can reach him at teohalle14@gmail.com or connect on LinkedIn (teo-halle). He's based in Paris, France and open to opportunities in AI, GenAI, and Software Engineering.`
  },

  fallback: {
    answer: `I'm not sure I have the right context for that. Try asking me about Téo's **projects**, **experience**, **skills**, **education**, or **availability**. I'm trained on his CV and can answer most questions about his background!`
  }
};

// Matching logic (implement in ChatInterface.jsx)
export function getResponse(userMessage) {
  const msg = userMessage.toLowerCase();
  for (const [, entry] of Object.entries(responses)) {
    if (entry.keywords && entry.keywords.some(kw => msg.includes(kw))) {
      return entry.answer;
    }
  }
  return responses.fallback.answer;
}