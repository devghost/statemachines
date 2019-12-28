import { machine } from './machine.js';
import { interpret } from 'robot3';

describe('Robot', () => {
	describe('Getting started', () => {
		test('Machine initial state is inactive', () => {
			var service = interpret(machine, () => {});

			expect(service.machine.current).toBe('inactive');
		});

		test('Machine can change state', () => {
			var service = interpret(machine, () => {});

			service.send('toggle');

			expect(service.machine.current).toBe('active');
		});

		test('Machine listens to onChange events', () => {
			var machineChanged = false;
			var service = interpret(machine, () => { machineChanged = true });

			expect(machineChanged).toBe(false);

			service.send('toggle');

			expect(machineChanged).toBe(true);
		});
	});
});
