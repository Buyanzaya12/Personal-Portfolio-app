import Image from "next/image"
export function Hero() {
    return (
    <div> 
        <div className="relative gap-4 web:flex web:flex-row-reverse">
            <div className="px-8 web:w-[320px]">
            <div className="bg-gray-700 w-[320px] aspect-[5/6] relative top-[10%] left-[10%] border-8 border-transparent relative"></div>
            <Image src="/PP-pics/Pic.jpg" alt="profile-pic" className="relative block border-8 border-transparent object-cover w-[320px] h-full  left bottom-[10%] right-[10%]" width={224} height={264}/>
            </div>
        </div>
        <div class="text-base">
            <div class="text-6xl font-bold">Hi, I'm Sagar 👋</div>
            <div className="">I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</div>
            <ul>
                <li class="flex"><img src="/PP-pics/Location.svg" className="mr-2" width={23} height={24}/>Ahmedabad, India</li>
                <li className="ml-6 list-disc marker:text-green-500"><span class="ml-2">Available for new projects</span></li>
                
            </ul>
            <div class="flex gap-1">
            <Image src="/PP-pics/Github.svg" width={24} height={24}/>
            <Image src="/PP-pics/Twitter.svg" width={24} height={24}/>
            <Image src="/PP-pics/Figma.svg" width={24} height={24}/>
            </div>
        </div>
        
    </div>
    )
}