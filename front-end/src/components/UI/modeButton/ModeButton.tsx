import { DarkIcon, LightIcon } from "@/components/Icons";
import "./mode-button.css";

function ModeButton() {
  return (
    <div className="mode-button">
      <label htmlFor="mode">
        <span id="light-icon">
          <LightIcon />
        </span>
        <span id="dark-icon">
          <DarkIcon />
        </span>
        <input type="checkbox" name="mode" id="mode" />
      </label>
    </div>
  );
}

export default ModeButton;
