import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { styles } from '../styles';

const HERO_SCENE_URL = 'https://prod.spline.design/nbKpwPyaEAt6gQ5E/scene.splinecode';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(121,82,255,0.18),transparent_42%),radial-gradient(circle_at_85%_20%,rgba(67,17,132,0.2),transparent_36%),#06060c]' />

      <div className='relative z-10 w-full h-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-8 pt-[120px]'>
        <div className='flex flex-row items-start gap-5'>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Antero</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I am a software developer with experience in web development
              <br className='sm:block hidden' />
              interfaces and web applications
            </p>
          </div>
        </div>

        <div className='relative w-full h-[40px] lg:h-[340px] rounded-2xl overflow-hidden bg-[radial-gradient(circle_at_25%_20%,rgba(121,82,255,0.26),rgba(8,8,14,0.7)_55%,rgba(6,6,10,1))] shadow-[0_20px_80px_rgba(94,45,160,0.35)]'>
          <div className='absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_35%,rgba(148,92,255,0.24),transparent_58%)]' />
          <Spline scene={HERO_SCENE_URL} />
        </div>
      </div>

      <div className='absolute xs:bottom-1 bottom-32 z-20 w-full flex justify-center items-center pointer-events-auto'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
