"use client";

import { Warp } from "@paper-design/shaders-react";

export default function ShaderBackground() {
  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      <Warp
        style={{ height: "100%", width: "100%" }}
        proportion={0.45}
        softness={1}
        distortion={0.25}
        swirl={0.8}
        swirlIterations={10}
        shape="checks"
        shapeScale={0.1}
        scale={1}
        rotation={0}
        speed={1}
        colors={["hsl(350, 100%, 92%)", "hsl(340, 90%, 86%)", "hsl(24, 100%, 94%)", "hsl(349, 80%, 89%)"]}
      />
      {/* Soft wash so the shader reads as background texture, not foreground color */}
      <div className="absolute inset-0 bg-vanilla-dust/40" />
    </div>
  );
}
