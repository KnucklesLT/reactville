import Ingredient from './Ingredient'

const BurgerStack = ({ingredients, removeFromBurger}) => {
  return (
    <ul className="burger-stack">
      {ingredients.length ?
      <>
        {ingredients.map((ingredient, idx) => 
          <Ingredient 
            key={idx}
            idx={idx}
            ingredient={ingredient}
            removeFromBurger={removeFromBurger}
          />
        )}
      </>
    :
        <div>No Ingredients</div>
      
    }
    </ul>
  )
}

export default BurgerStack