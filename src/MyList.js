import React, {Component} from 'react'

import ListItem from './ListItem'

// theList []

class MyList extends Component {
    state= {
        taskArray: this.props.theList,
        newItem: ''
    }

clearList = () => {
    this.setState({
        taskArray: []
    })
}

//input hanle for controlled form
handleChange = e => {
    console.log("handle change")
    this.setState({
        newItem: e.target.value
    })
}

//submission event handler for the for
addItem = e => {
    e.preventDefault()
    console.log("the form has had a submssion event")
    const yourArray = this.state.taskArray
    yourArray.push(this.state.newItem)
    this.setState({
        taskArray: yourArray
    })
    this.setState(prevState =>{
        return {
            taskArray: [...prevState.taskArray, prevState.newItem],
            newItem: ''
        }
    })
}


    render() {
        const todosComponents = this.state.taskArray.map((item, idx) => {
            return <ListItem 
            task={item}
            key={`listitem-${idx}`}
            /> 
        })
        return (
            <>
            <h1>Things I should stop procrastinating: </h1>

        <form onSubmit={this.addItem}>
        <input 
        id='newItem'
        type='type'
        placeholder='enter procastination'
        onChange={this.handleChange}
        calue={this.state.newItem}
        />

        <button type='submit'>Start procrastinating</button>
    </form>
      


    

            <ul>
               
            {todosComponents}
                
            </ul>
            <button onClick={this.clearList}> Finished List</button>
            </>
        )
    }
}

export default MyList;
