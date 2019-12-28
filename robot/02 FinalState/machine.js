import { createMachine, state, transition, state as final } from 'robot3';

export const machine = createMachine({
    pending: state( transition('done', 'finished') ),
    finished: final()
});
