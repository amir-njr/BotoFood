// Link
import Link from "next/link";

export default function LeftH() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="titr py-2 border-b-4 border-ghaleb-lime">BotoFood</h1>
      <p className="font-bold">Food Delivery and Takout!</p>
      <p>
        BotoFood is an online food ordering and delivery platform launched by
        Uber in 2014 Meals are delivered by couriers using cars, scooters,
        bikes, or on food.
      </p>
      <Link className="bg-ghaleb-lime rounded-md w-40 text-center font-bold py-4 " href="">See All</Link>
    </div>
  );
}
