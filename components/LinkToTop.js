import React from "react";
import Image from "next/image";

const LinkToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Image
      src="/HF-MIN.png"
      alt="logo"
      width={"63"}
      height={"65"}
      onClick={handleScrollToTop}
      className="cursor-pointer not-selectable flex w-12 h-12 object-cover z-50"
    />
  );
};

export default LinkToTop;
