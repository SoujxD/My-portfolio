import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm an AI Software Engineer with an MS in Analytics from USC (GPA
          3.54/4.00). I build multi-agent LLM systems and RAG pipelines,
          cutting tool-routing failures from 22% to 9% and raising RAGAS
          faithfulness from 0.71 to 0.86 at Borealis Group Analytics. I like
          turning research-grade models into systems people actually trust
          and use.
        </p>
      </div>
    </div>
  );
};

export default About;
