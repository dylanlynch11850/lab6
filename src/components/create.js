import React from "react";
import axios from 'axios';

export class Create extends React.Component {

    //parent consgtructor with super
    constructor() {
        super();
        
        //this is where the handle submit is bind too 
        //binding to this instance of the event
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangedBookTitle = this.onChangedBookTitle.bind(this);
        this.onChangedBookCover = this.onChangedBookCover.bind(this);
        this.onChangedBookAuthor = this.onChangedBookAuthor.bind(this);

        this.state = {
            title: '',
            cover: '',
            author: ''
        }
    }
    
    //handle submits binds to above or it will not fire
    //event is present below, how we pull data out of the controll 
    
    handleSubmit(e){
        e.preventDefault();
        console.log(`Button clicked
        ${this.state.title},
        ${this.state.cover},
        ${this.state.author}`);
        this.setState({
            title: '',
            cover: '',
            author: ''
        })

//made an object called book
       const book = {
        title: this.state.title,
        cover: this.state.cover,
        author: this.state.author

       }
        
//used to send up to the server 
            axios.post('http://localhost:4000/api/books',book);

            this.setState ({
                title:'',
                cover:'',
                author:''
            })
        
    }

    onChangedBookTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    onChangedBookCover(e) {
        this.setState({
            cover: e.target.value
        })
    }

    onChangedBookAuthor(e) {
        this.setState({
        author: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h3> Hello From my Create component</h3>
            
           
            
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
//will update the state to the new value 

                            onChange={this.onChangedBookTitle}
                        />
                        </div>

<div className="form-group">
                        <label>Add Book Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangedBookCover}
//will update the state to the new value 
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Book Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangedBookAuthor}
//will update the state to the new value 
                        />
                    </div>


                    <input type="submit" value="Add Book" />
                </form>
            </div>
        );
    }
}
