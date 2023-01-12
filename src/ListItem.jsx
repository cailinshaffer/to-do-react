import React, {Component} from 'react'


export default class ListItem extends Component {
    render() {

        // let newArray = oldArray.map((item, index) => {
        //     /* how to change each item in the array */
        // })


        return(
        
        <li>{this.props.task}</li>
        
        )
    }
}

