import React from 'react';
import Image from "next/image";

const ExperienceCard = ({ startDate, endDate, listItems }) => {

    return (
        <div className="m-5 bg-gray-800 grid grid-cols-3 p-8 rounded-lg mx-[272px]">
            <Image src="/PP-pics/logo-upwork.svg" width={102} height={28}/>
            <ul className="list-disc">
                {listItems.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
            <p>
                {startDate} - {endDate}
            </p>
        </div>
       
    );
};

export default ExperienceCard;
