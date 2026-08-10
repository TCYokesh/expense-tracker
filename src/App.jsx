import { useEffect, useState } from 'react';
import './App.css'
import Header from './Header';
import ExpenseForm from './ExpenseForm';
import FilterExpense from './FilterExpense';
import SearchExpense from './SearchExpense';
import SortExpense from './SortExpense';
import ExpenseList from './ExpenseList';

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
            return item.id !== id;
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
                error={error}
            />
            <div className='filter-section'>
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
            </div>
            <ExpenseList
                filteredExpense={finalExpense}
                deletehandler={deletehandler}
                editExpense={editExpense}
                totalExpense={totalExpense}
                totalExpenses={totalExpenses}
                sortedExpense={sortedExpense}
            />
        </>
    );
};

export default App;