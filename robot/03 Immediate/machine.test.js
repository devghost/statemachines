import { machine } from './machine.js';
import { interpret } from 'robot3';

describe('Robot', () => {
	describe('Immediate', () => {
		test('Machine initial state is work', () => {
			var service = interpret(machine, () => {});

			expect(service.machine.current).toBe('work');
		});
	});
});
