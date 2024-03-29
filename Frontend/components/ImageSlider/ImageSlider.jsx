import { useState } from "react";
import { motion} from "framer-motion";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { ChevronRight,ChevronLeft } from 'lucide-react';
// import ctf from "../../src/assets/cctv.jpg";
import group from "/avsol.svg";
import group1 from "/cctv1.svg";
import poster from "/fire1.svg";
// import sec from "../../src/assets/sec.jpg";
import sha from "/sha.svg";
// import ucs from "../../src/assets/ucs.jpg";
import server from "/server2.svg";


const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(images.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === images.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const images = [sha, group, group1, poster,server];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  return (
    <>
      <div className="overflow-hidden mt-10 md:hidden relative w-[90%] h-[60vh] rounded-lg mx-auto mb-3">
        <div
          className="flex transition ease-out duration-40 w-full h-full"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {images.map((s) => {
            return (
              <img
                src={s}
                className="h-full w-full object-cover object-center"
              />
            );
          })}
        </div>

        <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
          <button onClick={previousSlide}>
            <BsFillArrowLeftCircleFill />
          </button>
          <button onClick={nextSlide}>
            <BsFillArrowRightCircleFill />
          </button>
        </div>

        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
          {images.map((s, i) => {
            return (
              <div
                onClick={() => {
                  setCurrent(i);
                }}
                key={"circle" + i}
                className={`rounded-full w-5 h-5 cursor-pointer  ${
                  i == current ? "bg-white" : "bg-gray-500"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
      <motion.div className="hidden md:flex items-center  flex-col justify-start pt-10 h-[80vh]">
        {images.map((image, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            key={index}
            className="rounded-xl overflow-hidden h-[50%]"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.8 }}
            style={{ width: "45%", position: "absolute" }}
          >
            <img src={image} alt="photos" />
          </motion.div>
        ))}
        <div className="flex flex-row gap-3  mt-12">
          <button
            className="mt-[400px] font-benderregular text-[#084c98] border-2 border-solid border-[#084c98] rounded-md py-2 px-4"
            onClick={handleBack}
          >
            <ChevronLeft></ChevronLeft>
          </button>
          <button
            className=" mt-[400px] font-benderregular border-2 border-solid border-[#084c98]  text-[#084c98] rounded-md py-2 px-4"
            onClick={handleNext}
          >
           <ChevronRight></ChevronRight>
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default ImageSlider;
