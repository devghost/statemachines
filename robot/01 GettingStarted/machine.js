import { createMachine, state, transition } from 'robot3';

export const machine = createMachine({
  inactive: state( transition('toggle', 'active') ),
  active: state( transition('toggle', 'inactive') )
});
