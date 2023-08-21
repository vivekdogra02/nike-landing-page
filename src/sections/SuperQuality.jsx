import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="#about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collections
        </p>
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality</span> Shoes
          <br />
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Nike Premium Shoes offer a unique blend of iconic design and superior
          functionality. From the track to the streets, each step becomes a
          statement of distinction as you experience unparalleled comfort and
          support.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Step into a world of unmatched quality and sophistication with Nike
          Premium Shoes and redefine your stride with every move you make.
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
