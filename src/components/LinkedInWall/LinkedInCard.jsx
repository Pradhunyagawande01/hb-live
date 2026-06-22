import React from "react";
import LinkedInBadge from "./LinkedInBadge";
import CutCornerBox from "./CutCornerBox";
import { OLIVE } from "./constants";

export default function LinkedInCard({ 
  avatar, 
  name, 
  text, 
  image, 
  className = "" 
}) {
  return (
    <div className={`flex items-start gap-4 ${className}`}>
      {/* Avatar */}
      <div className="h-[86px] w-[86px] shrink-0 border border-black/50 bg-neutral-200 overflow-hidden">
        <img src={avatar} alt={name} className="h-full w-full object-cover" />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        {/* Header */}
        <div
          className="h-12 w-full flex items-center gap-4 px-4"
          style={{ backgroundColor: OLIVE }}
        >
          <LinkedInBadge />
          <div className="text-white uppercase tracking-wide subtitle text-[8px] leading-none font-medium">
            {name}
          </div>
        </div>

        {/* Body */}
        <CutCornerBox className="mt-4">
          <div className="p-5 leading-relaxed uppercase tracking-wide text-black text">
            {text}
          </div>

          {image && (
            <div className="px-5 pb-5">
              <div className="border border-black/40 overflow-hidden bg-neutral-200">
                <img 
                  src={image} 
                  alt="" 
                  className="h-[180px] w-full object-cover" 
                />
              </div>
            </div>
          )}
        </CutCornerBox>
      </div>
    </div>
  );
}