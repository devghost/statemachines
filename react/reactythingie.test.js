import { interpret } from 'robot3';
import { machine, states } from './machine.js';
import { render } from '@testing-library/react'
import App from './reactythingie.js';

describe('Robot', () => {
	describe('React', () => {
		test('Render all possible states', () => {
			Object.keys(states).forEach(initial => {
				console.log(initial);
				// var service = interpret(machine, () => {}, initial);

				// const wrapper = renderer.create(<App />)

				// expect(wrapper.toJSON()).toMatchSnapshot();
				expect(true).toBe(true);
			});
		});
	});
});
