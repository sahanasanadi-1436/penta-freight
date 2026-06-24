import "../styles/home.css";

function About() {
  return (
    <section className="about">

      <div className="container about-container">

        <div className="about-image">
          <img src="https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=PYs9JKctmfYj5VNwSQp5QcxHmaPsEGuYEIMT_rFM3ow=" alt="" />
        </div>

        <div className="about-content">

          <span>ABOUT PENTA</span>

          <h2>
            A Trusted Partner For
            Global Logistics
          </h2>

          <p>
            Penta Freight is a leading logistics and supply chain
            company delivering customized transportation solutions
            with unmatched reliability and excellence.
          </p>

          <button className="orange-btn">
            Read More
          </button>

        </div>

      </div>

    </section>
  );
}

export default About;