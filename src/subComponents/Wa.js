import React, { useEffect } from "react";

const Wa = () => {
  useEffect(() => {
    window.location.href = "https://api.whatsapp.com/send?phone=6289627483848";
  }, []);
  return <div></div>;
};

export default Wa;
