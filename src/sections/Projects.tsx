import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/img/belli.png",
      projectName: "Website Belli",
      projectLink: "https://belli.ai",
      projectDescription:
        "making what was previously a figma into a clickable prototype, and other logic",
      projectTech: ["Nextjs", "Figma", "RadixUI", "ShadCN"],
      projectExternalLinks: {
        github: "",
        externalLink: "https://belli.ai",
      },
    },
    {
      image: "/img/android-kejari.png",
      projectName: "Android Kejari Purwakarta",
      projectLink:
        "https://play.google.com/store/apps/details?id=id.co.pratamatechsolution.kejari&hl=id&gl=US",
      projectDescription:
        "Kejari Android is the mobile version of the Purwakarta State Prosecutor's Office website which contains a lot of information and services",
      projectTech: ["Flutter", "Dart", "RestAPI"],
      projectExternalLinks: {
        github: "",
        externalLink:
          "https://play.google.com/store/apps/details?id=id.co.pratamatechsolution.kejari&hl=id&gl=US",
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
