import CountUp from "react-countup";
import "../assets/css/Counter.css";
import React from "react";

export default function Counter() {
  return (
    <div>
      <div class="grid-container">
        <div className="grid1">
        <div class="grid-item1">Collections</div>
        <div class="grid-item2">Artist</div>
        <div class="grid-item3">Community</div>
        </div>
        <div className="grid2">
        <div class="grid-item4"><CountUp end={450} duration={2} />K+</div>
        <div class="grid-item5"><CountUp end={320} duration={2} />K+</div>
        <div class="grid-item6"><CountUp end={16} duration={2} />K+</div>
        </div>
      </div>
   
    </div>
  );
}
