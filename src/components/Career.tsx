import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Coursework Evaluator</h4>
                <h5>USC Marshall School of Business</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Jan 2026 – May 2026. Evaluated 140+ analytics projects covering
              hypothesis testing, regression, and visualization; delivered
              structured feedback improving statistical rigor and business
              interpretability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Engineer / Data Science Intern</h4>
                <h5>Borealis Group Analytics</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Jul 2025 – Dec 2025. Built OLS/GLM trade-flow models with 76%
              directional accuracy across 50+ countries; engineered 30+ years of
              macroeconomic data and integrated structured model outputs into
              LLM-driven analytics workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning Research Assistant</h4>
                <h5>USC Information Sciences</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Oct 2024 – Jan 2025. Processed 50K+ tweets/month to build scalable
              NLP datasets; trained transformer models achieving 86% influence
              classification accuracy for U.S. election analysis.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning Engineer</h4>
                <h5>Motleyscape</h5>
              </div>
              <h3>2023–24</h3>
            </div>
            <p>
              Aug 2023 – Jun 2024. Built ML pipelines on AR/VR telemetry data;
              ran A/B experiments improving AR feature adoption by 17% and
              automated feature engineering workflows reducing manual analysis
              by 50%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
