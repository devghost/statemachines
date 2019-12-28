import { machine } from './machine.js';
import { interpret } from 'robot3';

describe('Robot', () => {
	describe('Getting started', () => {
		test('Machine initial state is pending', () => {
			var service = interpret(machine, () => {});

			expect(service.machine.current).toBe('pending');
		});

		test('Machine will not transition if when sending faulty transition', () => {
			var service = interpret(machine, () => {});

			service.send('does not exist');

			expect(service.machine.current).toBe('pending');
		});

		test('Machine will enter finished state when calling done ', () => {
			var service = interpret(machine, () => {});

			service.send('done');

			expect(service.machine.current).toBe('finished');
		});

		test('Machine calling multiple actions will not exit final finished state ', () => {
			var service = interpret(machine, () => {});

			service.send('done');
			service.send('done');
			service.send('pending');

			expect(service.machine.current).toBe('finished');
		});
	});
});
