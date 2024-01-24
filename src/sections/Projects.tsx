import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/img/dpmptsp.jpg",
      projectName: "Website DPMPTSP",
      projectLink: "https://dpmptsp.pratama.tech",
      projectDescription:
        "This is the information system website of a regional agency in my area called dpmptsp.",
      projectTech: ["Laravel", "Bootstrap CSS", "MySQL"],
      projectExternalLinks: {
        github: "",
        externalLink: "https://dpmptsp.pratama.tech",
      },
    },
    {
      image: "/img/temp.jpg",
      projectName: "Templatenesia",
      projectLink: "https://templatenesia.com",
      projectDescription:
        "This is Website Templates, Plugins, and Graphics Digital Marketplace Best place to buy and sell digital products. created with Laravel and already uses the Ipaymu payment gateway which can make it easier for users to make transactions.",
      projectTech: [
        "Laravel",
        "Payment Gateaway",
        "Livewire",
        "Tailwind",
        "MySQL",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://templatenesia.com",
      },
    },
    {
      image: "/img/book.png",
      projectName: "Book Ecommerce",
      projectLink: "",
      projectDescription:
        "This is an e-book e-commerce website that provides various kinds of ebooks. This website was created with NextJS technology and also uses a payment gateway, namely MidTrans.",
      projectTech: ["Next", "Tailwind", "MySQL", "Payment Gateway"],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    {
      image: "/img/find.jpg",
      projectName: "Search  Github Person",
      projectLink: "find-person.vercel.app",
      projectDescription:
        "this is a small project that aims to consume api from github and on this website users can search for github users and can see their details, this website was created with next js and public github api I made a Netflix copy with TMBD Api. It has infinite scrolling and lets you watch movies by genre. You can also add movies to your favorites list.",
      projectTech: ["Next", "Tailwind", "API"],
      projectExternalLinks: {
        github: "",
        externalLink: "find-person.vercel.app",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    {/* <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li> */}
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
