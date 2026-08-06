function ExpenseList(props){
    return(
        <div>
            <p>Total Expenses: {props.totalExpenses}</p>
            <p>Total Expense: {props.totalExpense}</p>
            {props.error ? props.error :
                props.sortedExpense.map((expense,)=>{
                    return(
                        <div key={expense.id}>
                            <span>{expense.name}</span>
                            <span> {expense.amount}</span>
                            <span> {expense.category}</span>
                            <span> {expense.date}</span>
                            <button onClick={()=>props.editExpense(expense.id)}>Edit</button>
                            <button onClick={()=>props.deletehandler(expense.id)}>Delete</button>
                        </div>
                    );
                })
            }
        </div>
     );
}

export default ExpenseList;