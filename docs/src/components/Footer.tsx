import React from "react";
import "../styles/footer.scss";


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Copyright © 2026 </p>
        <p>Todos os direitos reservados</p>
        <div className="footer-right">
          <span>Vitória Vargas</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
