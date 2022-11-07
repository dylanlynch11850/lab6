//Import function 
import React from "react";
import Card from 'react-bootstrap/Card';


//Here we are telling the code to display book title and thumbnail
export class BookItem extends React.Component{
    render(){
        return(
            <div>
                {/*<h4>{this.props.book.title}</h4>
                <img src={this.props.book.thumbnailUrl}></img>
        <p>{this.props.book.authors[0]}</p> */}
        <center>
            
{/*//This is the card function 
            //Import from online
      //access this from the parent */}
    <Card>
      <Card.Header>{this.props.book.title}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <img src={this.props.book.thumbnailUrl} width="200" height="200"></img>
          <footer>
          {this.props.book.authors[0]}
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    <br/>
    </center>
            </div>
        );
    }
}
