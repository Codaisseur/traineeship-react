import React from 'react';
import Counter from './Counter';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Counters</h1>
                <Counter />
                <Counter />
                <Counter />
            </div>
        );
    }
}

export default App;