import { useNavigate } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import HeroImg from "../assets/hero.png";

export default function ServiceSingle() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full p-10 lg:px-32 lg:py-10">
      <div className="mb-2">
        <button
          className="flex items-center text-gray-500"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          <BiChevronLeft size={25} />
          back
        </button>
      </div>
      <div>
        <div className="border-2 rounded-xl">
          <img src={HeroImg} alt="image" />
        </div>
        <div className="w-full h-fit p-5 shadow-lg">
          <h3 className="font-semibold capitalize mb-2 text-4xl text-gray-600">
            Service Mobil Honda Jazz
          </h3>
          <hr className="my-2" />
          <article className="mt-2">
            <span className="capitalize mb-2 block text-xl text-gray-500">
              description
            </span>
            <ul className="text-gray-500 list-disc pl-5">
              <li>Bensin</li>
              <li>2000CC</li>
              <li>Automatic</li>
              <li>Std Kirian</li>
              <li>Full Karbon</li>
              <li>Siap Balap</li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  );
}
