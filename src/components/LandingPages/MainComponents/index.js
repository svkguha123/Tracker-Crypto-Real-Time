import React from 'react';
import "./style.css";
import Button from '../../Common/Button';
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.png";
import { motion } from 'framer-motion';
import { RWebShare } from 'react-web-share';



const MainComponent = () => {
  return (
   
      <div className='flex-info'>

        <div className='left-container'>

          <motion.h1
            className='track-crypto-heading'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Track Crypto
          </motion.h1>

          <motion.h1
            className='real-time-heading'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Real Time.
          </motion.h1>

          <motion.p
            className='info-text'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Track crypto through a public api in real time. Visit the dashboard to do so!
          </motion.p>

          <motion.div
            className='btn-flex'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <a href="/dashboard">
              <Button text={"Dashboard"} />
            </a>
            <RWebShare
              data={{
                text: "CryptoTracker, made using React JS.",
                url: "#",
                title: "CryptoTracker.",
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <Button text="Share" outlined={true} />
            </RWebShare>
          </motion.div>

        </div>

        <div className='right-container'>
          <motion.img src={iphone}
            className='iphone'
            initial={{ y: -20 }}
            animate={{ y: 30 }}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 3,
              repeat: Infinity
            }}
          />
          <img src={gradient} className='gradient' />
        </div>

      </div>

      


    
  )
}

export default MainComponent;