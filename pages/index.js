import { useEffect, useCallback, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { FaArrowRight } from "react-icons/fa";
import { useScroll } from "../context/ScrollContext";
import { motion } from "framer-motion";
import { fadeInDown, staggerVariants } from "../motion/pageTransition";

function Home() {
  const { scrollY } = useScroll();
  return (
    <div className="home">
      <Head>
        <title>Moon dust</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <motion.div
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
        className="parallax"
      >
        <motion.img
          variants={fadeInDown}
          src="./stars.png"
          id="stars"
          style={{ left: `-${scrollY * 0.5}px` }}
        />
        <motion.img
          variants={fadeInDown}
          src="./moon.png"
          id="moon"
          style={{ left: `${scrollY * 1}px` }}
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: [0,1,0],transition:{delay:2,duration:2} }}
          
        >
          WELCOME TO OUR SHOP
        </motion.h1>
        <motion.img
          variants={fadeInDown}
          src="./mountains_behind.png"
          id="mountains_behind"
          style={{ transform: `translateY(-${scrollY * 0.25}px)` }}
        />

        <motion.img
          variants={fadeInDown}
          src="./mountains_front.png"
          id="mountains_front"
        />
      </motion.div>
      <div>
        <Link href="./products" className="home-button" passHref>
          <button className="button-red">
            Go to shop <FaArrowRight className="icon-red" />{" "}
          </button>
        </Link>
        <button className="button-red" id="thisButton">
          Show some text
        </button>
      </div>
    </div>
  );
}
export default Home;
