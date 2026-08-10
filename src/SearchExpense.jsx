function SearchExpense(props){
    return(
        <input className="srh-exp" type="text" value={props.search} placeholder='Search the Expense'
            onChange={(e)=>props.setSearch(e.target.value)}
        />
    );
}

export default SearchExpense;