import "./../styles/contact.scss";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contato</h2>
      <p>Precisa de mais informações? Me chame através dos canais abaixo!</p>
      <div className="contact-icons">
        <a href="mailto:vi.vargas@outlook.com?subject=Contato%20pelo%20site&body=Olá%20Vitória,%20gostaria%20de%20mais%20informações.">
          <i className="fas fa-envelope"></i> E-mail
        </a>
        <a
          href="https://www.linkedin.com/in/vit%C3%B3ria-barbara-vargas-9b920b351/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a
          href="https://github.com/vitvargas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>
    </section>
  );
}
