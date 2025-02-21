import React from "react";

const CallToAction = () => {
  const handleBuyNow = () => {
    window.location.href = "https://app.kiwify.com.br/checkout/exemplo"; // Substitua pela URL real do checkout
  };
  return (
    <section
      className="text-center py-5"
      style={{ background: "#FFD700", color: "#000" }}
    >
      <h2>Adquira Agora a Lista Completa!</h2>
      <p>
        Não perca tempo! Utilize os melhores fornecedores e aumente seu
        faturamento.
      </p>
      <button className="btn btn-dark btn-lg" onClick={handleBuyNow}>
        Comprar Agora
      </button>
    </section>
  );
};

export default CallToAction;
