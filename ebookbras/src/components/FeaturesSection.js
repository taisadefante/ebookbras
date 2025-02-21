import "bootstrap/dist/css/bootstrap.min.css";

const FeaturesSection = () => {
  return (
    <section
      className="d-flex align-items-center justify-content-center text-white py-5"
      style={{
        background: "linear-gradient(to right, #000000, #4c3d2f)",
        padding: "50px 0",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-md-start">
            <h2 style={{ color: "#d4af37" }} className="fw-bold">
              A lista que vai mudar o seu negócio!
            </h2>
            <p>
              Você é um empreendedor iniciante no ramo de moda feminina e não
              consegue encontrar fornecedores confiáveis, que ofereçam produtos
              de qualidade e preços acessíveis?
            </p>
            <p className="fw-bold">
              Eu tenho certeza que sim, até porque{" "}
              <span style={{ color: "#d4af37" }}>
                ter fornecedores certos é uma das partes mais difíceis de
                qualquer negócio.
              </span>
            </p>
            <p style={{ color: "#d4af37" }} className="fw-bold">
              Mas você não precisa mais se preocupar com isso...
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="/images/ebook-mockup.png"
              alt="Ebook e iPad"
              className="img-fluid"
              style={{
                maxWidth: "70%",
                transform: "rotate(10deg)",
                marginTop: "0px",
              }}
              className="responsive-img"
            />
          </div>
        </div>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .responsive-img {
              margin-top: 30px !important;
            }
          }
          @media (max-width: 576px) {
            .responsive-img {
              margin-top: 50px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default FeaturesSection;
