
import React from 'react';
import Image from "next/image";


const experiences = [
    {
        listItems: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Ut pretium arcu et massa semper, id fringilla leo semper.", "Sed quis justo ac magna.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
        startDate: "Nov 2021",
        endDate: "Present",
    },
    {
        listItems: ["Sed quis justo ac magna.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sed quis justo ac magna.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
        startDate: "Jul 2017",
        endDate: "Oct 2021",
    },
    {
        listItems: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
        startDate: "Dec 2015",
        endDate: "May 2017",
    }
];

export function Experience() {
    return (
        <div className="m-auto justify-center bg-slate-900 py-5">
            <div className="bg-gray-700 text-sm p-1 rounded-xl w-[115px] m-auto text-center">Experience</div>
            <div className="text-center">Here is a quick summary of my most recent experiences:</div>
    
            {experiences.map((experience) => (
                    <ExperienceCard
                        startDate={experience.startDate}
                        endDate={experience.endDate}
                        listItems={experience.listItems}
                    />
                
            ))}
        </div>
    );
}

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
