import Head from 'next/head'
import React from 'react';
import Button from './button';
import styles from '../styles/Home.module.css'
import { ButtonProps } from '../types/types';
import { faGithub, faInstagram, faMastodon  } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { motion } from 'framer-motion';

const buttonContent: ButtonProps[] = [
  {
    destination: 'https://mstdn.plus/@tom',
    content: 'Mastodon',
    icon: faMastodon,
  },
  {
    destination: 'https://www.instagram.com/browniesnlimonata/',
    content: 'Instagram',
    icon: faInstagram
  },
  {
    destination: 'https://github.com/t-browne/',
    content: 'Github',
    icon: faGithub
  },
  {
    destination: 'mailto:hello@tbrowne.me',
    content: 'Email',
    icon: faEnvelope
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 150 }
  }
};

export default function Home() {

  return (
    <>
      <Head>
        <title>tbrowne.me</title>
        <meta name="description" content="Hello, I'm Tom" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        
        <motion.div 
          className={styles.body}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          <motion.div className={styles.largeText} variants={itemVariants}>
            <div className={styles.whiteText}>Hello, I&apos;m</div>
            <div className={styles.greenText}>Tom</div>
          </motion.div>
          
          <motion.div className={styles.smallText} variants={itemVariants}>
            I write code and design things sometimes
          </motion.div>
          
          <div className={styles.buttonContainer}>
            {buttonContent.map((b, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Button content={b.content} destination={b.destination} icon={b.icon}/>
              </motion.div>
            ))}
          </div>

        </motion.div>

      </main>
    </>
  )
}