import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Quais tipos de Fornecedores eu vou encontrar?",
      answer:
        "Nosso eBook lista fornecedores de moda feminina no atacado, incluindo confecções nacionais e importadores.",
    },
    {
      question: "Preciso de CNPJ para comprar?",
      answer:
        "A maioria dos fornecedores não exige CNPJ, permitindo que qualquer pessoa compre.",
    },
    {
      question: "Como sei que não cairei em golpe?",
      answer:
        "Todos os fornecedores foram verificados, garantindo segurança e confiabilidade nas compras.",
    },
    {
      question: "Serve para quem quer comprar para uso próprio?",
      answer:
        "Sim! Você pode comprar diretamente dos fornecedores sem necessidade de revenda.",
    },
    {
      question: "Como recebo o acesso aos fornecedores?",
      answer:
        "Após a compra, o eBook será enviado automaticamente para seu e-mail.",
    },
  ];

  return (
    <section className="container text-center py-5">
      <h2 className="fw-bold" style={{ color: "#d4af37" }}>
        Perguntas <span style={{ color: "#000" }}>frequentes</span>
      </h2>
      <div className="accordion mt-4" id="faqAccordion">
        {faqData.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${
                  openIndex === index ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
              </button>
            </h2>
            <div
              id={`faq${index}`}
              className={`accordion-collapse collapse ${
                openIndex === index ? "show" : ""
              }`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
