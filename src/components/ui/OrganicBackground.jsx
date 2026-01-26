import React from "react";
import "../../styles/components/ui/organicBackground.scss";

const OrganicBackground = () => {
  return (
    <div className="organic-background-container">
      <svg
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
        className="organic-svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Warstwa 1: Najjaśniejsza (TŁO) - Duża, rozlana plama */}
        <path
          className="blob-layer-1"
          d="M488.5,373.5Q457,497,333.5,502.5Q210,508,131.5,413Q53,318,134.5,214.5Q216,111,338,126Q460,141,490,245.5Q520,350,488.5,373.5Z"
        />

        {/* Warstwa 2: Średnia (POŚREDNIA) - Wystaje w górę i w prawo */}
        <path
          className="blob-layer-2"
          d="M455.5,339.5Q440,429,353.5,444Q267,459,189.5,404.5Q112,350,131.5,257Q151,164,256,134.5Q361,105,416,177.5Q471,250,455.5,339.5Z"
        />

        {/* Warstwa 3: Najciemniejsza (GŁÓWNA) - Bardziej centralna, pod chomikiem */}
        <path
          className="blob-layer-3"
          d="M418,318Q398,386,331.5,396Q265,406,207.5,364Q150,322,168.5,253Q187,184,263,166Q339,148,378.5,204Q418,260,418,318Z"
        />
      </svg>
    </div>
  );
};

export default OrganicBackground;
