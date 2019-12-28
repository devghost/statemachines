import { createMachine, transition, state, immediate, guard, state as final } from 'robot3';

const canSubmit = (ctx) => ctx.login && ctx.password;

export const machineDefinition = {
    idle: state( transition('submit', 'validate') ),
    validate: state(
        immediate('submission', guard(canSubmit)),
        immediate('idle')
    ),
    submission: final()
}

export const machine = createMachine({
    idle: state( transition('submit', 'validate') ),
    validate: state(
        immediate('submission', guard(canSubmit)),
        immediate('idle')
    ),
    submission: final()
});
