import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
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
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hello! im Rizky Zaki, aka Zach. My journey into web development
            began in high school in 2021, marked by victories in provincial and
            district-level competitions. This success propelled me into the
            broader world of programming, where I started taking on freelance
            projects. Through hands-on experiences, Ive honed my skills and
            developed a deep passion for crafting digital solutions. Im excited
            about the continual growth and challenges in the dynamic field of
            web development.
          </p>
          <p className="about-grid-info-text">
            Fast-forward to today, I specialize in developing high-quality
            solutions that delight our clients and exceed their expectations at{" "}
            <Link
              href="https://pratamatechsolution.com"
              className="link"
              target="_blank"
            >
              PST.
            </Link>
          </p>

          <p className="about-grid-info-text">
            Im currently pursuing a bachelors degree in Information Systems at
            one of the top universities in Indonesia
          </p>
          <p className="about-grid-info-text">
            The campus is called&nbsp;
            <Link
              className="link"
              target="_blank"
              href="https://telkomuniversity.ac.id"
            >
              Telkom University,
            </Link>
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Vue.js</li>
            <li className="about-grid-info-list-item">Laravel</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Flutter</li>
            <li className="about-grid-info-list-item">Python</li>
            <li className="about-grid-info-list-item">Javascript</li>
            <li className="about-grid-info-list-item">PHP</li>
            <li className="about-grid-info-list-item">CSS Framework</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/img/myfoto.jpeg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
