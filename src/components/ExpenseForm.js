import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
const date= moment();
console.log(date.format("MMM Do YYYY"))

class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            description:props.expense? props.expense.description:'',
            note:props.expense? props.expense.note:'',
            amount:props.expense? (props.expense.amount/100).toString() :'',
            createdAt:props.expense? moment(props.expense.createdAt) :moment(),
            calendarFocused: false
        }
    }
   

     onDescriptionChange = (e)=>{
        const des = e.target.value
        this.setState(()=>({description:des}))
    }
    onNoteChange = (e)=>{
        const Note = e.target.value
        this.setState(()=>({note:Note}))
    }
    onAmountChange = (e)=>{
        const amt=e.target.value
        if(amt.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(()=>({amount:amt}))
        }
    }

    onDateChange=(createdAt)=>{
        this.setState(()=>({createdAt}))
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
      };

      onSubmit=(e)=>{
          e.preventDefault()
          if(!this.state.description || !this.state.amount){
              this.setState(()=>({error:"Please Provide Description and Amount"}))
          }
          else{
              this.setState(()=>({error:''}))
              this.props.onSubmit({
                  description:this.state.description,
                 amount:parseFloat(this.state.amount,10) * 100,
                 createdAt:this.state.createdAt.valueOf(),
                 note:this.state.note
                })
          }
      }
    render(){
       return(
           <div>
               {this.state.error && <p>{this.state.error}</p>}
              <form onSubmit={this.onSubmit}>
              <input 
              type="text"    
              placeholder="Description"
              autoFocus
              value={this.state.description}
              onChange={this.onDescriptionChange}
              />
                <input 
                type="text"
                value={this.state.amount}
                placeholder='Amount'
                onChange={this.onAmountChange}
                />
                <SingleDatePicker
                date={this.state.createdAt}
                onDateChange={this.onDateChange}
                focused={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
                />
                <textarea
                onChange={this.onNoteChange}
                value={this.state.note}
                placeholder='Add a note to Your Expense (optional)'
                />

                <button>Add Expense</button>
              </form> 
          
            </div>
       )
    }
}

export default ExpenseForm;