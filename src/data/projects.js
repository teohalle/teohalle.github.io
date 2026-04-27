export const projects = [
  {
    id: "42sh",
    title: "42sh",
    subtitle: "POSIX Shell Implementation",
    lang: "C",
    period: "Jan. – Feb. 2024",
    chunkId: "0x3FA2",
    vectorCount: "1,847",
    embeddingPct: 94,
    description: "Engineered a POSIX-compliant Unix shell from scratch in C, implementing a full Lexer, Parser, and AST pipeline. Handled process management, pipes, redirections, and built-in commands in a team of 4.",
    tags: ["C", "Shell", "POSIX", "Lexer/Parser", "AST", "Systems"],
    github: "https://github.com/teo-halle", 
    status: "INDEXED"
  },
  {
    id: "tiger-compiler",
    title: "Tiger Compiler",
    subtitle: "Front-end Implementation",
    lang: "C++",
    period: "March – April 2024",
    chunkId: "0xC8D5",
    vectorCount: "3,102",
    embeddingPct: 100,
    description: "Implemented a compiler for the Tiger language in C++ in a team of 4. Built the complete front-end pipeline including Lexer, Parser, AST construction, binding, type-checking, and translation to a high-level intermediate representation.",
    tags: ["C++", "Compiler", "Lexer/Parser", "AST", "Type-checking"],
    github: "https://github.com/teo-halle",
    status: "INDEXED"
  },
  {
    id: "java-microservice",
    title: "Java Microservice Architecture",
    subtitle: "Scalable REST API",
    lang: "Java",
    period: "March 2024",
    chunkId: "0x7BC9",
    vectorCount: "2,341",
    embeddingPct: 87,
    description: "Designed a scalable REST API following Clean Architecture standards using Java Quarkus and Hibernate. Focused on separation of concerns, domain isolation, and production-grade API design.",
    tags: ["Java", "Quarkus", "Hibernate", "REST API", "Clean Architecture"],
    github: "https://github.com/teo-halle",
    status: "INDEXED"
  },
  {
    id: "redteamllm",
    title: "RedTeamLLM",
    subtitle: "Autonomous Pentesting Agent",
    lang: "Python",
    period: "Sept. 2025 – Present",
    chunkId: "0xA1F7",
    vectorCount: "4,892",
    embeddingPct: 61,
    description: "Contributing to an autonomous red-teaming agent at EPITA's research lab. Python microservices for Planning, Memory, LLM interaction, and Orchestration. Features deterministic backtracking and MCP integration.",
    tags: ["Python", "LLM", "Agentic AI", "MCP", "Microservices"],
    github: null,
    status: "INDEXING"
  }
];