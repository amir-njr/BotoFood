// Components
import LeftH from "./LeftH";
import RightH from "./RightH";

export default function Hero() {
  return (
    <section className="flex items-center my-10">
      <div className="basis-6/12">
        <LeftH />
      </div>
      <div className="basis-6/12">
        <RightH />
      </div>
    </section>
  );
}
