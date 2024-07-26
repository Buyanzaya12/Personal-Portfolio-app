import Image from "next/image";

const works = [
  {
    title: "Fiskil",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
    link: "/",
  },
  {
    title: "Fiskil",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
    link: "/",
  },
  {
    title: "Fiskil",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
    link: "/",
  },
];

export function Work() {
  return (
    <div className="mx-auto">
      <div className="flex justify-center">
        <Tag name="Work" />
      </div>
      <div className="mb-10 text-center">
        Some of the noteworthy projects I have built:
      </div>

      {works.map((work, index) => (
        <WorkCard key={work.title} work={work} isReverse={index % 2 === 1} />
      ))}
    </div>
  );
}
function WorkCard({ isReverse = false, work }) {
  return (
    <div
      className={`mb-4 shadow rounded-xl ${
        isReverse ? "mobile: flex-row-reverse" : ""
      }`}
    >
    
      <div className="web:flex-1 bg-gray-700 p-12">
        <Image
          src="/PP-pics/Fiskil-project.jpg"
          width={480}
          height={384}
          className="w-full rounded-lg shadow"
        />
      </div>
      <div className="web:flex-1 bg-gray-900 p-12">
        <div className="mb-2 font-bold">{work.title}</div>
        <div className="mb-2">{work.desc}</div>
        <div className="flex flex-wrap gap-2">
          {work.tags.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </div>
        <Image src="/PP-pics/go-to.svg" width={24} height={24} />
      </div>
    </div>
  );
}

function Tag({ name }) {
  return <div className="px-4 rounded-xl bg-gray-700">{name}</div>;
}