const CategoryMenu = ({products}) => {
  const categories = [...new Set(products.map(product => product.category))]
  
  return ( 
    <>
    <select>
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