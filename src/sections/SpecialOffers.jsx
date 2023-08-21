import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special</span> Offer
          <br />
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Experience the thrill of savings with our exclusive Nike Special
          Offer! Elevate your active lifestyle with premium Nike gear at
          unbeatable prices. From iconic sneakers to cutting-edge activewear,
          discover a curated selection that fuses style and performance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Don't miss out on this limited-time opportunity to step into greatness
          without breaking the bank. Shop now and enjoy the best of Nike for
          less!
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            text-color="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
