// Image
import Image from "next/image";
import food from "../../../public/assets/img/banner.png";

export default function RightH () {
    return (
        <div>
            <Image src={food} alt="Food Photo" />
        </div>
    )
}