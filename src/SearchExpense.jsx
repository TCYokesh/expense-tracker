function SearchExpense(props){
    return(
        <div>
            <label className="search-label">Search</label>
            <input className="srh-exp" type="text" value={props.search} placeholder='Search Expense'
                onChange={(e)=>props.setSearch(e.target.value)}
            />
        </div>
    );
}

export default SearchExpense;