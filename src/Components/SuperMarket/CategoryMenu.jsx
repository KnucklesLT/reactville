const CategoryMenu = ({products, setProductCategory}) => {
  const categories = [...new Set(products.map(product => product.category))]
  
  return ( 
    <>
    <select onChange={(evt) => setProductCategory(evt.target.value)}>
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
    
    </>
  );
}

export default CategoryMenu;