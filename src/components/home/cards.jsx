import HeroImg from "../../assets/hero.png";

export default function Cards({ name, description, price }) {
  return (
    <div className="shadow-lg rounded-lg p-5">
      <div className="mb-2">
        <img className="w-80 rounded-lg" src={HeroImg} alt="mobil" />
      </div>
      <article>
        <h4 className="text-lg font-semibold">{name}</h4>
        <span className="capitalize text-sm">description: </span>
        <p className="text-sm mb-2">{description}</p>
        <div className="flex items-center gap-2">
          <span className="capitalize">price: </span>
          <span>Rp {price.toLocaleString("id-ID")}</span>
        </div>
      </article>
    </div>
  );
}
