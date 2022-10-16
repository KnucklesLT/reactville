
const Ingredient = ({ingredient, isList, addToBurger, removeFromBurger, idx, disabled}) => {
	return (
		<li style={disabled ? { background: 'darkgray' } : { background: ingredient.color }}>

			{ingredient.name}

			{isList
				? <button disabled={disabled} onClick={() => addToBurger(ingredient)}>+</button>
				: <button onClick={() => removeFromBurger(idx)}>X</button>
			}
			
		</li>
	)
}

export default Ingredient