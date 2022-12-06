import React, { useState } from 'react'
import { images } from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  let navbaarItems = ["Home", "About", "Testimonial", "Work", "Skills", "Contact"]
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logoImage  " />
      </div> 

      <ul className='app__navbar-links'>
        
          {
            navbaarItems.map( (item) => (
              <li className='app__flex p-text ' key={`link-${item}`}>
                <div />
                <a href={`#${item}`}>{item}</a>
              </li>
            ))
          }
      </ul>
        
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)}/>

        {
          toggle && (
            <motion.div
            whileInView={{ x:[300, 0] }}
            transition= {{ duration: 0.85, ease: 'easeInOut'}}
            > 

            <HiX onClick={() => setToggle(true)} />
        
            <ul >
                {
                  navbaarItems.map( (item) => (
                    <li   key={item}>
                      <a href={`#${item}`} onClick={() => setToggle(true)} >{item}</a>
                    </li>
                  ))
                }
            </ul>
            

            </motion.div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar