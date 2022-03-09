import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input:""
        };
    }

    handleChange = (event)=>{
        this.setState({input:event.target.value})
    }

    render() {
        return (
            <form className='form' onSubmit={this.props.onSubmit}>
                <input type="text" onChange={this.handleChange} name='input'value={this.state.input} />
                <button type="submit" >add</button>
            </form>
        );
    }
}

export default Form;