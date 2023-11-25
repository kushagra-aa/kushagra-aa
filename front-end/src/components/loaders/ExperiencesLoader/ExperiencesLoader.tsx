import "./experience-loader.css";

function ExperienceLoader() {
  return (
    <div className="experience_loader">
      <div className="experience_loader_role" />
      <div className="experience_loader_name" />
      <div className="experience_loader_type" />
      <div className="experience_loader_date" />
    </div>
  );
}
function ExperiencesLoader() {
  return [1, 2, 3, 4].map((i) => <ExperienceLoader key={i} />);
}

export default ExperiencesLoader;
