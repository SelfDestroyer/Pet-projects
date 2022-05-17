import React, { useState } from "react";
import { connect } from "react-redux";

// Bootstrap components
import { ButtonGroup, ToggleButton } from "react-bootstrap";

// Styles
import styles from "./Filter.module.scss";

// Actions
import { setVisibilityFilter } from "../../App/actions";

// Animation components
import { Zoom } from "react-reveal";

const mapDistapch = {
  setVisibilityFilter,
};

export function Filter({ setVisibilityFilter }) {
  const [radioValue, setRadioValue] = useState("1");

  const handleShowAll = () => setVisibilityFilter("all");
  const handleShowCompleted = () => setVisibilityFilter("completed");
  const handleShowNotCompleted = () => setVisibilityFilter("notCompleted");

  const radios = [
    { name: "Show all", value: "1", onClick: handleShowAll },
    { name: "Show completed", value: "2", onClick: handleShowCompleted },
    { name: "Show not completed", value: "3", onClick: handleShowNotCompleted },
  ];

  return (
    <Zoom delay={2000}>
      <ButtonGroup className={styles.filter}>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="outline-light fw-bold"
            name="radio"
            onClick={radio.onClick}
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </Zoom>
  );
}

export default connect(null, mapDistapch)(Filter);
