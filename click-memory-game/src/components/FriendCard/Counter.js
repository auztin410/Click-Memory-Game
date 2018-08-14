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
            <div className="card">
                <div className="img-container">
                    <img
                        alt={Characters[0].name}
                        src={Characters[0].image}
                    />
                </div>
                <div className="content">
                    <ul>
                        <li>
                            <strong>Name:</strong> {Characters[0].name}
                        </li>
                        <li>
                            <strong>Occupation:</strong> {Characters[0].occupation}
                        </li>
                        <li>
                            <strong>Quote:</strong> {Characters[0].quote}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Counter;