import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants/index,js'
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()} className='text-center'>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 mx-auto text-center text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Software Developer with 4+ years of experience building scalable web applications and enterprise systems. Specialized in .NET, Node.js, Angular, and React, with strong knowledge of microservices, cloud architecture, and modern frontend development. Experienced in AWS services such as Lambda, S3, and API Gateway, applying Clean Architecture, CQRS, OAuth 2.0, and OWASP security best practices. Passionate about developing high-performance solutions that improve scalability, automation, and user experience.
      </motion.p>
      {/* <div className='mt-20 flex flex-wrap gap-20' >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  )
}
export default SectionWrapper(About, "about");