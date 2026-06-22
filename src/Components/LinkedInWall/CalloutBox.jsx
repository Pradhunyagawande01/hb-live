import React from "react";
import CutCornerBox from "./CutCornerBox";

export default function CalloutBox({ text, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <CutCornerBox className="w-full">
        <div className="p-6 text leading-snug uppercase tracking-wide text-black">
          {text}
        </div>
      </CutCornerBox>

      {/* Connector line and square */}
      <div className="absolute -left-[78px] bottom-[18px] flex items-center">
        <div className="h-[2px] w-[64px] bg-black/80" />
        <div className="ml-3 h-7 w-7 border border-black/70 bg-white flex items-center justify-center">
          <div className="h-3 w-3 bg-black" />
        </div>
      </div>
    </div>
  );
}