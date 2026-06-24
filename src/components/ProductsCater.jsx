import "../styles/pentakuhl.css";

function ProductsCater() {

  const items = [
    "Pharmaceuticals",
    "Vaccines",
    "Clinical Trials",
    "API",
    "Tissue Samples",
    "R&D"
  ];

  return (

    <section className="cater">

      <div className="container">

        <div className="section-title">

          <span>WE CATER TO</span>

          <h2>Industries We Serve</h2>

        </div>

        <div className="cater-grid">

          {
            items.map((item,index)=>(
              <div className="cater-card" key={index}>
                {item}
              </div>
            ))
          }

        </div>

      </div>

    </section>

  );

}

export default ProductsCater;