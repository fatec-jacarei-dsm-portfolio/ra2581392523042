import "./../styles/hero.scss";
import minhaFoto from "../assets/minha-foto.png";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-text">
        <h1>
          <Typewriter
            words={["Bem-vindo ao meu portfólio.", "Meu nome é Vitória Vargas"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>
              
      </div>
      <div className="hero-image">
        <img src={minhaFoto} alt="Vitória Vargas" />
      </div>
    </section>
  );
}
