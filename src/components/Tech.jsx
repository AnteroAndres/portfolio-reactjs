import React, { useEffect, useRef, useState } from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from '../constants/index,js'

const DraggableIcon = ({ icon, name }) => {
  const [rotation, setRotation] = useState({ x: -12, y: 18 });
  const [isDragging, setIsDragging] = useState(false);
  const [autoSpin, setAutoSpin] = useState(true);
  const lastPoint = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!autoSpin || isDragging) return;

    const intervalId = setInterval(() => {
      setRotation((prev) => ({ ...prev, y: prev.y + 0.6 }));
    }, 50);

    return () => clearInterval(intervalId);
  }, [autoSpin, isDragging]);

  const handlePointerDown = (event) => {
    setAutoSpin(false);
    setIsDragging(true);
    lastPoint.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!isDragging) return;

    const dx = event.clientX - lastPoint.current.x;
    const dy = event.clientY - lastPoint.current.y;

    lastPoint.current = { x: event.clientX, y: event.clientY };

    setRotation((prev) => ({
      x: Math.max(-75, Math.min(75, prev.x - dy * 0.6)),
      y: prev.y + dx * 0.6,
    }));
  };

  const handlePointerUp = (event) => {
    setIsDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div
      className='w-full h-full select-none touch-none cursor-grab active:cursor-grabbing'
      style={{ perspective: "900px" }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onDoubleClick={() => setAutoSpin(true)}
      title='Drag to rotate (double click to resume auto spin)'
    >
      <div
        className='relative w-full h-full rounded-full border border-[#915EFF]'
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: isDragging ? "none" : "transform 280ms ease-out",
        }}
      >
        <div
          className='absolute inset-0 rounded-full bg-[#151030] p-4 flex items-center justify-center'
          style={{ transform: "translateZ(14px)", backfaceVisibility: "hidden" }}
        >
          <img
            src={icon}
            alt={name}
            className='w-full h-full object-contain pointer-events-none'
            draggable={false}
          />
        </div>

        <div
          className='absolute inset-0 rounded-full bg-[#151030] p-4 flex items-center justify-center'
          style={{
            transform: "rotateY(180deg) translateZ(14px)",
            backfaceVisibility: "hidden",
          }}
        >
          <img
            src={icon}
            alt={`${name} back`}
            className='w-full h-full object-contain pointer-events-none'
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

const Tech = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10'>
      {technologies.map((group) => (
        <div key={group.category}>
          <h3 className='text-white text-xl font-bold mb-6 text-center'>
            {group.category}
          </h3>
          <div className='grid grid-cols-2 gap-5 justify-items-center'>
            {group.items.map((technology) => (
              <div className='w-28 h-28' key={`${group.category}-${technology.name}`}>
                {technology.icon ? (
                  <DraggableIcon icon={technology.icon} name={technology.name} />
                ) : (
                  <div className='w-full h-full rounded-full border border-[#915EFF] bg-[#151030] text-white text-xs px-2 flex items-center justify-center text-center'>
                    {technology.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");