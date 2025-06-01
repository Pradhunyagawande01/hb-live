import React from "react";

const FancyButton = (props) => {
  const handleClickScroll = () => {
    const element = document.getElementById(props.id);
    if (props.id === "home") {
      document.documentElement.scroll({ top: 0, behavior: "smooth" });
    } else if (props.id === "register") {
      document.documentElement.scroll({ top: 0, behavior: "smooth" });
    }else if (props.id === "digitalswags") {
      window.open("/digitalswags", "_blank");
    }else if (props.id === "CTF") {
    } else if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      className="text-white bg-gradient-to-r from-green-800 via-green-800 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-700 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer"

      
      onClick={handleClickScroll}
    >
      {props.data}
    </button>
  );
};

export default FancyButton;