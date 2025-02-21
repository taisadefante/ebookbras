import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PricingSection = () => {
  const handleBuyNow = () => {
    window.location.href = "https://app.kiwify.com.br/checkout/exemplo";
  };

  return (
    <section
      className="d-flex justify-content-center py-5"
      style={{ background: "#14110f" }}
    >
      <div
        className="card text-center p-4"
        style={{
          background: "#000",
          color: "#fff",
          borderRadius: "15px",
          maxWidth: "500px",
          boxShadow: "0 0 20px rgba(255, 215, 0, 0.3)",
        }}
      >
        <h3 className="fw-bold">Não perca mais tempo!</h3>
        <p className="mb-2">
          Clique no botão abaixo e transforme seu negócio de moda feminina hoje
          mesmo!
        </p>
        <p className="text-decoration-line-through text-muted">DE R$97,00</p>
        <h2 className="fw-bold" style={{ fontSize: "2rem" }}>
          12x de <span style={{ color: "#d4af37" }}>9,74</span>
        </h2>
        <p className="fw-bold">OU 97,00 À VISTA</p>
        <button
          className="btn btn-lg text-white"
          style={{ background: "#d4af37", borderRadius: "10px" }}
          onClick={handleBuyNow}
        >
          COMPRAR COM DESCONTO
        </button>
      </div>
    </section>
  );
};

export default PricingSection;
