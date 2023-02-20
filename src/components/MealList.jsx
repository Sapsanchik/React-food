import React from 'react'
import { Meal } from './Meal'

export const MealList = ({meals}) => {
  return (
    <div className='list'>
      {
        meals.map(meal => (
          <Meal key={meal.idMeal} {...meal} />
        ))
      }
    </div>
  )
}
