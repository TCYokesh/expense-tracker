function SortExpense(props){
    return(
        <select value={props.sort} onChange={(e)=>props.setSort(e.target.value)}>
            <option>None</option>
            <option>Amount (Low → High)</option>
            <option>Amount (High → Low)</option>
            <option>Date (Newest)</option>
            <option>Date (Oldest)</option>
        </select>
    );
}

export default SortExpense;