// Components
import HadrLayout from "@@/components/Layout/HadrLayout";
import Hero from "@@/components/Hero/Hero";
import WhyUs from "@@/components/WhyUs/WhyUs";
import WhoWe from "@@/components/WhoWe/WhoWe";
import Brands from "@@/components/Brands/Brands";
import Order from "@@/components/Order/Order";
import Guide from "@@/components/Guide/Guide";


export default function Home() {
  return (
    <main>
      <HadrLayout>
        <Hero />
        <WhyUs />
        <WhoWe />
        <Brands />
        <Order />
        <Guide />
      </HadrLayout>
    </main>
  )
}
