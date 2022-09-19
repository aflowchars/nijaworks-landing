import Image from "next/future/image";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__heading">
          <span className="hero__heading--tag">We Are Here To Help You</span>
          <span className="hero__heading--text">Visualize</span>
          <div className="hero__heading--image">
            <span className="hero__heading--illustration">
              <Image
                src="/illustration/ill-hero.png"
                className="hero__heading--photo"
                alt="Phone Hero Illustration"
                fill
                sizes="responsive"
              />
            </span>
            <span className="hero__heading--text">Your</span>
          </div>
          <span className="hero__heading--text">Big Idea</span>
        </h1>

        <div className="hero__desc">
          <p className="hero__desc--text">
            Here in Nija, we help you craft your Big Idea with support from our
            amazing team.
            <span className="hero__desc--bold">
              {" "}
              Whether it is UI/UX Design, Development, and Illustrations
            </span>
          </p>
        </div>
      </div>
      <div className="hero__cta">
        <div className="hero__cta--left">
          <div className="hero__cta--round"></div>
        </div>
        <button className="hero__cta--button">Collaborate With Us</button>
        {/* <div className="hero__cta--right"></div> */}
      </div>
    </section>
  );
}

export default Hero;
