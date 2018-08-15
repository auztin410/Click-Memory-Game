import React from "react";
import Characters from "../../friends.json";


console.log(Characters);


class Counter extends React.Component {
    state = {
        count: 0
    };

    // Shuffle = (o) => {
    //     for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    //     return o;
    // };
    
    

    handleClick = () => {
        this.setState({count: this.state.count + 1})
        console.log(this.state.count);
        console.log(this);
        // if(this.character.clicked === 1){
        //     alert("You clicked the same one twice. Try again!");
        // }
        // else if(this.character.click < 1){
        //     this.character.clicked = 1
        //     this.setState({ count: this.state.count + 1 });
        //     if(this.state.count = 8){
        //         alert("You won!");
        //     }
        //     else{Shuffle(friends);}
        // }
        
        
    }

    

    render() {
        return (            
                <div className="img-container">
                <h1>
                    Score: {this.state.count}
                </h1>
                {Characters.map((character) => {
                    return(
                        <img
                        alt={character.name}
                        src={character.image}
                        key={character.name}
                        height="200px"
                        width="200px"
                        onClick = {this.handleClick}
                        clicked = "0"
                    />
                    )
                    
                    
                })}
                </div>              
            
        );
    }
}

export default Counter;