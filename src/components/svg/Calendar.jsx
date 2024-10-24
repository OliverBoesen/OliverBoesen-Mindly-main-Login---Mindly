import { motion } from "framer-motion";
import { useState } from "react";

const Calendar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24.99 26.82"
      onClick={handleClick}
      initial={{ fill: "none", stroke: "#231f20" }}
      animate={{
        fill: isClicked ? "#000000" : "none", // Black fill when clicked, none when not
        stroke: isClicked ? "#ffffff" : "#231f20", // White stroke when clicked, original when not
      }}
      transition={{ duration: 0.7 }}
    >
      <motion.rect
        x="0.5"
        y="2.34"
        width="23.99"
        height="23.97"
        rx="4.58"
        ry="4.58"
        style={{
          strokeMiterlimit: 10,
        }}
      />
      <motion.line
        x1="0.5"
        y1="9.63"
        x2="24.49"
        y2="9.63"
        style={{
          strokeMiterlimit: 10,
        }}
      />
      <motion.line
        x1="12.5"
        y1="0"
        x2="12.5"
        y2="4.69"
        style={{
          strokeMiterlimit: 10,
        }}
      />
      <motion.line
        x1="7.72"
        y1="0"
        x2="7.72"
        y2="4.69"
        style={{
          strokeMiterlimit: 10,
        }}
      />
      <motion.line
        x1="17.3"
        y1="0"
        x2="17.3"
        y2="4.69"
        style={{
          strokeMiterlimit: 10,
        }}
      />
      <motion.rect
        x="10.83"
        y="12.68"
        width="3.33"
        height="2.89"
        rx="0.83"
        ry="0.83"
        style={{
          strokeMiterlimit: 10,
        }}
      />
      <motion.rect
        x="17.3"
        y="12.75"
        width="3.33"
        height="2.89"
        rx="0.83"
        ry="0.83"
        style={{
          strokeMiterlimit: 10,
        }}
      />
      <motion.rect
        x="4.39"
        y="12.68"
        width="3.33"
        height="2.89"
        rx="0.83"
        ry="0.83"
        style={{
          strokeMiterlimit: 10,
        }}
      />
    </motion.svg>
  );
};

export default Calendar;