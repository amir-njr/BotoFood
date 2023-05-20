// Link
import Link from "next/link"
// Icon
import Location from "../icon/Location"
import Dollar from "../icon/Dollar"

export default function MenuCard (props) {
    const {id , name , price , details , discount} = props
    return (
        <div className="flex flex-col items-center border gap-4 rounded-md p-2 h-fit">
            <div>
                <img src={`/assets/img/${id}.jpeg`} alt={name}/>
            </div>
            <div className="flex justify-between w-full">
                <span className="text-ghaleb-lime font-bold">{name}</span>
                <span className="flex items-center "><Location /> {details[0].Cuisine}</span>
            </div>
            <div className="flex gap-2 w-full">
                <Dollar /> {price}$
            </div>
            <div className="text-center">

            <Link className="bg-ghaleb-lime rounded-md font-bold px-4 py-2" href={`/menu/${id}`}>See Detail</Link>
            </div>
        </div>
    )
}