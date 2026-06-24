import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div>

          <img
            src="/logo.png"
            alt=""
            className="footer-logo"
          />

          <p>
            Delivering excellence in logistics and supply chain
            solutions across the globe.
          </p>

        </div>

        <div>

          <h4>Company</h4>

          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Industries</li>
            <li>Contact</li>
          </ul>

        </div>

        <div>

          <h4>Services</h4>

          <ul>
            <li>Air Freight</li>
            <li>Ocean Freight</li>
            <li>Warehousing</li>
            <li>Project Cargo</li>
          </ul>

        </div>

        <div>

          <h4>Contact</h4>

          <p>Mumbai, India</p>
          <p>info@pentafreight.com</p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;