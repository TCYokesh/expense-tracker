import EditIcon from './assets/edit.png';
import DeleteIcon from './assets/delete.png'
function ExpenseList(props){
    return(
        <div className="exp-list">
            <p className="total-expenses">Total Expenses: {props.totalExpenses}</p>
            <p className="total-expense">Total Expense: {props.totalExpense}</p>
            <div className="expense-items">
                {props.sortedExpense.map((expense,)=>{
                    return(
                        <div key={expense.id} className="list">
                            <span>{expense.name}</span>
                            <span> {expense.amount}</span>
                            <span> {expense.category}</span>
                            <span> {expense.date}</span>
                            <button className="edit-btn" onClick={()=>props.editExpense(expense.id)}> <img className='edit-icon' src={EditIcon} alt="Edit"/> Edit </button>
                            <button className="delete-btn" onClick={()=>props.deletehandler(expense.id)}> <img className='delete-icon' src={DeleteIcon} alt="Delete"/> Delete </button>
                        </div>
                    );
                })}
            </div>
        </div>
     );
}

export default ExpenseList;