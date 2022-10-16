import { useState, useEffect } from "react"
import Ingredient from "./Ingredient"

const IngredientList = ({ingredients, addToBurger, stack}) => {
	const [hasBuns, setHasBuns] = useState(false)


	useEffect(() =>{
		setHasBuns(stack.filter(item => item.type === 'bun').length ===2)
	},[stack])

	return (
		<ul>
			{ingredients.map((ingredient, idx) => 
				<Ingredient 
					key={idx}
					isList={true}
					ingredient={ingredient}
					addToBurger={addToBurger}
					disabled={hasBuns && ingredient.type === 'bun'}
				/>
			)}
		</ul>
	)
}

export default IngredientList