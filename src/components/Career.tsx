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
                <h4>AI Engineer Intern</h4>
                <h5>Borealis Group Analytics</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Jul 2025 – Dec 2025. Built a LangChain multi-agent Research
              Copilot with MCP orchestration and typed tool schemas, cutting
              tool-routing failures from 22% to 9% across 300 queries. Raised
              RAGAS answer faithfulness from 0.71 to 0.86 and context
              precision from 0.64 to 0.81.
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
              Oct 2024 – May 2025. Built the React frontend and FastAPI
              backend researchers used to explore 50K+ records a month,
              cutting dashboard load time from 2.8s to 1.1s. Fine-tuned
              RoBERTa with PEFT/LoRA, lifting held-out accuracy from 78% to
              86%.
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
              Aug 2023 – Jun 2024. Deployed Dockerized ML services on Azure
              turning AR/VR session data into live signals on sentiment and
              feature adoption. Hardened the codebase with unit tests and
              GitHub Actions CI, lifting onboarding task success from 63% to
              80%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
