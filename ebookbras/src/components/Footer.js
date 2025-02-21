import React from "react";

function Footer() {
  return (
    <footer
      className="text-center py-4"
      style={{
        width: "100%",
        background: "#000",
        color: "#d4af37",
        marginTop: "20px",
        padding: "20px 0",
        fontSize: "14px",
      }}
    >
      <div>
        <p style={{ margin: "5px 0" }} className="footer-text">
          © 2025 Defan Soluções Digitais - Todos os direitos reservados
        </p>
        <p style={{ margin: "5px 0" }} className="footer-text">
          Desenvolvido por:{" "}
          <span style={{ fontWeight: "bold" }}>Taís Defante</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
