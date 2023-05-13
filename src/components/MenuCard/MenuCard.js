import Link from "next/link"

export default function MenuCard (props) {
    const {id , name} = props
    return (
        <div className="flex flex-col items-center border gap-2 rounded-md p-2 h-fit">
            <div>
            </div>
            <div>
                <span className="text-ghaleb-lime font-bold">{name}</span>
                <span>{}</span>
            </div>
            <div className="text-center">

            <Link className="bg-ghaleb-lime rounded-md font-bold px-4 py-2" href="">See Detail</Link>
            </div>
        </div>
    )
}