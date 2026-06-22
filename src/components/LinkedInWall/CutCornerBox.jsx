import React from "react";

export default function CutCornerBox({ className = "", children }) {
  return (
    <div
      className={`border border-black/50 bg-white [clip-path:polygon(0_0,100%_0,100%_100%,44px_100%,0_calc(100%-44px))] ${className}`}
    >
      {children}
    </div>
  );
}