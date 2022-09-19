import React from "react";
import Image from "next/future/image";

function Service() {
  const serviceContent = [
    {
      title: "UI/UX Design",
      desc: "Represents your company value through clean-functional designs on  various of digital product",
      image: "/illustration/ill-service-ui.png",
      alt: "Design Tools Illustration",
    },
    {
      title: "Web Development",
      desc: "Our experienced Front-end developers will help you implement UI/UX design to your web product",
      image: "/illustration/ill-service-web.png",
      alt: "Website Illustration",
    },
    {
      title: "Apps Development",
      desc: "Team of talented and professional Front-end developers will smoothly apply UI/UX design to your Apps",
      image: "/illustration/ill-service-apps.png",
      alt: "Phone Illustration",
    },
    {
      title: "Illustration",
      desc: "Personalize illustration to elevate the consistency of your company throughout all channels",
      image: "/illustration/ill-service-illustration.png",
      alt: "Canvas Illustration",
    },
  ];
  return (
    <section className="service">
      <div className="service__tag">Our Services</div>

      <h3 className="service__heading">See What We Can Do For You</h3>

      <div className="service__card">
        {serviceContent.map((service, index) => (
          <div
            key={`service-card-${index + 1}`}
            className="service__card--container"
          >
            <div className="service__card--illustration">
              <Image
                src={service.image}
                fill
                sizes="responsive"
                alt={service.alt}
                className="service__card--image"
              />
            </div>
            <h5 className="service__card--title">{service.title}</h5>
            <p className="service__card--desc">{service.desc}</p>
            <button className="service__card--cta">See Detail</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;
