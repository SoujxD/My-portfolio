import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Conversational Q&A Chatbot",
    category: "End-to-End LLM Chatbot with Memory",
    tools: "LangChain · Python · LLM APIs · Prompt Engineering",
  },
  {
    title: "RAG Document Q&A System",
    category: "Retrieval-Augmented Generation Pipeline",
    tools: "LangChain · FAISS / Chroma · Vector Embeddings",
  },
  {
    title: "Store Sales Forecasting",
    category: "Kaggle Competition",
    tools: "Python · ARIMA · SARIMA · Spark · Scikit-learn",
  },
  {
    title: "Diabetes Prediction on GCP",
    category: "AutoML & Custom Model Deployment",
    tools: "XGBoost · BigQuery · Vertex AI · SHAP",
  },
  {
    title: "Healthcare Waiting List Analysis",
    category: "BI Analytics Dashboard",
    tools: "Power BI · SQL · PostgreSQL",
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
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Stack</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
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
