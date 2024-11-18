import { FC, useEffect } from 'react';
import { Preloader } from '../ui/preloader';
import { IngredientDetailsUI } from '../ui/ingredient-details';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '@store';
import { TIngredient } from '@utils-types';

export const IngredientDetails: FC = () => {
  const location = useLocation();
  const currentIngredietnID: string = location.pathname.split('/')[2];
  const ingredientData: TIngredient | null =
    useAppSelector((state) =>
      state.ingredientsState.ingredients.find(
        (item) => item._id === currentIngredietnID
      )
    ) || null;

  if (!ingredientData) {
    return <Preloader />;
  }

  return <IngredientDetailsUI ingredientData={ingredientData} />;
};
