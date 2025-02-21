import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSection = () => {
  return (
    <section
      className="d-flex align-items-center justify-content-center text-white"
      style={{
        background: "linear-gradient(to right, #000000, #4c3d2f)",
        padding: "50px 0",
      }}
    >
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-md-6 text-md-start">
            <h1 className="fw-bold">
              Descubra os{" "}
              <span style={{ color: "#d4af37" }}>melhores fornecedores</span> de
              moda feminina
            </h1>
            <p>
              Economize tempo e dinheiro encontrando fornecedores confiáveis, de
              qualidade e com melhores preços para sua loja vender muito todos
              os dias.
            </p>
            <button className="btn btn-warning btn-lg mt-3">
              COMPRAR COM DESCONTO
            </button>
            <div className="mt-3"></div>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="/images/payment-icons.png"
              alt="Mockup do Ebook"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
