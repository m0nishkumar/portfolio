import { useEffect, useRef } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import PageHeader from "../../../components/PageHeader";
import PageNotFound from "../../404/PageNotFound";
import Button from "../../../components/Button";
import Image from "../../../components/Image";
import projects from "../../../_data/projects.json";
import ReactPlayer from 'react-player';
import Footer from "../../../components/Footer";
import ImageSlideshow from "./SlideShow"

/**
 * Represents the ProjectDetails page component.
 * Displays details of a specific project.
 *
 * @component
 */

const ProjectDetails = () => {
  // Get the current location using React Router's useLocation hook
  const location = useLocation();
  const playerRef = useRef(null);
  // Scroll to the top of the page when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Get the project title from the route parameters
  const { projectTitle } = useParams();

  // Find the project in the data using the title
  const project = projects.find((project) => project.title.toLowerCase() === projectTitle);

  // If the project is not found, display the PageNotFound component
  if (!project) {
    return <PageNotFound />;
  }


  return (
    <>
      <main className="container portfolio">
        {/* Display the page header with project title and description */}
        <PageHeader title={project.title} description={project.description} />
        <div className="projectDetails">
          <div className="projectContainer">
            <div className=" projectImage">
              {/* Display the project image */}
              {/* <Image src={project.image2} alt={project.name} opacity="0.5" /> */}
              <div className="MobileView1">
              {project.image3!="" ? 
              (
    <ReactPlayer ref={playerRef} url={project.image3} controls={true} width="100%" height="100%" />
  ) : (
    <ImageSlideshow images={project.slideShow}/>
  )}
              </div>
            </div>
            <div className="w-full MobileView2">
              <div className="tech">
                {/* Display project technologies with animation */}
                {project.technologies.map((technology, i) => (
                  <motion.span
                    key={i}
                    className="technology"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: "easeInOut" }}
                  >
                    {technology + " "}
                  </motion.span>
                ))}
              </div>

              <div className="projectBody">
                {/* Display project body paragraphs with animation */}
                {project.body.split("\n").map((paragraph, i) => (
                  <motion.p
                    className="paragraph"
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.3, ease: "easeInOut" }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {/* Display buttons with animation */}
              <motion.div
                style={{ display: "flex", gap: "10px" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: project.body.split("\n").length * 0.3 }}
              >
                <a href={project.github}>
                  <Button name="View Code" />
                </a>
                {/* <a href={project.deployed}>
                  <Button name="View Site" />
                </a> */}
                <Link to="/projects">
                  <Button name="Go Back" color="var(--hl2-color)" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetails;
