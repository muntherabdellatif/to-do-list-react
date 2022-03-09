import React, { Component } from 'react';
import { AiFillDelete } from "react-icons/ai";

class ListItem extends Component {
    render() {
        return (
            <div className='list-item'>
                <div>
                    <input
                    type="checkbox"
                    name="field name"
                    value={this.props.state}
                    />
                    <label>{this.props.name}</label>
                </div>
                <AiFillDelete 
                style={{color: 'red', fontSize: '20px'}}
                onClick={()=> this.props.onDelete(this.props.name)}
                />
            </div>
        );
    }
}

export default ListItem;