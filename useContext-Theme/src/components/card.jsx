import { useState } from "react";
import { useTheme } from "../context/contextProvider";

export default function Card() {
  return (
    <>
      <div className="mainContainer">
        <div className="togglebtn">
          <label class="form-check-label" for="switchCheckDefault">
            switch theme of card
          </label>
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="switchCheckDefault"
          />
        </div>
      </div>
    </>
  );
}
