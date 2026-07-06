import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Multi-Agent GenAI Business Analytics System",
    category: "Multi-Agent LangGraph App · Oct 2025 – Dec 2025",
    tools: "LangGraph · Next.js · FastAPI · ChromaDB · RAGAS",
    description:
      "One prompt turns a raw dataset into a grounded data answer and a stakeholder deck, backed by a 4-provider LLM fallback chain for zero-downtime demos. Scored 0.86 retrieval precision on a 10-question RAGAS benchmark.",
    github: "https://github.com/SoujxD/Multi-Agent-Project",
    image: "/images/projects/multi-agent-project.png",
  },
  {
    title: "Chat with SQL Database Using LangChain",
    category: "Full-Stack Text-to-SQL App · Aug 2025 – Oct 2025",
    tools: "React & TypeScript · FastAPI · Groq Llama 3.1 · Docker",
    description:
      "Turns plain-English questions into safe SQL via Groq Llama 3.1, deployed as 3 containerized services across SQLite, PostgreSQL, and MySQL. A guardrail blocks 21 dangerous keywords plus injection, enforcing read-only SELECT queries.",
    github: "https://github.com/SoujxD/Chat-with-SQL-database",
    image: "/images/projects/chat-with-sql-database.png",
  },
  {
    title: "RAG-Based Document Q&A System",
    category: "Retrieval-Augmented Generation Pipeline · Nov 2025 – Jan 2026",
    tools: "LangChain · FAISS · Hugging Face Embeddings",
    description:
      "An end-to-end RAG pipeline with history-aware query reformulation, answering domain-specific questions from a large document set while curbing hallucinations by constraining answers to retrieved source text.",
    github: "https://github.com/SoujxD/4-RAG-Document-QnA",
    image: "/images/projects/rag-document-qna.png",
  },
  {
    title: "Conversational Q&A Chatbot with Chat History",
    category: "End-to-End LLM Chatbot with Memory",
    tools: "LangChain · Streamlit · OpenAI · Ollama",
    description:
      "A collection of Q&A chatbot apps wiring different LLM backends, OpenAI and local Ollama models, behind a chat UI with persistent conversation history.",
    github:
      "https://github.com/SoujxD/Conversational-QnA-Chatbot-with-Chat-History",
    image: "/images/projects/conversational-qna-chatbot.png",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="carousel-wrapper">
          <button className="carousel-arrow carousel-arrow-left" onClick={goToPrev} aria-label="Previous project" data-cursor="disable">
            <MdArrowBack />
          </button>
          <button className="carousel-arrow carousel-arrow-right" onClick={goToNext} aria-label="Next project" data-cursor="disable">
            <MdArrowForward />
          </button>
          <div className="carousel-track-container">
            <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number"><h3>0{index + 1}</h3></div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <p className="carousel-description">{project.description}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Stack</span>
                          <p>{project.tools}</p>
                        </div>
                        <a
                          className="carousel-github"
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiGithub /> View on GitHub
                        </a>
                      </div>
                    </div>
                    <a
                      className="carousel-media"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={project.image} alt={`${project.title} repository screenshot`} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button key={index} className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`} onClick={() => goToSlide(index)} aria-label={`Go to project ${index + 1}`} data-cursor="disable" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
