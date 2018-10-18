import {
    FizzBuzz
} from "../domain/fizzbuzz";

describe('fizzbuzz', () => {
    let instance;
    beforeEach(() => {
        instance = new FizzBuzz();
    });

    it('pass 1 should print 1', () => {
        expect(instance.print(1)).toBe(1);
    });
});