"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Pixel Arcade",
    description: "",
    image: "https://zestebanz.github.io/my-gallery/public/img/projectos/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/zEstebanz/pixel-arcade-mongodb.git",
    previewUrl: "",
    docUrl: "https://docs.google.com/document/d/1PMzYSpLcjtN7fy9kQ1bZwXiEuCQWZYszcN49b00NCMk/edit?usp=sharing",
  },
  {
    id: 2,
    title: "MendoPleg",
    description: "",
    image: "https://zestebanz.github.io/my-gallery/public/img/projectos/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/zEstebanz/MendoPleg.git",
    previewUrl: "https://mendopleg.netlify.app/",
    docUrl: "",
  },
  {
    id: 3,
    title: "Diario-MK",
    description: "",
    image: "https://zestebanz.github.io/my-gallery/public/img/projectos/12.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/zEstebanz/Diario-MK",
    previewUrl: "https://diario-mk.vercel.app/",
    docUrl: "",
  },
  {
    id: 4,
    title: "Rick & Morty API",
    description: "",
    image: "https://zestebanz.github.io/my-gallery/public/img/projectos/5.png",
    tag: ["All", "Api"],
    gitUrl: "https://github.com/zEstebanz/Rick-Morty-API-in-ReactJS.git",
    previewUrl: "https://marvelous-lebkuchen-8fe5f7.netlify.app/",
    docUrl: "",
  },
  {
    id: 5,
    title: "Rutinas Gym",
    description: "",
    image: "https://zestebanz.github.io/my-gallery/public/img/projectos/9.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/zEstebanz/Training-Gym.git",
    previewUrl: "https://training-gym-system.netlify.app/",
    docUrl: "",
  },
  {
    id: 6,
    title: "Frontend Store",
    description: "",
    image: "https://zestebanz.github.io/my-gallery/public/img/projectos/3.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://frontend-store-70f6cc.netlify.app/",
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
  };

  return (
    <section id="projects" className="section-sec">
      <h2 className="text-center text-4xl font-bold text-white mb-8 md:mb-12">
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