import React from "react";
import Image from "next/future/image";

function Portfolio() {
  const portfolioCard = [
    {
      image: "/asset/project-multipay.png",
      alt: "Multipay Portfolio Preview",
      title: "MultiPay - Payment Gateway Website",
      desc: "Multipay is a payment gateway system company. This website caters the needs of enterprises that use Multipay services",
      tags: ["UI/UX Design", "Web Development"],
    },
    {
      image: "/asset/project-venteny.png",
      alt: "Venteny Portfolio Preview",
      title: "Venteny - B2B Website",
      desc: "Venteny B2B Dashboard is made for companies who already cooperated with Venteny. This dashboard helps users to manage benefits for its employees.",
      tags: ["UI/UX Design", "Web Development"],
    },
    {
      image: "/asset/project-curana.png",
      alt: "Curana Portfolio Preview",
      title: "Curana - Medical Clinic Website",
      desc: "Curana is an online appointment website for a medical clinic located in Germany. The website is made to be clean and easy to navigate for users.",
      tags: ["UI/UX Design"],
    },
    {
      image: "/asset/project-rmglass.png",
      alt: "RM Glass Portfolio Preview",
      title: "RM Glass - Real Estate Website",
      desc: "RM Glas is a glass company from the Netherlands. The website is made for their individual and contractor clients.",
      tags: ["UI/UX Design"],
    },
  ];

  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <div className="portfolio__tag">Our Services</div>

        <h3 className="portfolio__heading">Our Professional Project</h3>

        <div className="portfolio__card">
          {portfolioCard.map((portfolio, index) => {
            return (
              <div
                key={`portfolio-card-${index + 1}`}
                className="portfolio__card--container"
              >
                <div className="portfolio__card--photo">
                  <Image
                    src={portfolio.image}
                    alt={portfolio.alt}
                    fill
                    priority
                    sizes="responsive"
                    className="portfolio__card--image"
                  />
                </div>
                <h3 className="portfolio__card--title">{portfolio.title}</h3>
                <p className="portfolio__card--desc">{portfolio.desc}</p>
                <div className="portfolio__card--tag">
                  {portfolio.tags.map((tag, index) => {
                    return (
                      <span
                        key={`portfolio__tag--${index + 1}`}
                        className="portfolio__card--tagline"
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="portfolio__cta">
          <button className="portfolio__cta--button">Our Services</button>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
