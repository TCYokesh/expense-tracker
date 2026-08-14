function SortExpense(props){
    return(
        <div>
            <label className="sort-label">Sort</label>
            <select className="srt-exp" value={props.sort} onChange={(e)=>props.setSort(e.target.value)}>
                <option>None</option>
                <option>Amount (Low → High)</option>
                <option>Amount (High → Low)</option>
                <option>Date (Newest)</option>
                <option>Date (Oldest)</option>
            </select>
        </div>
    );
}

export default SortExpense;