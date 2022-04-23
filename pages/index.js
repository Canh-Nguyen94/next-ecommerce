import { useEffect, useCallback, useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
function Home() {
  const [scrollY, setScrollY] = useState();
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home">
      <div className="parallax">
        <img
          src="./stars.png"
          id="stars"
          style={{ left: `-${scrollY * 0.5}px` }}
        />
        <img
          src="./moon.png"
          id="moon"
          style={{ transform: `translateX(${scrollY * 1}px)` }}
        />
        <h1 style={{ transform: `translateX(-${scrollY * 2}px)` }}>WELCOME TO OUR SHOP</h1>
        <img
          src="./mountains_behind.png"
          id="mountains_behind"
          style={{ transform: `translateY(-${scrollY * 0.25}px)` }}
        />

        <img src="./mountains_front.png" id="mountains_front" />
      </div>
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


