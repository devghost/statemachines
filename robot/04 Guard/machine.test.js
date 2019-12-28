import { machine, machineDefinition } from './machine.js';
import { createMachine, interpret } from 'robot3';

describe('Robot', () => {
	describe('Guard', () => {
		test('Machine initial state is idle', () => {
			var service = interpret(machine, () => {});

			expect(service.machine.current).toBe('idle');
		});

		test('Machine state is idle after failed validation', () => {
			var service = interpret(machine, () => {});

			const initialContext = {
				login: '',
				password: ''
			};

			const context = ctx => ({
				login: ctx.login,
				password: ctx.password
			});

			const aMachine = createMachine(machineDefinition, context);
			var service = interpret(aMachine, () => {}, initialContext);

			service.send('submit');

			expect(service.machine.current).toBe('idle');
		});

		test('Machine state is submission after successful validation', () => {
			const initialContext = {
				login: 'jane_doe',
				password: 's3cr3t'
			};

			const context = ctx => ({
				login: ctx.login,
				password: ctx.password
			});

			const aMachine = createMachine(machineDefinition, context);
			var service = interpret(aMachine, () => {}, initialContext);

			service.send('submit');

			expect(service.machine.current).toBe('submission');
		});
	});
});
