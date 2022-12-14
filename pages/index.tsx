import Head from 'next/head'
import React from 'react';
import Button from './button';
import styles from '../styles/Home.module.css'
import { ButtonProps } from '../types/types';
import { faGithub, faInstagram, faMastodon  } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


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

export default function Home() {

  return (
    <>
      <Head>
        <title>tbrowne.me</title>
        <meta name="description" content="Hello, I'm Tom" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className={styles.body}>
          <div className={styles.largeText}>
            <div className={styles.whiteText}>Hello, I&apos;m</div>
            <div className={styles.greenText}>Tom</div>
          </div>
          <div className={styles.smallText}>
            I write code and design things sometimes
          </div>
          <div className={styles.buttonContainer}>
          {...buttonContent.map((b, i) => <Button key={i} content={b.content} destination={b.destination} icon={b.icon}/>)}
        </div>
        </div>

      </main>
    </>
  )
}
