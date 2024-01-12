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
    previewUrl: "/",
  },
  {
    id: 2,
    title: "MendoPleg",
    description: "",
    image: "https://zestebanz.github.io/my-gallery/public/img/projectos/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Diario-MK",
    description: "",
    image: "https://zestebanz.github.io/my-gallery/public/img/projectos/12.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://diario-mk.vercel.app/",
  },
  {
    id: 4,
    title: "Rick & Morty API",
    description: "",
    image: "https://zestebanz.github.io/my-gallery/public/img/projectos/5.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://marvelous-lebkuchen-8fe5f7.netlify.app/",
  },
  {
    id: 5,
    title: "Rutinas Gym",
    description: "",
    image: "https://zestebanz.github.io/my-gallery/public/img/projectos/9.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Frontend Store",
    description: "",
    image: "https://zestebanz.github.io/my-gallery/public/img/projectos/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://frontend-store-70f6cc.netlify.app/",
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
    <section id="projects" className="section-about">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
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
          name="Mobile"
          isSelected={tag === "Mobile"}
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
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;