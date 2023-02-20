import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFilterCategory } from '../api';
import { MealList } from '../components/MealList';
import { Preloader } from '../components/Preloader';

export const Category = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const goBack = useNavigate();

  useEffect(() => {
    getFilterCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <button className="btn" onClick={() => goBack(-1)}>
        Go back
      </button>
      <div>{!meals.length ? <Preloader /> : <MealList meals={meals} />}</div>
    </>
  );
};
