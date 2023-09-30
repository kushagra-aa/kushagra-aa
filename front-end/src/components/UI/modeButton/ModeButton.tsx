import { DarkIcon, LightIcon } from "@/components/Icons";
import "./mode-button.css";

function ModeButton() {
  return (
    <div className="mode-button">
      <label htmlFor="mode">
        <input type="checkbox" name="mode" id="mode" />
        <div className="icons">
          <span id="dark-icon">
            <DarkIcon />
          </span>
          <span id="light-icon">
            <LightIcon />
          </span>
        </div>
      </label>
    </div>
  );
}

export default ModeButton;
