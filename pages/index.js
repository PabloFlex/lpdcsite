import Head from 'next/head'
import NavBar from '../components/header/_NavBar'
import {motion} from 'framer-motion'
import { useState,useEffect } from 'react';
import Player from '../components/footer/player/Player';
import Mobile from '../components/Mobile/mobile';
import Footer from '../components/footer/Footer';
import React from 'react';
import { getCookie } from 'cookies-next';


export default function Home() {
  const [isClicked, setIsClicked] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState("flex")
  const toggle = () => setIsClicked(!isClicked);
  const [pathBg, setPathBg] = useState();
  useEffect(() => {
    setTimeout(() => {
      setLoadingScreen("none");
    }, 3400);
  }, []);

    const logoanim = {
        transform: isClicked ? "rotate(360deg)" : "rotate(0deg)",
    }
    const logotransi = {
      ease: isClicked ? "linear" : "", 
      duration: isClicked ? 10 : 0, 
      repeat: isClicked ? Infinity : 0 
    }

     const getData = async () => {
       try {
         const value = getCookie('background');
         if (value === "1"){
           setPathBg("/image/background/bg1Main.gif")
         } else if (value === "2") {
           setPathBg("/image/background/fd2.png")
         } else if (value === "3") {
           setPathBg("/image/background/fd2.gif")
         } else {
           setPathBg("/image/background/bg1Main.gif")
         }
       } catch (e) {
        }
     }
 
      useEffect(() => {
        const interval = setInterval(() => {
          getData()
        }, 1000);
        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
      }, [])
  return (
      <>
        <Head>
          <title>La Patate Douce</title>
          <meta name = "description"
          content = "La Patate Douce est une webradio indépendante fournisseuse de pépites Disco-Funk Groovy, Afro-Soul & House." />
          <meta name = "image" property='og:image' content = "https://lapatatedouceradio.com/image/preview.png"/>
          <link rel="icon" href="/favicon.ico" />
        </Head>
         <div className='pc'>
           <img src={pathBg} alt='bg' className='videoBackground'></img>
           <div style={{height:"100vh", width:'100%',position:'absolute',zIndex:10000,backgroundColor: '#481121',alignItems:'center',justifyContent:"center",display:loadingScreen}}>
            <video autoPlay loop muted style = {{width: '100%',height:'100%',objectFit:'cover'}}
            src = '/video/videobig.mp4' >
              {/* <source src='/video/videobig.mp4'></source> */}
            </video>
          </div>
          <div className = 'blocLogo'>
            <motion.img src='/image/logo.png' alt='logo' style={{height:'100%', width:'100%'}} animate={logoanim} transition={logotransi}></motion.img>
            <button onClick={toggle} className="surprise"/>
          </div>
          <NavBar/>
          <Player/>
          <Footer/>
        </div>
        <div className='mobile'>
          <Mobile/>
        </div>
      </>
  )
}
