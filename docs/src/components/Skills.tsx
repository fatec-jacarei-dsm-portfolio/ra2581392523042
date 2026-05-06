import "./../styles/skills.scss";

// cada habilidade tem nome + ícone (Font Awesome)
const skills = [
  { name: "Javascript", icon: "fab fa-js" },
  { name: "Typescript", icon: "fab fa-js" }, // não existe oficial, usa JS
  { name: "React", icon: "fab fa-react" },
  { name: "Node.js", icon: "fab fa-node-js" },
  { name: "AWS", icon: "fab fa-aws" },
  { name: "Docker", icon: "fab fa-docker" },
  { name: "Figma", icon: "fab fa-figma" },
  { name: "Bootstrap", icon: "fab fa-bootstrap" },
  { name: "MySQL", icon: "fas fa-database" },
  { name: "Python", icon: "fab fa-python" },
  { name: "QGIS", icon: "fas fa-map" }, // não tem oficial, usa mapa
  { name: "SCSS", icon: "fab fa-sass" }
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Habilidades</h2>
      <p>Ao longo da minha trajetória, trabalhei em projetos que empregam essas tecnologias.</p>
      <div className="skills-grid">
        {skills.map(skill => (
          <div className="skill-card" key={skill.name}>
            <i className={skill.icon}></i>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
