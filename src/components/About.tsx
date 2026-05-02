import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm a Machine Learning and Data Science practitioner pursuing my MS in
          Analytics at USC. I build end-to-end AI systems spanning
          transformer-based NLP, LLM pipelines, and statistical forecasting —
          with work ranging from trade-flow models achieving 76% accuracy across
          50+ countries to Kaggle competitions in the global top 15%. I care
          about making complex model outputs actually useful for real business
          decisions.
        </p>
      </div>
    </div>
  );
};

export default About;
