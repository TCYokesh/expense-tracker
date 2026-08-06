function FilterExpense(props){
    return(
        <select value={props.categories} onChange={(e)=>props.setCategories(e.target.value)}>
            <option>All</option>
            <option>Rent</option>
            <option>Groceries</option>
            <option>Transportation</option>
            <option>Fuel</option>
            <option>Medicines</option>
            <option>Internet and Mobile</option>
        </select>
    );
}

export default FilterExpense;