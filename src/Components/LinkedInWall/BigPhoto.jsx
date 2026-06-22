import React from "react";

export default function BigPhoto({ src, className = "" }) {
  return (
    <div className={className}>
      <div className="border border-black/50 bg-neutral-200 overflow-hidden">
        <img 
          src={src} 
          alt="" 
          className="w-full h-[260px] object-cover" 
        />
      </div>
    </div>
  );
}