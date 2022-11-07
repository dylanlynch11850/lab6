import React from "react";
//This is where you import 
import { BookItem } from "./bookItem";
export class Books extends React.Component{
    render(){

        //This is array of functions 
        //collect data 
//This will get rid of red warning 
        return this.props.books.map( (book)=>{
            
            //Create a new item called book item
            return <BookItem book={book} key={book.isbn}></BookItem>
        }


        );
    
    }
}
