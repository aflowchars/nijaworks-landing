import Image from "next/future/image";

function Client() {
  const clientIcon = [
    {
      src: "/brand/vidico.png",
      alt: "Vidico Brand Logo",
    },
    {
      src: "/brand/venteny.png",
      alt: "Venteny Brand Logo",
    },
    {
      src: "/brand/curana.png",
      alt: "Curana Brand Logo",
    },
    {
      src: "/brand/vimeo.png",
      alt: "Vimeo Brand Logo",
    },
    {
      src: "/brand/ontario.png",
      alt: "Ontario Brand Logo",
    },
    {
      src: "/brand/multipay.png",
      alt: "Multipay Brand Logo",
    },
  ];

  return (
    <section className="client">
      <div className="client__wrapper">
        {clientIcon.map((icon, index) => {
          return (
            <div key={`client__logo--${index + 1}`} className="client__logo">
              <Image
                src={`${icon.src}`}
                alt={`${icon.alt}`}
                fill
                className="client__logo--icon"
                sizes="responsive"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Client;
