import { promiseService } from './machine.js';

describe('XState', () => {
    describe('Getting started', () => {
        test('Machine initial state is pending', () => {
            promiseService.start();

            expect(promiseService.state.value).toBe('pending');
        });

        test('Machine is in resolved state after calling RESOLVE', () => {
            promiseService.start();
            promiseService.send('RESOLVE');

            expect(promiseService.state.value).toBe('resolved');
        });

        test('Machine is in rejected state after calling REJFECT', () => {
            promiseService.start();
            promiseService.send('REJECT');

            expect(promiseService.state.value).toBe('rejected');
        });
    });
});
