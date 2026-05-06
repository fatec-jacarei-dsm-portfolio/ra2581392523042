import "../styles/projects.scss";
import projeto1 from "../assets/projeto1.png";
import projeto2 from "../assets/projeto2.png";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projetos</h2>
      <div className="projects-grid">
        <div className="project-card">
          <div className="card-content">
            <img src={projeto1} alt="Portal- AgriLab" />
            <div className="card-text">
              <h3>Portal- AgriLab</h3>
              <p>
                No primeiro semestre do curso, participei do desenvolvimento de uma plataforma institucional moderna e funcional
                para o AgriRS Lab, vinculado ao INPE. O site foi concebido para apresentar informações sobre o laboratório, 
                divulgar projetos e oferecer oportunidades relacionadas às suas atividades. Nesse projeto, fui responsável por 
                estruturar e estilizar a página de vagas utilizando HTML5 e CSS3, garantindo responsividade e uma experiência 
                de navegação agradável para os usuários. Além disso, implementei a conexão da página com o servidor e banco de 
                dados (SQL), possibilitando o gerenciamento dinâmico das informações. Também desenvolvi o card administrativo 
                com funcionalidades de criação, edição e exclusão de vagas, oferecendo maior autonomia na gestão de conteúdo. 
                Por fim, realizei a tradução e internacionalização do site para os idiomas inglês e português, ampliando o 
                alcance e a acessibilidade da plataforma. Essa experiência me proporcionou prática em desenvolvimento web full
                stack, integração entre frontend e backend, design responsivo e internacionalização de sistemas.
              </p>
              <a
                href="https://github.com/KaimanByte/AgriRS-Lab"
                target="_blank"
                rel="noopener noreferrer"
              >
                Acesse o projeto no GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="card-content">
            <img src={projeto2} alt="Projeto Conecta Fatec" />
            <div className="card-text">
              <h3>Conecta Fatec Jacareí</h3>
              <p>
                Este projeto tem como objetivo o desenvolvimento de uma aplicação web de autoatendimento, baseada em um modelo 
                de chatbot conversacional, voltada para auxiliar alunos e servidores da Fatec Jacareí. Minha contribuição até o momento 
                concentrou-se na criação e estilização do card de login, que funciona como a porta de entrada para o 
                sistema. O design foi pensado para ser moderno, responsivo e intuitivo, garantindo que o usuário tenha uma 
                experiência agradável já no primeiro contato com a aplicação. Foram aplicadas boas práticas de UI/UX, como 
                contraste adequado, tipografia clara e espaçamento consistente, reforçando a identidade visual do projeto.
                Embora a implementação funcional do chatbot ainda esteja em andamento, o trabalho realizado até aqui estabelece uma base 
                sólida para futuras integrações, como: Autenticação segura de usuários. Validação de credenciais em tempo real. Integração com o 
                fluxo de navegação do chatbot. Assim, mesmo em fase inicial, o projeto já demonstra preocupação com a usabilidade e acessibilidade, aspectos fundamentais para o sucesso da aplicação.
              </p>
              <a href="https://github.com/KaimanByte/Conecta-Fatec-Jacarei">
                Acesse o projeto no GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
