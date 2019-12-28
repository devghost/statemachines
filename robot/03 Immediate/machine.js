import { createMachine, state, immediate } from 'robot3';

export const machine = createMachine({
    breakfast: state( immediate('work') ),
    work: state()
});
