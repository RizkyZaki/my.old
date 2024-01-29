import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { ProjectData } from "@/libs/projectData";
interface OtherProps {
  projectsData: ProjectData[];
  numProjectsToDisplay: number;
  titlePage: string;
  tagHref: boolean;
}
const Other: React.FC<OtherProps> = ({
  projectsData,
  numProjectsToDisplay,
  tagHref,
  titlePage,
}) => {
  const displayedProjects = projectsData.slice(0, numProjectsToDisplay);

  return (
    <>
      <div className="otherProjects" id="otherP">
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
          <h2>{titlePage}</h2>
          <motion.div
            className="nav-items-button"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.6,
            }}
          >
            {tagHref && <Button text="See Archive" link="archive" />}
          </motion.div>
        </motion.div>

        <div className="projectsGrid">
          {displayedProjects.map((project, index) => (
            <div className="card" key={index}>
              <div className="card-image">
                <Image
                  src={project.image}
                  alt={project.projectName}
                  fill
                  quality={100}
                />
              </div>
              <div className="card-body">
                <div className="card-body-title">
                  <h3>{project.projectName}</h3>
                </div>
                <p>{project.projectDescription}</p>
                <p>Tech Stack : {project.projectTech.join(", ")}</p>
              </div>
              <div className="card-footer">
                {project.projectLink && (
                  <Button text="See..." link={project.projectLink} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Other;
