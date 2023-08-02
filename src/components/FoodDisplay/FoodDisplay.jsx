import React from 'react';
import "./FoodDisplay.css";

import { FOOD } from "../../FOOD"

const FoodDisplay = () => {
  return (
    <div className='container-fluid food-fluid' id="menu">
      <div className="container">
        <h1 className='text-center disp-h1'>Our Special Delicacy/Menu</h1>
        <div className="box">
          {FOOD.map((food) => (
            <div className="card card-body">
              <img src={food.image} alt="..." className="food-img" />
              <div className="box-element">
                <p className='desc no-marg-padd'>{food.description}</p>
                <p className='price text-red'>{food.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FoodDisplay