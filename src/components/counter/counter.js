import React from 'react';

const Counter = ({fruit, setFruit, name}) => {
    return (
        <div>
            <h1>{name}</h1>
            <button disabled={fruit === -0} onClick={() => setFruit(fruit - 1)}>-</button>
            {fruit}
            <button onClick={() => setFruit(fruit + 1)}>+</button>
        </div>
    );
};

export default  Counter;