import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class Dishdetail extends Component {
  renderDish(dish) {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(comments) {
    if (comments != null) {
      return (
        <div>
          <h4>Comments</h4>
          {comments.map(comment => {
            const date = new Date(comment.date);
            return (
              <ul key={comment.id} className="list-unstyled">
                <li>
                  <p>{comment.comment}</p>
                  <p>{`-- ${comment.author}, ${date}`}</p>
                </li>
              </ul>
            );
          })}
        </div>
      );
    } else {
      return <div />;
    }
  }

  render() {
    const { dish } = this.props;
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">{this.renderDish(dish)}</div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(dish.comments)}
        </div>
      </div>
    );
  }
}

export default Dishdetail;