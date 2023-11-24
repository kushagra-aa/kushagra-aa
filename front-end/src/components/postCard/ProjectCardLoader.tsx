import "./project-card.css";

function ProjectCardLoader() {
  return (
    <div className="project_card project_card_loader">
      <div className="project_image" />
      <div className="project_info">
        <h6>_</h6>
        <p>
          <span />
          <span />
          <span />
        </p>
        <div className="project_tags">
          <p>tags:</p>
          {[1, 2].map((t) => (
            <span key={t} />
          ))}
        </div>
        <div className="project_tech">
          <p>tech:</p>
          {[1, 2].map((t) => (
            <span key={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCardLoader;
