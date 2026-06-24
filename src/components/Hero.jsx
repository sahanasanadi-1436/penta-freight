import "../styles/home.css";

function Hero() {
  return (
    <section className="hero">

      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://www.pentafreight.com/assets/homevideo-bpwZoUMP.mp4"
          type="video/mp4"
        />
      </video>

      <div className="hero-overlay"></div>

      <div className="container hero-content">

        <span className="hero-tag">
          GLOBAL LOGISTICS SOLUTIONS
        </span>

        <h1>
          Delivering Excellence Across
          The World
        </h1>

        <p>
          Integrated freight forwarding and supply chain solutions
          built to move your business faster and smarter.
        </p>

        <button className="hero-btn">
          Explore Services
        </button>

      </div>

    </section>
  );
}

export default Hero;