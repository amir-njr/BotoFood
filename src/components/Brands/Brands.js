// Icons
import Apple from "../icon/Apple";
import Binance from "../icon/Binance";
import SpaceX from "../icon/SpaceX";
import Tesla from "../icon/Tesla";

export default function Brands () {
    return (
        <section className="container mx-auto">
            <div className="grid grid-cols-4 my-5 gap-2">
                <div className="flex items-center justify-center"><Apple /></div>
                <div className="flex items-center justify-center"><SpaceX /></div>
                <div className="flex items-center justify-center"><Binance /></div>
                <div className="flex items-center justify-center"><Tesla /></div>
            </div>
        </section>
    )
}