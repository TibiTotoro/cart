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
            increaseDisabled: false,
            decreaseDisabled: false
        };

        this.handleChange = this.handleChange;
        this.decrease = this.decrease;
        this.increase = this.increase;
        this.validateInput = this.validateInput;
    }

    validateInput = (value) => {
        console.log( this.state.value, this.state.increaseDisabled,   this.state.decreaseDisabled )
        if (value > this.props.min && value < this.props.max) {
            this.setState({
                increaseDisabled: false,
                decreaseDisabled: false
            })
        }
        else if (value <= this.props.min) {
            this.setState({
                decreaseDisabled: true
            })
        }
        else if (value >= this.props.max) {
            this.setState({
                increaseDisabled: true
            })
        }
    }

    decrease = () => {
        if (this.state.value > this.props.min) {
            this.setState({
                value: this.state.value - 1
            })
          this.validateInput(this.state.value)
        }
    };


    increase = () => {
     
        if (this.state.value < this.props.max) {
            this.setState({
                value: this.state.value + 1
            })
            this.validateInput(this.state.value)
        }
       
    };

    
    handleChange = (event) => {
        let inputVal = Number(event.target.value)
        if (inputVal && inputVal > this.props.min && inputVal < this.props.max) {
            this.setState({
                value: inputVal,
                decreaseDisabled: false,
                increaseDisabled: false
            });
        }
        else if (inputVal && inputVal <= this.props.min) {
            console.log('test')
            this.setState({
                value: inputVal,
                decreaseDisabled: true
            });
        }
        else if (inputVal && inputVal >= this.props.max) {
            this.setState({
                value: this.props.max,
                increaseDisabled: true
            });
        }
    }


    componentDidUpdate(prevProps, prevState) {
        console.log('prev conversation: ', prevState.value,  prevState.decreaseDisabled, prevState.increaseDisabled);
        console.log('new conversation: ', this.state.value, this.state.decreaseDisabled, this.state.increaseDisabled);
      }

    render() {
        return (
            <div className='CounterClass'>
                <button className='CounterClass__button' onClick={this.decrease} disabled={this.state.decreaseDisabled}>-</button>
                <input className='CounterClass__input' type='text' value={this.state.value}  onChange={this.handleChange} />
                <button className='CounterClass__button' onClick={this.increase} disabled={this.state.increaseDisabled}>+</button>
                <div className='CounterClass__text'>Введите число от {this.props.min} до {this.props.max}</div>
            </div>
        )
    }
}
