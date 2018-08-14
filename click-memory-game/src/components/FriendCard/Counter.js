import React from "react";
import Characters from "../../friends.json";


console.log(Characters);

class Counter extends React.Component {
    state = {
        count: 0
    };

    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
    }

    

    render() {
        return (            
                <div className="img-container">
                {Characters.map((character) => {
                    return(
                        <img
                        alt={character.name}
                        src={character.image}
                        key={character.name}
                        height="200px"
                        width="200px"
                    />
                    )
                    
                    // {console.log(character.image)}
                })}
                </div>              
            
        );
    }
}

export default Counter;