"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { title } from "process";
const projectsData = [
  {
    title: 'Ubuntu-Semillero-Móvil',
    tools: 'React.js | Material Ui',
    description: 'Trabajé en este proyecto, centrado en desarrollar y gestionar herramientas financieras para conectar inversores con proyectos de impacto. Como miembro del equipo de frontend, contribuí al desarrollo de la plataforma hasta alcanzar el MVP (Producto Mínimo Viable).',
    image: "https://raw.githubusercontent.com/zEstebanz/my-gallery/e578e072443971421f39c7f46610cb3dbf57f08b/public/img/projectos/14.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/zEstebanz/Ubuntu-Semillero.git",
    previewUrl: "https://ubuntu-semillero.vercel.app/",
    docUrl: "",
  },
  {
    title: "Blog Peronal",
    tools: "Next.js | Tailwind CSS",
    description: "Este es un sitio web diseñado para compartir artículos y contenido de interés personal. Con una interfaz fácil de usar y un diseño atractivo, el blog invita a los usuarios a explorar una variedad de temas que son importantes para mí.",
    image: "https://raw.githubusercontent.com/zEstebanz/my-gallery/6dea10ccb834524ca34f45207737b9e6662d0615/public/img/projectos/blog.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/zEstebanz/Diario-MK",
    previewUrl: "https://diario-mk.vercel.app/",
    docUrl: "",
  },
  {
    title: "MendoPleg",
    tools: "HTML 5 | Bootstrap | JS",
    description: "Este Sitio Web de Mendopleg es un proyecto de renovación diseñado específicamente para una empresa metalúrgica ubicada en Mendoza. El objetivo del proyecto era modernizar y actualizar su sitio web existente, que se había vuelto obsoleto.",
    image: "https://zestebanz.github.io/my-gallery/public/img/projectos/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/zEstebanz/MendoPleg.git",
    previewUrl: "https://mendopleg.netlify.app/",
    docUrl: "",
  },
  {
    title: "Pixel Aventure - Game",
    tools: "Unity 2D | C Sharp | En desarrollo",
    description: "Es un proyecto en desarrollo utilizando Unity 2D. Diseñado con el propósito principal de aprender el motor gráfico Unity, así como el lenguaje de programación C#, este juego está siendo desarrollado como parte del trabajo final para una materia de Arquitectura y Diseño de Interfaces en mi carrera universitaria.",
    image: "https://img.itch.zone/aW1hZ2UvNDkwODA3LzI1NDU5OTEuZ2lm/original/ElqZhb.gif",
    tag: ["All", "Unity"],
    gitUrl: "",
    previewUrl: "https://esteban-oller.itch.io/pixel-aventure",
    docUrl: "",
  },
  {
    title: "FavPage",
    tools: "Next.js | Tailwind CSS",
    description: "FavPage busca facilitar la búsqueda y organización de recursos en línea relevantes para la comunidad de desarrolladores de software.",
    image: "https://raw.githubusercontent.com/zEstebanz/portafolio-oller-nextjs/main/public/img/FavPage.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/zEstebanz/FavPage.git",
    previewUrl: "https://fav-page-one.vercel.app/",
    docUrl: "",
  },
  {
    title: "Pixel Arcade",
    tools: "Next.js | MongoDB | Tailwind CSS",
    description: "Pixel Arcade es un proyecto desarrollado como parte de la materia de modelado de software, con el objetivo de crear un sistema de gestión integral para un arcade físico de juegos. Este sistema permite administrar todas las actividades relacionadas con la operación del arcade, incluyendo el registro de usuarios, la gestión de turnos y el control de equipos disponibles.",
    image: "https://zestebanz.github.io/my-gallery/public/img/projectos/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/zEstebanz/pixel-arcade-mongodb.git",
    previewUrl: "https://pixel-arcade-46i4ia5em-zestebanzs-projects.vercel.app/",
    docUrl: "https://docs.google.com/document/d/1PMzYSpLcjtN7fy9kQ1bZwXiEuCQWZYszcN49b00NCMk/edit?usp=sharing",
  },
  {
    title: "API R&M",
    tools: "Next.js | Tailwind CSS",
    image: "https://raw.githubusercontent.com/zEstebanz/portafolio-oller-nextjs/main/public/img/projects/react-api-nextjs.png",
    tag: ["All", "Api"],
    gitUrl: "https://github.com/zEstebanz/rick---morty-api-nextjs.git",
    previewUrl: "https://rick-and-morty-api-khaki.vercel.app/",
    docUrl: "",
  },
  {
    title: "Rutinas Gym",
    tools: "HTML | SCSS",
    image: "https://zestebanz.github.io/my-gallery/public/img/projectos/9.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/zEstebanz/Training-Gym.git",
    previewUrl: "https://training-gym-system.netlify.app/",
    docUrl: "",
  },
  {
    title: "Frontend Store",
    tools: "HTML | CSS",
    image: "https://zestebanz.github.io/my-gallery/public/img/projectos/3.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://frontend-store-70f6cc.netlify.app/",
    docUrl: "",
  },
  // {
  //   title: "API R&M",
  //   tools: "React.js | CSS",
  //   image: "https://zestebanz.github.io/my-gallery/public/img/projectos/5.png",
  //   tag: ["All", "Api"],
  //   gitUrl: "https://github.com/zEstebanz/Rick-Morty-API-in-ReactJS.git",
  //   previewUrl: "https://marvelous-lebkuchen-8fe5f7.netlify.app/",
  //   docUrl: "",
  // },
  // {
  //   title: "API Star Wars",
  //   tools: "Next.js | Tailwind CSS",
  //   image: "https://zestebanz.github.io/my-gallery/public/img/projectos/15.png",
  //   tag: ["All", "Api"],
  //   gitUrl: "https://github.com/zEstebanz/star-wars-api.git",
  //   previewUrl: "https://star-wars-api-omega.vercel.app/",
  //   docUrl: "",
  // },
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
        <ProjectTag
          onClick={handleTagChange}
          name="Unity"
          isSelected={tag === "Unity"}
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
              tools={project.tools}
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