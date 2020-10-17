import { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: null
        };
    }

renderCampsite(campsite){
    return(
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardTitle>{campsite.name}</CardTitle>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>   
        </div>
    ); 
}

renderComments(comments) {
    if(comments) {
       return(
            <div className ="col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map(comment => {
                    return( 
                    {comment.text}
                )
                }
            </div>
       ); 
    }
    return <div></div>
}

    render() {
        if(this.props.campsite) {
        return(
             <div className="row">
                 {renderCampsite(this.props.campsite)}
             </div>
        );            
       }
       return <div></div>     
    }               
}

       


export default CampsiteInfo;