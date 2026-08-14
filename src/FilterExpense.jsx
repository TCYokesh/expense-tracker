function FilterExpense(props){
    return(
        <div>
            <label className="filter-label">Filter</label>
            <select className="ftr-exp" value={props.categories} onChange={(e)=>props.setCategories(e.target.value)}>
                <option>All</option>
                <option>Rent</option>
                <option>Groceries</option>
                <option>Transportation</option>
                <option>Fuel</option>
                <option>Medicines</option>
                <option>Internet and Mobile</option>
            </select>
        </div>
    );
}

export default FilterExpense;