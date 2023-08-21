import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="flex justify-center max-container flex-wrap gap-9">
      {services.map((data) => (
        <ServiceCard key={data.label} {...data} />
      ))}
    </section>
  );
};

export default Services;
