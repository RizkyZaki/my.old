import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "PST",
      role: "Software Engineer",
      url: "https://www.pratamatechsolution.com",
      start: "May 2023",
      end: "Present",
      shortDescription: [
        "Developing web and mobile applications within a team environment.",
        "Utilizing expertise in both front-end and back-end development.",
        "Employing coding, testing, and debugging skills to ensure software quality.",
        "Contributing to the optimization and maintenance of software applications.",
        "Adhering to industry best practices and staying updated on technological advancements.",
        "Collaborating with clients to understand and implement specific software requirements.",
      ],
    },
    {
      name: "Freelance",
      role: "Web Developer",
      url: "https://www.zach.my.id",
      start: "December 2022",
      end: "Present",
      shortDescription: [
        "Undertakes independent tasks in web development and application design.",
        "Collaborates with clients to create tailored digital solutions.",
        "Applies creativity and problem-solving skills to each assignment.",
        "Proficient in both front-end and back-end development.",
        "Delivers high-quality products adhering to industry standards.",
      ],
    },
    {
      name: "Achievement",
      role: "1st Place LKS SMK ",
      url: "https://www.zach.my.id",
      start: "Jun 2022",
      end: "Jun 2022",
      shortDescription: [
        "1st place in the district level Web Technologies Competition held by the West Java Province Region IV Education Office Branch on June 14 - June 16 2022.",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
