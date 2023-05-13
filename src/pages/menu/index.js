// Component
import HadrLayout from "@@/components/Layout/HadrLayout";
import MenuCard from "@@/components/MenuCard/MenuCard";

export default function menuPage({ data }) {
  return (
    <HadrLayout>

    <section className="container mx-auto">
      <div>
        <h1 className="titr border-b-4 border-ghaleb-lime my-10 py-2 w-fit">Menu</h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {data.map((food) => (
          <MenuCard key={food.id} {...food} />
        ))}
      </div>
    </section>
    </HadrLayout>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}
