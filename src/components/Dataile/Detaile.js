// Link
import Link from "next/link";
// Icon
import Location from "../icon/Location";
import Dollar from "../icon/Dollar";

export default function Detaile(props) {
  const {
    id,
    name,
    price,
    discount,
    introduction,
    details,
    ingredients,
    recipe,
  } = props;
  console.log(Object.keys(details));
  return (
    <div className="my-20">
      <h1 className="titr border-b-4 border-ghaleb-lime w-fit py-2">Datails</h1>
      <div className="my-10 flex flex-col gap-10">
        <div className="flex items-center gap-5">
          <div className="w-60">
            <img
              src={`/assets/img/${id}.jpeg`}
              className="rounded-md"
              alt={name}
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-ghaleb-lime font-bold">{name}</span>
            <span className="flex items-center">
              <Location /> {details[0].Cuisine}
            </span>
            <span className="flex items-center">
              <Dollar /> {discount ? (price * (100 - discount)) / 100 : price}$
            </span>
            <span className="text-red-600 font-bold">
              {discount ? `${discount}% OFF` : null}
            </span>
          </div>
        </div>
        <div>
          <p>{introduction}</p>
        </div>
        <div>
          <h1 className="text-ghaleb-lime font-bold text-lg my-2">Details</h1>

          <ul className="">
            {details.map((detail, index) => (
              <li className="li flex gap-2" key={index}>
                <p className="font-bold">{Object.keys(detail)[0]}: </p>
                <span>{Object.values(detail)[0]}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="text-ghaleb-lime font-bold text-lg my-2">Ingredients</h1>
          <ul>
            {ingredients.map((item, index) => (
              <li className="li">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="text-ghaleb-lime font-bold text-lg my-2">Recipe</h1>
          <ul>
            {recipe.map((item, index) => (
              <li className="flex gap-2 nthBg p-4"><span className="font-bold">{index + 1}</span><span>{item}</span></li>
            ))}
          </ul>
        </div>
        <div>
          <button className="text-center bg-ghaleb-lime p-2 w-full font-bold rounded-md hover:bg-lime-600">Add</button>
        </div>
      </div>
    </div>
  );
}
