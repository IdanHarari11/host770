'use client';

import { useEffect } from 'react';

export default function NagishLi() {
  useEffect(() => {
    const isNagishLiLoaded = document.querySelector("#NagishLiBar");
    if (isNagishLiLoaded) {
      return;
    }
    const script = document.createElement("script");
    script.src = "/js/nagishli.js"; // תיקון הנתיב - הקובץ נמצא בתיקיית /js/
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      setTimeout(() => {
        const nagishLiBar = document.querySelector("#NagishLiBar");
        if (nagishLiBar) {
          nagishLiBar.style.position = "fixed";
          nagishLiBar.style.bottom = "20px";
          nagishLiBar.style.right = "20px";
          nagishLiBar.style.left = "auto";
          nagishLiBar.style.zIndex = "9999";
          nagishLiBar.style.top = "auto";
        }
      }, 10);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // קומפוננטה ללא רינדור נראה לעין
  return null;
} 