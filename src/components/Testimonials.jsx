import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Testimonials() {

  return (

    <section className="testimonials">

      <div className="container">

        <div className="section-title">
          <span>TESTIMONIALS</span>
          <h2>What Our Clients Say</h2>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 }
          }}
        >

          <SwiperSlide>
            <div className="testimonial-card">
              <p>
                Penta Freight consistently delivers exceptional
                logistics support and customer service.
              </p>
              <h4>John Anderson</h4>
              <span>Global Pharma</span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-card">
              <p>
                Reliable solutions and timely deliveries for our
                critical cargo worldwide.
              </p>
              <h4>Sarah Wilson</h4>
              <span>Industrial Solutions</span>
            </div>
          </SwiperSlide>

        </Swiper>

      </div>

    </section>

  );

}

export default Testimonials;