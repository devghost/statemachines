import React from 'react';
import { useMachine } from 'react-robot';
import machine from './machine.js';

function App() {
    const [current, send] = useMachine(machine);

    return (
        <>
            <div>State: {current.name}</div>
            <button onClick={() => send('toggle')}>
                Toggle
            </button>
        </>
    );
}
