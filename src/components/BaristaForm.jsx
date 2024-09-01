import React, { Component, useState } from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "../drinks.json";



const BaristaForm = () => {

  const [inputs, setInputs] = useState({
    'temperature': '',
    'milk': '',
    'syrup': '',
    'blended': ''
  });

  const ingredients = {
    'temperature': ['hot', 'lukewarm', 'cold'],
    'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
    'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
    'blended': ['yes', 'turbo', 'no']
  }

  const [currentDrink, setCurrentDrink] = useState('');

  const [trueRecipe, setTrueRecipe] = useState({});

  const onNewDrink = () => {
    setInputs({
      'temperature': '',
      'milk': '',
      'syrup': '',
      'blended': ''
    });

    setCheckedTemperature('');
    setCheckedSyrup('');
    setCheckedMilk('');
    setCheckedBlended('');

    getNextDrink();

  };

  const [correct_temp, setCheckedTemperature] = useState('');
  const [correct_syrup, setCheckedSyrup] = useState('');
  const [correct_milk, setCheckedMilk] = useState('');
  const [correct_blended, setCheckedBlended] = useState('');

  const onCheckAnswer = () => {

    if (!ingredients['temperature'].includes(inputs['temperature'])) {
      alert("For temperature, that isn't even an option!")
    }

    if (!ingredients['syrup'].includes(inputs['syrup'])) {
      alert("For syrup, that isn't even an option!")
    }

    if (!ingredients['milk'].includes(inputs['milk'])) {
      alert("For milk, that isn't even an option!")
    }

    if (!ingredients['blended'].includes(inputs['blended'])) {
      alert("For blended, that isn't even an option!")
    }

    if (trueRecipe.temp != inputs['temperature']){
      setCheckedTemperature('wrong');
    }
    else {
      setCheckedTemperature("correct");
    }

    if (trueRecipe.syrup != inputs['syrup']){
      setCheckedSyrup('wrong');
    }
    else {
      setCheckedSyrup("correct");
    }

    if (trueRecipe.milk != inputs['milk']){
      setCheckedMilk('wrong');
    }
    else {
      setCheckedMilk("correct");
    }

    if (trueRecipe.blended != inputs['blended']){
      setCheckedBlended('wrong');
    }
    else {
      setCheckedBlended("correct");
    }

  };

  const getNextDrink = () => {
    let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
    setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
    setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
  }

  return (
    <div>
      <div>
        <h2>I'd like to order a:</h2>
        <div className='containerOrder'>
          <div className='orderDiv'>
            {currentDrink}
          </div>
          <button className='btnOrder' onClick={onNewDrink}>
            <i className="fas fa-coffee"></i>
          </button>
        </div>
      </div>
      <div className='container'>
        <div className='miniContainer'>
          <h3>Temperature</h3>
          <div className="answer-space" id={correct_temp} >
            {inputs["temperature"]}
          </div>
          <RecipeChoices
            handleChange={(e) => setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))}
            label="temperature"
            choices={ingredients["temperature"]}
            checked={inputs["temperature"]}
          />
        </div>

        <div className='miniContainer'>
          <h3>Syrup</h3>
          <div className="answer-space" id={correct_syrup}>
            {inputs["syrup"]}
          </div>
          <RecipeChoices
            handleChange={(e) => setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))}
            label="syrup"
            choices={ingredients["syrup"]}
            checked={inputs["syrup"]}
          />
        </div>

        <div className='miniContainer'>
          <h3>Milk</h3>
          <div className="answer-space" id={correct_milk}>
            {inputs["milk"]}
          </div>
          <RecipeChoices
            handleChange={(e) => setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))}
            label="milk"
            choices={ingredients["milk"]}
            checked={inputs["milk"]}
          />
        </div>

        <div className='miniContainer'>
          <h3>Blended</h3>
          <div className="answer-space" id={correct_blended}>
            {inputs["blended"]}
          </div>
          <RecipeChoices
            handleChange={(e) => setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))}
            label="blended"
            choices={ingredients["blended"]}
            checked={inputs["blended"]}
          />
        </div>
      </div>

      <div className='container'>
        <button type="submit" className="btnSubmit" onClick={onCheckAnswer}>
          Check Answer
        </button>
      </div>

    </div>
  )
}

export default BaristaForm;