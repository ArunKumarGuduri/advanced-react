import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
    state = {
        answer: 30
    }
    asyncFunc = () => {
        return Promise.resolve(40);
    }
    async componentDidMount() {
        this.setState({
            answer: await this.asyncFunc()
        })
    }
    render() {
        return (<React.StrictMode>
            <div>Hello React Class components -- {this.state.answer}</div>
        </React.StrictMode>
        )

    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'))