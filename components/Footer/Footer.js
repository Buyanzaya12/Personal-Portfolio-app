import Image from "next/image";

export function Footer() {
    return (
        <div className="h-16 text-center flex items-center justify-center bg-slate-900">
            <span className="font-semibold mr-2">&copy;</span> 2023 |
            <span className="ml-2 mr-2 underline">Designed</span> and
            <span className="ml-2 mr-2 underline">coded</span> with
            <span className="mx-2 flex items-center"><Image src="/PP-pics/heart.ico" alt="Heart Icon" width={14} height={10} /></span>
            by Sagar Shah
        </div>
    );
}
