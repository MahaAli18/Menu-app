import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className='col col-12 col-md-5 m-1'>
                        <Card>
                            <CardImg width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                            <CardBody>
                                <CardTitle>{this.props.selectedDish.name}</CardTitle>
                                <CardText>{this.props.selectedDish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col col-12 col-md-5 m-1'>
                    <h4 className='mt-2'>Comments About {this.props.selectedDish.name}</h4>
	                <ul className='list-unstyled'>
	                    {this.props.selectedDish.comments.map((comment) => {
	                        return(
	                            <div className='mt-4'>
	                                <li>{comment.author} , {new Date(comment.date).toLocaleDateString()}</li>
	                                <li>{comment.comment}</li>
	                            </div>
	                            )
	                    })}
	                </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;