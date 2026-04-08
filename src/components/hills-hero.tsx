"use client";

import { GLSLHills } from "@/components/ui/glsl-hills";

export function HillsHero() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <GLSLHills />
      <div className="space-y-6 pointer-events-none z-10 text-center absolute">
        <h1 className="font-semibold text-7xl whitespace-pre-wrap text-white">
          <span className="italic text-6xl font-thin">AI Made Simple. <br /></span>
          One Build at a Time.
        </h1>
        <p className="text-sm text-white/60">
          I build with AI every single day. Websites, automations, agents, full business systems.
          <br />
          Follow along and see what AI can actually do.
        </p>
      </div>
    </div>
  );
}
