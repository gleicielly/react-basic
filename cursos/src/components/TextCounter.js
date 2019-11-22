import React, { Component } from 'react';

class TextCounter extends Component {
    static defaultProps = {
        limit: 40
    }
    constructor(props){
        super(props);        
        this.state = {
            totalChars: 0,
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event){
        const element = event.target,
                text = element.value
        
        if(text.length <= this.props.limit){
            this.setState({
                totalChars: element.value.length,
                text
            });
        }
        
    }

    render() {
        const {state, props} = this;
        //const {props} = this.props;
        //não pode executar algo que altere o state dentro do render, pois causa um loop
        // this.setState({
        //     totalChars: 5
        // })
        return (
            <div>
                <h1>Meu contador</h1>
                <textarea onChange={this.handleChange} value={state.text}/>
                <div>
                    <strong>Total: </strong> { state.totalChars } / { props.limit }
                </div>
            </div>
        )             
    }
}

export default TextCounter;