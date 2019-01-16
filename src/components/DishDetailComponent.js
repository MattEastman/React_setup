import React, { Component } from 'react';
import { Card,CardImg,CardImgOverlay,CardTitle,CardText,CardBody} from 'reactstrap';
import {DISHES} from '../shared/dishes';

class DishDetail extends Component{
  render() {
      
      console.log(this.props)

    const renderDish=(dish)=> {
        if (dish != null)
            return(
                <div class="container">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} width='100%'/>
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        else
            return(<div></div>);
    }

    const renderComments=(dish)=>{
        if(dish!=null){
            const dishComment = this.props.dishes.comments.map(com => {
                return(
                    <div key={com.id}>
                    <ul className="list-unstyled">  
                        <li>{com.comment}</li>
                        <li>by {com.author} on {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))}</li>
                    </ul>
                    </div>    
                );
            });
            return( 
                <div>
                    <h4>Read Comments</h4>
                    {dishComment}
                </div>
            )}
        else
        {return(<div></div>)}
    }
    
    return(
      <div className="row">
       <div width="100%" className="col-xs-12 col-sm-12 col-md-5 m-1 ">
        {renderDish(this.props.dishes)}
       </div>

        <div width="100%" className="col-xs-12 col-sm-12 col-md-5 m-1 ">
        {renderComments(this.props.dishes)}
        </div>
      </div>
    )}
}
    
export default DishDetail;