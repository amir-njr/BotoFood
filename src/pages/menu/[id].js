// Layout
import Detaile from "@@/components/Dataile/Detaile";
import HadrLayout from "@@/components/Layout/HadrLayout";

export default function foodId({ data }) {
  
  return (
    <HadrLayout>
      <Detaile {...data}/>
    </HadrLayout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:4000/data`);
  const json = await res.json();
  const data = json.slice(0, 5);
  const paths = data.map((food) => ({
    params: {
      id: food.id.toString(),
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const {
    params: { id },
  } = context;
  const res = await fetch(`http://localhost:4000/data/${id}`);
  const data = await res.json();
  console.log(data);

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}
