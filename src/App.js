import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ],
    };

    constructor() {
        super();
        console.log("App - Constructor");
    }

    componentDidMount() {
        // Ajax call
        //this.setState({})
        console.log("App - Mounted");
    }

    handleIncrement = (counter) => {
        console.log("Increment", counter);
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {
            ...counter,
        };
        counters[index].value++;
        this.setState({
            counters,
        });
    };

    handleReset = () => {
        const counters = this.state.counters.map((cnt) => {
            cnt.value = 0;
            return cnt;
        });
        this.setState({
            counters,
        });
    };

    handleDelete = (counterId) => {
        console.log("Delete", counterId);
        const counters = this.state.counters.filter(
            (cnt) => cnt.id !== counterId
        );
        this.setState({
            counters,
        });
    };

    render() {
        console.log("App - Rendered");
        return (
            <React.Fragment>
                <Navbar
                    totalCounters={
                        this.state.counters.filter((cnt) => cnt.value > 0)
                            .length
                    }
                />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onDelete={this.handleDelete}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                    />
                </main>{" "}
            </React.Fragment>
        );
    }
}

export default App;
