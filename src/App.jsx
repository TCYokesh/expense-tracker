import { use, useEffect, useState } from 'react';
import './App.css'

function Header(){
    return(
        <div>
            <nav>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </nav>
            <h1>Expense Tracker</h1>
        </div>
    );
}

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
                <option>Select the category</option>
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

function SearchExpense(props){
    return(
        <input type="text" value={props.search} placeholder='Search the Expense'
            onChange={(e)=>props.setSearch(e.target.value)}
        />
    );
}

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

function App(){
    const [form,setForm] = useState({
        name:"",
        amount:"",
        category:"",
        date:""
    });

    const [editId,setEditId] = useState(null);

    const [expense,setExpense] = useState (()=>
        JSON.parse(localStorage.getItem('expense')) || []
    );

    const [categories,setCategories] = useState("All");

    const [error,setError] = useState("");
    
    useEffect(()=>{
        localStorage.setItem('expense',JSON.stringify(expense))
    },[expense]);

    let filteredExpense;
    if (categories==="All"){
        filteredExpense=expense;
    }
    else{
        filteredExpense = expense.filter((item)=>{
            return item.category === categories;
        });
    }

    const [search,setSearch] = useState("");
    const finalExpense = 
        filteredExpense.filter((item)=>{
            return item.name.toLowerCase().includes(search.toLowerCase());
        });

    function deletehandler(id){
        const filteredExpense = expense.filter((item)=>{
            return item.id != id;
        });
        setExpense(filteredExpense);
    }

    function editExpense(id){
        const editedExpense = expense.find((item)=>{
            return item.id === id;
        });
        setForm(editedExpense);
        setEditId(id);
    }

    const [sort,setSort] = useState("None");
    const sortedExpense = [...finalExpense];
    if (sort==="Amount (Low → High)"){
        sortedExpense.sort((a,b)=>{
            return Number(a.amount)-Number(b.amount);
        })
    }
    if (sort==="Amount (High → Low)"){
        sortedExpense.sort((a,b)=>{
            return Number(b.amount) - Number(a.amount);
        })
    }
    if (sort==="Date (Newest)"){
        sortedExpense.sort((a,b)=>{
            return new Date(b.date) - new Date(a.date);
        })
    }
    if (sort==="Date (Oldest)"){
        sortedExpense.sort((a,b)=>{
            return new Date(a.date) - new Date(b.date);
        })
    }

    const totalExpense = 
        sortedExpense.reduce((total,item)=>{
            return total + Number(item.amount);
        },0);

    console.log(expense);
    const totalExpenses = sortedExpense.length;
    return(
        <>
            <Header />
            <ExpenseForm 
                expense={expense}
                setExpense={setExpense}
                form={form}
                setForm={setForm}
                editId={editId}
                setEditId={setEditId}
                setError={setError}
                deletehandler={deletehandler}
                editExpense={editExpense}
            />
            <FilterExpense
                categories={categories}
                setCategories={setCategories}
            />
            <SearchExpense
                search={search}
                setSearch={setSearch}
            />
            <SortExpense
                sort={sort}
                setSort={setSort}
            />
            <ExpenseList
                filteredExpense={finalExpense}
                deletehandler={deletehandler}
                editExpense={editExpense}
                error={error}
                totalExpense={totalExpense}
                totalExpenses={totalExpenses}
                sortedExpense={sortedExpense}
            />
        </>
    );
};

export default App;