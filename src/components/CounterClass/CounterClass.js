import React from 'react';
import propTypes from 'prop-types'; 
import './CounterClass.scss';

export default class extends React.Component {
    
static propTypes = {
    min: propTypes.number,
    max: propTypes.number
}

    constructor(props) {
        super(props);
        this.state = {
            value: 0, 
        };

        this.handleChange = this.handleChange;
        this.decrease = this.decrease;
        this.increase = this.increase;
        this.validateInput = this.validateInput;
    }

    validateInput = (value) =>  {
        if (inputVal && inputVal > this.props.min && inputVal < this.props.max) {
           document.getElementsByTagName('button').disabled = false
        }  
    }

    handleChange = (event) =>  {
        let inputVal = Number(event.target.value)
        if (inputVal && inputVal >= this.props.min && inputVal <= this.props.max) {
            this.setState({
                value: inputVal
            });
        }  
    }


    decrease = (event) => {
        this.validateInput(this.state.value)
        if (this.state.value > this.props.min) {
            this.setState({
                value: this.state.value - 1
            })
        }
       else  {
           event.target.disabled = true
       }
    };

    increase = (event) => {
        if (this.state.value < this.props.max) {
            this.setState({
                value: this.state.value + 1
            })
        }
       else  {
           event.target.disabled = true
       }
    };



    render() {
        console.log(this.state.value, this.state.valid)
       

        return (
            <div className='CounterClass'>
                <button className='CounterClass__button' onClick={this.decrease}>-</button>
                <input className='CounterClass__input' type='text' value={this.state.value} onChange={this.handleChange} />
                <button className='CounterClass__button' onClick={this.increase}>+</button>
            </div>
        )
    }
}
