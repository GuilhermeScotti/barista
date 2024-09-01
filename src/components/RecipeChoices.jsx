import React, { Component, useEffect, useState } from "react";


const RecipeChoices = ({ handleChange, label, choices, checked }) => {
  return (
    <div>

      <input
        type="text"
        name={label}
        value={checked}
        placeholder="Guess the ingredient..."
        onChange={handleChange}
        className="textbox"
      />

      {choices &&
        choices.map((choice) => (
          <li key={choice}>
            {/* <input
              id={choice}
              value={choice}
              name={label}
              type="radio"
              onChange={handleChange}
              checked={checked == choice}
            /> */}
            {choice}
          </li>
        ))}
    </div>
  );
};

export default RecipeChoices;