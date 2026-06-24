import "../styles/pentakuhl.css";

function PentakuhlAbout() {
  return (
    <section className="pk-about">

      <div className="container pk-about-container">

        <div>
          <img src="/pk-about.jpg" alt="" />
        </div>

        <div className="pk-about-content">

          <span>ABOUT PENTAKUHL</span>

          <h2>
            Reliable Temperature
            Sensitive Logistics
          </h2>

          <p>
            PentaKuhl provides innovative passive packaging
            solutions and cold-chain logistics expertise for
            pharmaceutical products worldwide.
          </p>

        </div>

      </div>

    </section>
  );
}

export default PentakuhlAbout;