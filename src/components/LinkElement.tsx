import React from "react";
import Link from "next/link";

function LinkElement({ label, url }) {
  return (
    <>
      <Link href={url}>
        <p
          className="relative text-xl flex items-center justify-center hover:text-gl ease-in-out duration-200 
              after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-gl 
              after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
        >
          {label}
        </p>
      </Link>
    </>
  );
}

export default LinkElement;
