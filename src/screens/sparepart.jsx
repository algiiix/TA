import { Link } from "react-router-dom";
import HeaderSearch from "../components/headerSearch";
import { services } from "../data";
import Cards from "../components/home/cards";

export default function Sparepart() {
  return (
    <div className="w-full h-full p-10">
      <HeaderSearch name="sparepart" />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {services.map((service) => (
          <Link key={service.id} to={`/sparepart/${service.id}`}>
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
