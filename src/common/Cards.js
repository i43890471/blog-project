import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const style = {
    height: 150,
  };

class Cardssample extends React.Component{
render(){

    const { author } = this.props;
    console.log('AUTHOR: ', author);
    return(
        <Card>
            <CardHeader
            avatar="images/jsa-128.jpg"
            actAsExpander={true}
            showExpandableButton={true}
            />
            <CardMedia overlay={<CardTitle title={this.props.post.title} subtitle={author ? author.username : ''} />}>
                <img style={style} src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" alt="" />
                </CardMedia>
                
            <CardActions>
            <div>
            
                
            </div>
            </CardActions>
            <CardText expandable={true}>
            {this.props.post.content}
            </CardText>
        </Card>

    );
}

}


export default Cardssample;

/*<figure>
                <blockquote >
                {this.props.post.title}.
                </blockquote>
            </figure> */