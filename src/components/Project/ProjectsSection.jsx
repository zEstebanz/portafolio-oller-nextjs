"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { title } from "process";
const projectsData = [
  {
    id: 0,
    title: 'Ubuntu-Semillero (ver en móvil)',
    description: 'React.js | Material Ui',
    image: "https://raw.githubusercontent.com/zEstebanz/my-gallery/e578e072443971421f39c7f46610cb3dbf57f08b/public/img/projectos/14.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/zEstebanz/Ubuntu-Semillero.git",
    previewUrl: "https://ubuntu-semillero.vercel.app/",
    docUrl: "",
  },
  {
    id: 3,
    title: "Blog Peronal",
    description: "Next.js | Tailwind CSS",
    image: "https://raw.githubusercontent.com/zEstebanz/my-gallery/6dea10ccb834524ca34f45207737b9e6662d0615/public/img/projectos/blog.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/zEstebanz/Diario-MK",
    previewUrl: "https://diario-mk.vercel.app/",
    docUrl: "",
  },
  {
    id: 2,
    title: "MendoPleg",
    description: "HTML 5 | Bootstrap | JS",
    image: "https://zestebanz.github.io/my-gallery/public/img/projectos/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/zEstebanz/MendoPleg.git",
    previewUrl: "https://mendopleg.netlify.app/",
    docUrl: "",
  },
  {
    id: 1,
    title: "Pixel Arcade",
    description: "Next.js | MongoDB | Tailwind CSS",
    image: "https://zestebanz.github.io/my-gallery/public/img/projectos/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/zEstebanz/pixel-arcade-mongodb.git",
    previewUrl: "https://pixel-arcade-qmgbj7m7s-zestebanzs-projects.vercel.app/",
    docUrl: "https://docs.google.com/document/d/1PMzYSpLcjtN7fy9kQ1bZwXiEuCQWZYszcN49b00NCMk/edit?usp=sharing",
  },
  {
    id: 4,
    title: "API R&M",
    description: "Next.js | Tailwind CSS",
    image: "https://raw.githubusercontent.com/zEstebanz/portafolio-oller-nextjs/main/public/img/projects/react-api-nextjs.png",
    tag: ["All", "Api"],
    gitUrl: "https://github.com/zEstebanz/rick---morty-api-nextjs.git",
    previewUrl: "https://rick-and-morty-api-khaki.vercel.app/",
    docUrl: "",
  },
  {
    id: 5,
    title: "Rutinas Gym",
    description: "HTML | SCSS",
    image: "https://zestebanz.github.io/my-gallery/public/img/projectos/9.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/zEstebanz/Training-Gym.git",
    previewUrl: "https://training-gym-system.netlify.app/",
    docUrl: "",
  },
  {
    id: 6,
    title: "Frontend Store",
    description: "HTML | CSS",
    image: "https://zestebanz.github.io/my-gallery/public/img/projectos/3.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://frontend-store-70f6cc.netlify.app/",
    docUrl: "",
  },
  {
    id: 7,
    title: "API R&M",
    description: "React.js | CSS",
    image: "https://zestebanz.github.io/my-gallery/public/img/projectos/5.png",
    tag: ["All", "Api"],
    gitUrl: "https://github.com/zEstebanz/Rick-Morty-API-in-ReactJS.git",
    previewUrl: "https://marvelous-lebkuchen-8fe5f7.netlify.app/",
    docUrl: "",
  },
  {
    id: 8,
    title: "API Star Wars",
    description: "Next.js | Tailwind CSS",
    image: "https://zestebanz.github.io/my-gallery/public/img/projectos/15.png",
    tag: ["All", "Api"],
    gitUrl: "https://github.com/zEstebanz/star-wars-api.git",
    previewUrl: "https://star-wars-api-omega.vercel.app/",
    docUrl: "",
  },
  {
    id: 9,
    title: "FavPage",
    description: "Next.js | Tailwind CSS",
    image: "https://raw.githubusercontent.com/zEstebanz/portafolio-oller-nextjs/main/public/img/FavPage.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/zEstebanz/FavPage.git",
    previewUrl: "https://fav-page-one.vercel.app/",
    docUrl: "",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    mobile: { y: 0, opacity: 1 }, // Variante específica para móviles
  };

  return (
    <section id="projects" className="section-sec">
      <h2 className="text-center text-4xl font-bold text-white mb-2">
        Mis Proyectos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Api"
          isSelected={tag === "Api"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            className="mobile-card-variant" // Clase para aplicar la variante móvil
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              docUrl={project.docUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;