import Image from "next/image"
export function About() {
    return <div class="bg-slate-900 px-28">
        <div class="bg-gray-700 text-sm p-1 rounded-xl w-[105px] m-auto text-center">About me</div>
        <div class="grid grid-cols-2 flex">
        <div className="mt-20">
            <div className="absolute bg-gray-700 w-[304px] h-[344px] border-8 border-transparent"></div>
            <Image src="/PP-pics/Full-pose.jpg" alt="profile-pic" className="border-[4px] relative  h-[360px] border-slate-900 mx-3 bottom-7" width={280} height={360}/>
        </div>
        <div>
            <div class="text-[30px]">Curious about me? Here you have it:</div>
            <div>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</div>
            <br></br>
            <div>I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</div>
            <br></br>
            <div>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</div>
            <br></br>
            <div>When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</div>
            <br></br>
            <div>Finally, some quick bits about me.</div>
            <br></br>
            <div class="flex ml-3">
                
                <ul class="list-disc marker:text-white">
                    <li>B.E. in Computer Engineering</li>
                    <li>Full time freelancer</li>
                </ul>
               
                <ul class="list-disc marker:text-white ml-8">
                    <li>Avid learner</li>
                    <li>Aspiring indie hacker</li>
                </ul>
                </div>
                <br></br>
            <div>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</div>
            
            </div>
    </div>
        </div>
}