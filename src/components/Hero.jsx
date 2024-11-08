import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import landingImage from "../images/suit.png";
import SocialIcons from "./SocialIcons";
import { useEffect } from "react";

/**
 * Represents the hero section of the page.
 *
 * @component
 * @param {string} name - The name to be displayed in the hero section.
 */

const Hero = ({ name }) => {
  // Styles for various elements
  const styles = {
    // landingImage: {
    //   position: "absolute",
    //   bottom: "0",
    //   opacity: "0.3",
    //   mixBlendMode: "lighten",
    //   height: "80%",
    // },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "50",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "var(--text-color)",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
    },
  };
  useEffect(()=>{
    const orbit=()=>{
      const planets = document.querySelectorAll('.planet')
      const planets1 = document.querySelectorAll('.planet1')
  const p_radii = [24,35,40,40,40,40,40,40]
  let p_radians = new Array(7).fill(0)
  const p_velocities = [0.008,0.006,0.007,0.005,0.004,0.0055,0.0065]
  
  const p_orbits = document.querySelectorAll('.p-orbit')
  p_orbits.forEach((p_orbit,index)=>{
    p_orbit.style.height = `${p_radii[index]*2}vmin`
    p_orbit.style.width = `${p_radii[index]*2}vmin`
})
  
  setInterval(()=>{
    planets.forEach((planet,index)=>{
        planet.style.marginLeft = `${Math.cos(p_radians[index]) * 70}vmin`
        planet.style.marginTop = `${Math.sin(p_radians[index]) * 70}vmin`
        p_radians[index] += p_velocities[index] 
    })
  
  },1000/60)

  setInterval(()=>{
    planets1.forEach((planet,index)=>{
        planet.style.marginLeft = `${Math.cos(p_radians[index]) * 80}vmin`
        planet.style.marginTop = `${Math.sin(p_radians[index]) * 80}vmin`
        p_radians[index] += p_velocities[index] 
    })
  },1000/60)
    }
    orbit()
  },[])
  return (
    <>
        <div className="flex-1 flex flex-row justify-center items-center relative mb-[110px]">
        <div className="textContainer absolute z-30" style={styles.textContainer}>

        <motion.h1
          className="name font-extrabold"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0, duration: 0.5, type: "spring" }}
        >
          {name}
        </motion.h1>

        <motion.div
          className="description font-medium text-gray-400" 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, type: "spring" }}
        >
          <Typewriter
            className="description"
            options={{
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter.changeDelay(50).typeString("Software Engineer").start();
            }}
          />
        </motion.div>
      </div>
          <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,delay: 1, ease: "easeInOut" }} src="projectImages/python.png" className='w-12 h-12 absolute planet z-50 rounded-full p-2 bg-slate-100'/>
          <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,delay: 1, ease: "easeInOut" }} src="projectImages//react.png" className='w-12 h-12 absolute planet z-50 rounded-full p-2 bg-slate-100'/>
          <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,delay: 1, ease: "easeInOut" }} src="projectImages//mongodb.png" className='w-12 h-12 absolute planet z-50 rounded-full p-2 bg-slate-100'/>
          <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,delay: 1, ease: "easeInOut" }} src="projectImages//java.png" className='w-12 h-12 absolute planet z-50 rounded-full p-2 bg-slate-100'/>
          <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,delay: 1, ease: "easeInOut" }} src="projectImages//nodejs.png" className='w-12 h-12 absolute planet z-50 rounded-full p-2 bg-slate-100'/>
          <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,delay: 1, ease: "easeInOut" }} src="projectImages//tailwind.png"  className='w-12 h-12 absolute planet z-50 rounded-full p-2 bg-slate-100'/>
          <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,delay: 1, ease: "easeInOut" }} src="projectImages//git.png" className='w-12 h-12 absolute planet z-50 rounded-full p-2 bg-slate-100'/>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,delay: 1, ease: "easeInOut" }} className=' absolute planet1 z-50 rounded-full bg-slate-200'>😂</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,delay: 1, ease: "easeInOut" }} className=' absolute planet1 z-50 rounded-full  bg-slate-200'>😍</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,delay: 1, ease: "easeInOut" }} className=' absolute planet1 z-50 rounded-full  bg-slate-200'>❤️</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,delay: 1, ease: "easeInOut" }} className=' absolute planet1 z-50 rounded-full  bg-slate-200'>🤔</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,delay: 1, ease: "easeInOut" }} className=' absolute planet1 z-50 rounded-full bg-slate-200'>😯</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,delay: 1, ease: "easeInOut" }} className=' absolute planet1 z-50 rounded-full  bg-slate-200'>😎</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,delay: 1, ease: "easeInOut" }} className=' absolute planet1 z-50 rounded-full bg-slate-200'>😱</motion.p>

          <motion.div  className='p-orbit rounded-full bg-white z-30 absolute border-gray-400'style={{
             backgroundColor: "#131a22"
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.2, type: "spring" }} 
          ></motion.div>
          <motion.div className='p-orbit rounded-full bg-slate-300 absolute border-gray-400'  initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4, type: "spring" }} ></motion.div>
          <motion.div className='p-orbit rounded-full bg-transparent border-2 absolute border-gray-200'  initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6, type: "spring" }} ></motion.div>
        </div>  

      {/* Animated landing image */}
      {/* <div className="image-container">
        <motion.img
          className="landingImage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
          style={styles.landingImage}
          src={landingImage}
          alt="Michael Yeates"
        />
      </div> */}
      {/* Displaying social icons */}
      <motion.div >
        <SocialIcons />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut" }}>
        <a href="https://docs.google.com/document/d/1Jm7V2F8q5LQ6JunROyHiENcz3NhP1b-xSjRInpZumS8/edit?usp=sharing"><motion.button 
        initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5, type: "spring" }} 
          className="resumeButton font-medium text-white px-3 p-2 border-2 border-white rounded-xl z-50 flex flex-row items-center space-x-1">
           <p>Resume</p> <i class="fa fa-download" aria-hidden="true"></i>
        </motion.button></a>
      </motion.div>
    </>
  );
};

export default Hero;
