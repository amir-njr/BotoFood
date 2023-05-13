// Link
import Link from "next/link";

export default function Guide() {
  return (
    <section>
      <div className="container mx-auto flex my-10">
        <div className="basis-4/12 shadow-2xl">
          <Link className="py-2 px-5 rounded shadow-xl font-bold bg-ghaleb-lime hover:bg-lime-600" href="/menu">Menu</Link>
        </div>
        <div className="basis-4/12 shadow-2xl text-center">
          <Link className="py-2 px-5 rounded shadow-xl font-bold bg-ghaleb-lime hover:bg-lime-600" href="/categories">Categories</Link>
        </div>
        <div className="basis-4/12 shadow-2xl text-right">
          <Link className="py-2 px-5 rounded shadow-xl font-bold bg-ghaleb-lime hover:bg-lime-600" href="/">Discount</Link>
        </div>
      </div>
    </section>
  );
}
