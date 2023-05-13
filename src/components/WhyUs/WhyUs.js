// Icons
import Fast from "../icon/Fast";
import Food from "../icon/Food";
import Choice from "../icon/Choice";
import Clock from "../icon/Clock";

export default function WhyUs () {
    return (
        <section className="my-10">
            <h1 className="titr text-ghaleb-lime">Why Us?</h1>
            <div className="grid grid-cols-4 my-5 gap-2">
                <div className="border-2 flex flex-col items-center py-5 rounded-md font-bold gap-5 justify-center"><Fast />Fast</div>
                <div className="border-2 flex flex-col items-center py-5 rounded-md font-bold gap-5 justify-center"><Food /><span>Best Restaurants</span></div>
                <div className="border-2 flex flex-col items-center py-5 rounded-md font-bold gap-5 justify-center"><Choice /><span>Your Choice</span></div>
                <div className="border-2 flex flex-col items-center py-5 rounded-md font-bold gap-5 justify-center"><Clock />24-7</div>
            </div>
        </section>
    )
}