import React from "react";
import { Books } from "./books";
import axios from "axios";

//Adding the eport class
export class Read extends React.Component {

    //Life Cycle hook element 
    //gets fired when component is drawn
    componentDidMount() {
        
        //url we are going too 
        //there is a fall back option available here also 
        
        //seperate domains
        axios.get('http://localhost:4000/api/books')
        
        //furfilled request, other wised called a promise then it excutes this function then updates are state
        //axios looks after the promise 
            .then((response) => {
                this.setState({ books: response.data.myBooks })
            })

            //Catch Method
        
            .catch((error)=>{
                console.log(error); //error handling
            })

    }

    //Got this from online using the link
    //holds data in json data, 
    //Here we have an array of object 

    state = {
        //Creating Arrays Called Book
        //empty array in json
        books: [

        ]
    };
    //books needs to be passed down using javascript here 
    //Render Items
    render() {
        return (
            <div>
                <h3>Hello From my read Component</h3>
            //HTML Component
            
                <Books books={this.state.books}></Books>
            </div>
        )
    }
}
