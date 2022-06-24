import { useState, useEffect } from "react";

export default function MyComp(props) {
  useEffect(() => {
    const intervalID = setInterval(() => {
      //do stuff
    }, 5000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);
}
