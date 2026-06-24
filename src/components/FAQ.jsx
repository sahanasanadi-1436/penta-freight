import { useState } from "react";
import "../styles/industries.css";

function FAQ() {

  const [open, setOpen] = useState(null);

  const faqs = [

    {
      q: "What industries does Penta Freight serve?",
      a: "Pharmaceuticals, Chemicals, Automotive, Packaging and many more."
    },

    {
      q: "Do you provide customized logistics solutions?",
      a: "Yes, all solutions are tailored according to customer requirements."
    },

    {
      q: "Do you handle temperature-sensitive cargo?",
      a: "Yes. Through PentaKuhl specialized cold-chain solutions."
    }

  ];

  return (

    <section className="faq">

      <div className="container">

        <div className="section-title">

          <span>FAQ</span>

          <h2>Frequently Asked Questions</h2>

        </div>

        {
          faqs.map((item,index)=>(

            <div
              className="faq-item"
              key={index}
              onClick={()=>setOpen(open===index ? null : index)}
            >

              <h3>{item.q}</h3>

              {
                open===index &&
                <p>{item.a}</p>
              }

            </div>

          ))
        }

      </div>

    </section>

  );

}

export default FAQ;