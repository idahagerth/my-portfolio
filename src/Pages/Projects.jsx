import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import ProjectCard from "../Components/ProjectCard";
import ProjectList from "./ProjectList";

function Projects({ isMobile }) {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#4f5d75",
        paddingTop: isMobile ? "2%" : null,
        paddingBottom: isMobile ? "5%" : "5%",
      }}
    >
      <motion.div
        initial={{ y: "+100%", opacity: 0 }}
        animate={{ y: 1, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeIn",
          type: "spring",
        }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          paddingLeft: isMobile ? "0%" : "5%",
          paddingRight: isMobile ? "0%" : "5%",
        }}
      >
        {ProjectList.map(
          ({ image, title, description, link, github, badges }, index) => {
            return (
              <>
                <ProjectCard
                  key={index}
                  isMobile={isMobile}
                  image={image}
                  title={title}
                  description={description}
                  link={link}
                  github={github}
                  badges={badges}
                />
              </>
            );
          }
        )}
      </motion.div>
    </div>
  );
}

Projects.propTypes = {
  isMobile: PropTypes.bool,
};

export default Projects;
