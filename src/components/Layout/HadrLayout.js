// Link
import Link from "next/link";
import Footer from "../Footer/Footer";

export default function HadrLayout({ children }) {
  return (
    <section>
      <header className="container mx-auto flex items-center">
        <div className="basis-6/12">
          <h1 className="titr text-ghaleb-lime">
            <Link href="">BotoFood</Link>
          </h1>
        </div>
        <div className="basis-6/12 flex justify-end gap-3 font-bold">
          <Link href="/menu-page">Menu</Link>
          <Link href="">Categories</Link>
        </div>
      </header>
      <section className="container mx-auto">{children}</section>
      <footer className="bg-ghaleb-lime py-2 mt-20">
        <Footer />
      </footer>
    </section>
  );
}
