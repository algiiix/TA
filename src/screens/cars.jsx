import { Link } from "react-router-dom";
import HeaderSearch from "../components/headerSearch";
import Cards from "../components/home/cards";
import useFetch from "../hooks/useFetch";

export default function Cars() {
  const { data } = useFetch({
    url: "https://car-api2.p.rapidapi.com/api/vin/KNDJ23AU4N7154467",
  });

  return (
    <div className="w-full h-full p-10">
      <HeaderSearch name="cars" />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {data?.trims?.map((car) => (
          <Link to={`/cars/${car?.id}`} key={car?.id}>
            <Cards
              name={car?.name}
              description={car?.description}
              price={car?.msrp}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
