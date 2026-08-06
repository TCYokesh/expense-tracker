function ExpenseForm(props){
    return(
        <div>
            <input type="text" value={props.form.name}
                placeholder='Name of Expense'
                onChange={(e)=>props.setForm({...props.form,name:e.target.value})}
            />
            <input type="number" value={props.form.amount}
                placeholder='Expense Amount'
                onChange={(e)=>props.setForm({...props.form,amount:e.target.value})}
            />
            <select 
                value={props.form.category}
                onChange={(e)=>props.setForm({...props.form,category:e.target.value})}
            >
                <option value="">Select the category</option>
                <option>Rent</option>
                <option>Groceries</option>
                <option>Transportation</option>
                <option>Fuel</option>
                <option>Medicines</option>
                <option>Internet and Mobile</option>
            </select>

            <input type="date" value={props.form.date}
            onChange={(e)=>props.setForm({...props.form,date:e.target.value})}
            />

            <button onClick={()=>{
                if(!props.form.name){
                    props.setError("Enter the Name of Expense");
                }
                else if(!props.form.amount){
                    props.setError("Enter the Expense Amount");
                }
                else if(!props.form.category){
                    props.setError("Select the Category");
                }
                else if(!props.form.date){
                    props.setError("Enter the Date");
                }
                else{
                    props.setError("");
                    if(props.editId===null){
                        const newExpense = {...props.form,id:Date.now()};
                        const updateExpense = [...props.expense,newExpense];
                        props.setExpense(updateExpense);
                        props.setForm({
                            name:"",
                            amount:"",
                            category:"",
                            date:""
                        });
                    }
                    else{
                        const updatedExpense = props.expense.map((item)=>
                            item.id === props.editId 
                            ? {...props.form,id:props.editId}
                            : item    
                        );
                        props.setExpense(updatedExpense);
                        props.setEditId(null);
                        props.setForm({
                            name:"",
                            amount:"",
                            category:"",
                            date:""
                        });
                    }
                }
            }}>{props.editId===null ? "Add" : "Update"}</button>

        </div>
    );
}

export default ExpenseForm;