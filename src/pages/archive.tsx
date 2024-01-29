import Head from "next/head";
import Email from "@/components/Email";
import SocialIcons from "@/components/SocialIcons";
import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";
import React, { useState } from "react";
import OtherProjects from "@/sections/Other";
import otherProjectsData, { ProjectData } from "@/libs/projectData";

function archive() {
  const numProjectsToDisplay = otherProjectsData.length;
  return (
    <div className="app">
      <Head>
        <title>Archive</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <>
        <Navbar />
        <SocialIcons />
        <Email />
        <main>
          <OtherProjects
            titlePage={"Archive Projects"}
            tagHref={false}
            projectsData={otherProjectsData}
            numProjectsToDisplay={numProjectsToDisplay}
          />
        </main>
        <Footer />
      </>
    </div>
  );
}

export default archive;
