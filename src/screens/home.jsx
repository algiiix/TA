import { Link } from "react-router-dom";
import HeroImg from "../assets/hero.png";
import Cards from "../components/home/cards";
import { cars } from "../data";

export default function Home() {
  return (
    <div className="p-10 lg:px-32 lg:py-10">
      <div className="border-[1px] border-black rounded-lg p-6 flex flex-col-reverse lg:flex-row justify-between mb-10">
        <article className="flex-1">
          <div className="capitalize mb-4 lg:mb-8 text-gray-600 text-xl lg:text-4xl font-semibold">
            the best provider
          </div>
          <h2 className="capitalize mb-6 lg:mb-14 text-4xl lg:text-6xl text-gray-600">
            auto service <br /> & repair
          </h2>
          <p className="text-gray-500 text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur. Laoreet sit dignissim
            posuere dolor praesent eu. Feugiat hendrerit id euismod felis
            sollicitudin. Sagittis in nam ornare duis etiam eu. Blandit sed
            suspendisse lectus hendrerit massa mauris volutpat elit.
          </p>
        </article>
        <div className="flex-1 mb-3 lg:mb-0">
          <img src={HeroImg} alt="hero" />
        </div>
      </div>
      <div>
        <div className="mb-16">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="capitalize text-2xl font-semibold">cars</h3>
            <Link
              to="/cars"
              className="capitalize text-sm text-gray-500 hover:text-gray-700 transition"
            >
              view more
            </Link>
          </div>
          <div className="flex items-center flex-col lg:flex-row gap-10">
            {cars.map((car) => (
              <Link key={car.id} to={`/cars/${car.id}`}>
                <Cards
                  name={car.name}
                  description={car.description}
                  price={car.price}
                />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-5 flex items-center justify-between">
            <h3 className="capitalize text-2xl font-semibold">sparepart</h3>
            <Link
              to="/sparepart"
              className="capitalize text-sm text-gray-500 hover:text-gray-700 transition"
            >
              view more
            </Link>
          </div>
          <div className="flex items-center flex-col lg:flex-row gap-10">
            {cars.map((car) => (
              <Link key={car.id} to={`/sparepart/${car.id}`}>
                <Cards
                  name={car.name}
                  description={car.description}
                  price={car.price}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
