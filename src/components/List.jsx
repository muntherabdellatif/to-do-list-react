import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
    render() {
        return (
            <div>
                {(this.props.list).map((list,index)=>{
                    return (<ListItem
                            key={index}
                            id={index}
                            name={list.taskName}
                            state={list.state}
                            onDelete={this.props.onDelete}
                            />)
                })}
            </div>
        );
    }
}

export default List;