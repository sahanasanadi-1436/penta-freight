import "../styles/pentakuhl.css";

function ParcelShippers() {

  const products = [
    "CoolGuard PCM",
    "CoolGuard Advance",
    "Credo Cube"
  ];

  return (

    <section className="parcel">

      <div className="container">

        <div className="section-title">

          <span>PARCEL SHIPPERS</span>

          <h2>Single Use Solutions</h2>

        </div>

        <div className="product-grid">

          {
            products.map((item,index)=>(
              <div className="product-card" key={index}>
                <h3>{item}</h3>
              </div>
            ))
          }

        </div>

      </div>

    </section>

  );

}

export default ParcelShippers;