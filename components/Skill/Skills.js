import Image from "next/image";

function SkillItem({ src, width, height, label }) {
    return (
        <div className="flex flex-col items-center text-lg mt-4">
            <div style={{ marginBottom: '8px' }}>
                <Image src={src} width={width} height={height} alt={label} />
            </div>
            <p className="text-xs">{label}</p>
        </div>
    );
}

export function Skills() {
    return (
        <div className=" flex flex-col justify-around px-28">
            <div className="bg-gray-700 text-sm rounded-xl w-[75px] m-auto text-center">Skills</div>
            <div className="text-center">The skills, tools, and technologies I am really good at:</div>
            <div className="grid grid-cols-8 mobile:grid grid-cols-3">
                <SkillItem src="/PP-pics/icon-javscript.svg" width={64} height={64} label="JavaScript" />
                <SkillItem src="/PP-pics/icon-typescript.svg" width={64} height={64} label="TypeScript" />
                <SkillItem src="/PP-pics/icon-react.svg" width={70} height={64} label="React" />
                <SkillItem src="/PP-pics/icon-nextjs.svg" width={64} height={64} label="Next.js" />
                <SkillItem src="/PP-pics/icon-nodejs.svg" width={56} height={64} label="Node.js" />
                <SkillItem src="/PP-pics/icon-express.svg" width={64} height={64} label="Express.js" />
                <SkillItem src="/PP-pics/icon-nest.svg" width={66} height={64} label="Nest.js" />
                <SkillItem src="/PP-pics/icon-socket.svg" width={64} height={64} label="Socket.io" />
                <SkillItem src="/PP-pics/icon-postgresql.svg" width={62} height={64} label="PostgreSQL" />
                <SkillItem src="/PP-pics/icon-mongodb.svg" width={30} height={64} label="MongoDB" />
                <SkillItem src="/PP-pics/icon-sass.svg" width={64} height={64} label="Sass/Scss" />
                <SkillItem src="/PP-pics/icon-tailwindcss.svg" width={105} height={64} label="Tailwindcss" />
                <SkillItem src="/PP-pics/icon-figma.svg" width={43} height={64} label="Figma" />
                <SkillItem src="/PP-pics/icon-cypress.svg" width={64} height={64} label="Cypress" />
                <SkillItem src="/PP-pics/icon-storybook.svg" width={64} height={64} label="Storybook" />
                <SkillItem src="/PP-pics/icon-git.svg" width={64} height={64} label="Git" />
            </div>
        </div>
    );
}

export default Skills;
