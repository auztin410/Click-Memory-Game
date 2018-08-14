import React from "react";
import Characters from "../../friends.json";

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
                        alt={Characters.name}
                        src={Characters.image}
                    />
                </div>
                <div className="content">
                    <ul>
                        <li>
                            <strong>Name:</strong> {Characters.name}
                        </li>
                        <li>
                            <strong>Occupation:</strong> {Characters.occupation}
                        </li>
                        <li>
                            <strong>Quote:</strong> {Characters.quote}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Counter;