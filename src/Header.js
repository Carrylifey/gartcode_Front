import React, { useEffect } from "react";
import Logo from "./images/Logo.webp";

const ChromeSvgFile = () => {
  const mainColor = "#1E8E3E";
  const stop1Style = {
    stopColor: "#1E8E3E",
  };

  const stop2Style = {
    stopColor: "#34A853",
  };
  const shadowStopStyle = {
    stopColor: mainColor,
    stopOpacity: 0.3,
  };
  const linearGradient1Style = {
    gradientUnits: "userSpaceOnUse",
    x1: "283.2852",
    y1: "18.9008",
    x2: "62.8264",
    y2: "400.7473",
    gradientTransform: "matrix(1 0 0 -1 0 514)",
  };

  const linearGradient2Style = {
    gradientUnits: "userSpaceOnUse",
    x1: "218.5901",
    y1: "2.3333",
    x2: "439.0491",
    y2: "384.1796",
    gradientTransform: "matrix(1 0 0 -1 0 514)",
  };

  const linearGradient3Style = {
    gradientUnits: "userSpaceOnUse",
    x1: "35.2587",
    y1: "353.0303",
    x2: "476.177",
    y2: "353.0303",
    gradientTransform: "matrix(1 0 0 -1 0 514)",
  };

  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      enableBackground="new 0 0 512 512"
      className="svg-icon"
    >
      <path
        fill="#FFFFFF"
        d="M255.73,383.71c70.3,0,127.3-56.99,127.3-127.3s-56.99-127.3-127.3-127.3s-127.3,56.99-127.3,127.3
        S185.42,383.71,255.73,383.71z"
      />
      <linearGradient id="SVGID_1_" {...linearGradient1Style}>
        <stop offset="0" style={stop1Style} />
        <stop offset="1" style={stop2Style} />
        <stop offset="1" style={shadowStopStyle} />
      </linearGradient>
      <path
        fill="url(#SVGID_1_)"
        d="M145.48,320.08L35.26,129.17c-22.35,38.7-34.12,82.6-34.12,127.29s11.76,88.59,34.11,127.29
        c22.35,38.7,54.49,70.83,93.2,93.17c38.71,22.34,82.61,34.09,127.3,34.08l110.22-190.92v-0.03c-11.16,19.36-27.23,35.44-46.58,46.62
        c-19.35,11.18-41.3,17.07-63.65,17.07s-44.3-5.88-63.66-17.05C172.72,355.52,156.65,339.44,145.48,320.08z"
      />
      <linearGradient id="SVGID_2_" {...linearGradient2Style}>
        <stop offset="0" style={{ stopColor: "#FCC934" }} />
        <stop offset="1" style={{ stopColor: "#FBBC04" }} />
      </linearGradient>
      <path
        fill="url(#SVGID_2_)"
        d="M365.96,320.08L255.74,510.99c44.69,0.01,88.59-11.75,127.29-34.1
        c38.7-22.34,70.84-54.48,93.18-93.18c22.34-38.7,34.1-82.61,34.09-127.3c-0.01-44.69-11.78-88.59-34.14-127.28H255.72l-0.03,0.02
        c22.35-0.01,44.31,5.86,63.66,17.03c19.36,11.17,35.43,27.24,46.61,46.59c11.18,19.35,17.06,41.31,17.06,63.66
        C383.03,278.77,377.14,300.72,365.96,320.08L365.96,320.08z"
      />
      <path
        fill="#1A73E8"
        d="M255.73,357.21c55.66,0,100.78-45.12,100.78-100.78s-45.12-100.78-100.78-100.78
        s-100.78,45.12-100.78,100.78S200.07,357.21,255.73,357.21z"
      />
      <linearGradient id="SVGID_3_" {...linearGradient3Style}>
        <stop offset="0" style={{ stopColor: "#D93025" }} />
        <stop offset="1" style={{ stopColor: "#EA4335" }} />
      </linearGradient>
      <path
        fill="url(#SVGID_3_)"
        d="M255.73,129.14h220.45C453.84,90.43,421.7,58.29,383,35.95C344.3,13.6,300.4,1.84,255.71,1.84
        c-44.69,0-88.59,11.77-127.29,34.12c-38.7,22.35-70.83,54.5-93.16,93.2l110.22,190.92l0.03,0.02
        c-11.18-19.35-17.08-41.3-17.08-63.65s5.87-44.31,17.04-63.66c11.17-19.36,27.24-35.43,46.6-46.6
        C211.42,135.01,233.38,129.13,255.73,129.14z"
      />
    </svg>
  );
};

const DesktopView = () => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 80 80"
      enableBackground="new 0 0 80 80"
      className="svg-icon"
    >
      <path
        fill="#18CEF6"
        d="M67.366,54.351V21.152H20.573c-0.627,0-1.136,0.464-1.136,1.037v32.161H67.366z"
      />
      <path
        fill="#233251"
        d="M65.722,15H14.596c-1.26,0.001-2.278,0.931-2.28,2.082v36.133c0.002,1.15,1.021,2.081,2.28,2.081h24.291
      v9.735H26.936v2.089h26.318V65.03H41.175v-9.735h24.546c1.259,0,2.278-0.931,2.278-2.081V17.082C68,15.932,66.98,15.001,65.722,15z
       M65.712,53.206H14.605V17.089h51.107V53.206z"
      />
    </svg>
  );
};
const MobileSVG = () => {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      className="svg-icon"
    >
      <path d="M85.81 120H34.19a8.39 8.39 0 0 1-8.38-8.39V8.39A8.39 8.39 0 0 1 34.19 0h51.62a8.39 8.39 0 0 1 8.38 8.39v103.22a8.39 8.39 0 0 1-8.38 8.39zM34.19 3.87a4.52 4.52 0 0 0-4.51 4.52v103.22a4.52 4.52 0 0 0 4.51 4.52h51.62a4.52 4.52 0 0 0 4.51-4.52V8.39a4.52 4.52 0 0 0-4.51-4.52z" />
      <path d="M73.7 10.32H46.3L39.28 3.3 42.01.57l5.89 5.88h24.2L77.99.57l2.73 2.73-7.02 7.02zM47.1 103.23h25.81v3.87H47.1z" />
    </svg>
  );
};
const Header = ({ textColor,activeSvg ,setActiveSvg }) => {
 


  useEffect(() => {
    const timeoutId = setInterval(() => {
      switch (activeSvg) {
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
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [activeSvg,setActiveSvg]);

  const renderActiveSvg = () => {
    switch (textColor) {
      case "#FFC0CB": // Pink color
        return <MobileSVG key="mobile" className="transition-svg" />;
      case "#D3D3D3": // Grey color
        return <DesktopView key="desktop" className="transition-svg" />;
      case "#FFD700": // Yellow color
        return <ChromeSvgFile key="chrome" className="transition-svg" />;
      default:
        return null;
    }
  };

  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
        <span className="span-texty">for</span>
        <span className="span-text" style={{ color: textColor }}>
          {renderActiveSvg()} & Cloud
        </span>
      </div>
      <div className="gaming" style={{ color: textColor }}>
        Gaming
      </div>
    </div>
  );
};

export default Header;
