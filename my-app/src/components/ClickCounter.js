import React from "react";


class ClickCounter extends React.Component{
    
    state={
        counter:0
    };
    
    handleClick =() => {
        
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }));
    }
    
    render() {
        
        return(
            <div>
                <p> Counter: {this.state.counter}</p>
                <button onClick={this.handleClick}>
                    Click to count up
                    
                </button>
                
                
            </div>
            
        )
    }
    
}

export default ClickCounter;