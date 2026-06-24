import "../styles/home.css";

function Services() {

  const services = [

    {
      title: "Air Freight",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800"
    },

    {
      title: "Ocean Freight",
      image: "https://plus.unsplash.com/premium_photo-1661879449050-069f67e200bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2NlYW4lMjBmcmVpZ2h0fGVufDB8fDB8fHww"
    },

    {
      title: "Project Cargo",
      image: "https://images.unsplash.com/photo-1655164709639-95035bff7ea8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
      title: "Warehousing",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2FyZWhvdXNlfGVufDB8fDB8fHww"
    },

    {
      title: "Custom Clearance",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwHYTkgi_P1nwI6DEVGHQ6sWD8yD1Uvhymmg&s"
    },

    {
      title: "Road Transport",
      image: "https://plus.unsplash.com/premium_photo-1733342421852-3bce709563e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHJvYWQlMjB0cmFucG9ydHxlbnwwfHwwfHx8MA%3D%3D"
    }

  ];

  return (

    <section className="services">

      <div className="container">

        <div className="section-title">

          <span>SERVICES</span>

          <h2>
            Comprehensive Logistics
            Solutions
          </h2>

        </div>

        <div className="services-grid">

          {
            services.map((item,index)=>(
              <div className="service-card" key={index}>

                <img src={item.image} alt="" />

                <div className="service-content">

                  <h3>{item.title}</h3>

                </div>

              </div>
            ))
          }

        </div>

      </div>

    </section>

  );
}

export default Services;