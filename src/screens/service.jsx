import { Link } from "react-router-dom";
import Cards from "../components/home/cards";
import { services } from "../data";
import HeaderSearch from "../components/headerSearch";

export default function Service() {
  return (
    <div className="w-full h-full p-10">
      <HeaderSearch name="services" />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {services?.map((service) => (
          <Link key={service.id} to={`/service/${service.id}`}>
            <Cards
              price={service.price}
              name={service.name}
              description={service.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
