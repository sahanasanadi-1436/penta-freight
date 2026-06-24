import "../styles/industries.css";

function IndustryGrid() {

  const industries = [

    {
      title: "Pharmaceutical",
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhhcm1hY2V1dGljYWwlMjBtYW51ZmFjdHVyaW5nfGVufDB8fDB8fHww"
    },

    {
      title: "Chemicals",
      image: "https://plus.unsplash.com/premium_photo-1681426676206-0f2c02b48aff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2hlbWljYWxzfGVufDB8fDB8fHww"
    },

    {
      title: "Automotive",
      image: "https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXV0b21vdGl2ZXxlbnwwfHwwfHx8MA%3D%3D"
    },

    {
      title: "Electronics",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D"
    },

    {
      title: "Packaging",
      image: "https://media.istockphoto.com/id/1345170562/photo/male-worker-taping-cardboard-box.webp?a=1&b=1&s=612x612&w=0&k=20&c=TGWObqtCA0Il7cQN2RZ-RfVvOBcAuLsY8AByfeUlEDw="
    },

    {
      title: "Energy",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW5lcmd5fGVufDB8fDB8fHww"
    },

    {
      title: "Glassware",
      image: "https://images.unsplash.com/photo-1610821165540-80c084d50fd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2xhc3N3YXJlfGVufDB8fDB8fHww"
    },

    {
      title: "Time Critical Cargo",
      image: "https://images.unsplash.com/photo-1634638022845-1ab614a94128?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VGltZSUyMENyaXRpY2FsJTIwQ2FyZ298ZW58MHx8MHx8fDA%3D"
    }

  ];

  return (

    <section className="industry-section">

      <div className="container">

        <div className="section-title">

          <span>OUR INDUSTRIES</span>

          <h2>Sector Specific Expertise</h2>

        </div>

        <div className="industry-grid">

          {
            industries.map((item,index)=>(
              <div className="industry-card" key={index}>

                <img src={item.image} alt="" />

                <div className="industry-content">

                  <h3>{item.title}</h3>

                  <p>
                    Customized logistics and supply chain
                    solutions for this industry.
                  </p>

                </div>

              </div>
            ))
          }

        </div>

      </div>

    </section>

  );

}

export default IndustryGrid;