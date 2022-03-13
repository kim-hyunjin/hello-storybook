import { useState } from "react";

import "./Slidebar.css";

export default function SlideBar({ label, min, max, step, onChange }) {
  const [value, setValue] = useState(0);

  const handleOnChange = (e) => {
    const val = Number(e.target.value);
    setValue(val);
    onChange(val);
  };
  return (
    <div className={"inputGroup"}>
      <div className={"label"}>{label}</div>
      <div className={"currentVal"}>{value}%</div>
      <div className={"slidebarContainer"}>
        <input
          className={"slidebar"}
          style={{
            background: `linear-gradient(
            to right,
            green 0%,
            green ${(value / max) * 100}%,
            white ${(value / max) * 100}%,
            white 100%
          )`,
          }}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleOnChange}
        />
      </div>
      <div className={"minmax"}>
        <span>{min}%</span>
        <span>{max}%</span>
      </div>
    </div>
  );
}
