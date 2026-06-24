import "../styles/home.css";

function Stats() {

  const stats = [
    {number:"31+",text:"Years Experience"},
    {number:"7+",text:"Offices"},
    {number:"200+",text:"Experts"},
    {number:"50+",text:"Awards"}
  ];

  return (
    <section className="stats">

      <div className="container stats-grid">

        {
          stats.map((item,index)=>(
            <div className="stat-card" key={index}>

              <h2>{item.number}</h2>

              <p>{item.text}</p>

            </div>
          ))
        }

      </div>

    </section>
  );
}

export default Stats;