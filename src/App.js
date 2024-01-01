import { useState, useEffect, useMemo } from "react";
import CountdownTimer from "./CountdownTimer";
import Header from "./Header";
function App() {
  const initialColors = useMemo(() => ["#FFC0CB", "#FFD700", "#D3D3D3"], []);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [color, setColor] = useState(initialColors[currentColorIndex]);
  const [activeSvg, setActiveSvg] = useState("mobile");

  useEffect(() => {
    const colorChangeIntervalId = setInterval(() => {
      setCurrentColorIndex(
        (prevIndex) => (prevIndex + 1) % initialColors.length
      );
      setColor(initialColors[currentColorIndex]);
    }, 1000);

    const svgChangeIntervalId = setInterval(() => {
      setActiveSvg((prevSvg) => {
        switch (prevSvg) {
          case "mobile":
            setActiveSvg("desktop");
            break;
          case "desktop":
            setActiveSvg("chrome");
            break;
          case "chrome":
            setActiveSvg("mobile");
            break;
          default:
            break;
        }
      });
    }, 1000);

    return () => {
      clearInterval(colorChangeIntervalId);
      clearInterval(svgChangeIntervalId);
    };
  }, [currentColorIndex, initialColors]);

  return (
    <div>
      <Header
        textColor={color}
        activeSvg={activeSvg}
        setActiveSvg={setActiveSvg}
      />
      <CountdownTimer colorChange={color} />
    </div>
  );
}

export default App;
