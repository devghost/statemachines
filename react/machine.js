import { createMachine, state, transition } from 'robot3';

const states = {
  off: state( transition('toggle', 'on') ),
  on: state( transition('toggle', 'off') )
};

const machine = createMachine(states);

