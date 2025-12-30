import { useEffect, useState } from "react";

const bubblePath = [
  { left: "10%", size: 12, delay: 0, duration: 2.4 },
  { left: "22%", size: 10, delay: 0.1, duration: 2.6 },
  { left: "34%", size: 14, delay: 0.05, duration: 2.2 },
  { left: "46%", size: 11, delay: 0.18, duration: 2.8 },
  { left: "58%", size: 9, delay: 0.12, duration: 2.5 },
  { left: "70%", size: 13, delay: 0.06, duration: 2.7 },
  { left: "82%", size: 10, delay: 0.16, duration: 2.4 },
  { left: "15%", size: 9, delay: 0.22, duration: 2.3 },
  { left: "28%", size: 12, delay: 0.28, duration: 2.6 },
  { left: "40%", size: 10, delay: 0.24, duration: 2.2 },
  { left: "63%", size: 11, delay: 0.3, duration: 2.5 },
  { left: "75%", size: 13, delay: 0.26, duration: 2.7 },
  { left: "88%", size: 9, delay: 0.32, duration: 2.4 },
  { left: "50%", size: 12, delay: 0.14, duration: 2.55 },
  { left: "5%", size: 8, delay: 0.34, duration: 2.35 },
];

const CELEBRATION_DURATION_MS = 2700;

export const RippleCelebration = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), CELEBRATION_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      <div className="absolute left-1/2 top-[30%] -translate-x-1/2">
        {[0, 1, 2, 3].map((ring) => (
          <span
            key={ring}
            className="celebration-ripple-ring"
            style={{ animationDelay: `${ring * 0.18}s` }}
          />
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 h-48">
        {bubblePath.map((bubble, index) => (
          <span
            key={index}
            className="celebration-bubble"
            style={{
              left: bubble.left,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              animationDelay: `${bubble.delay}s`,
              animationDuration: `${bubble.duration}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
