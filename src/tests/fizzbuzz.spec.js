import {
  FizzBuzz
} from "../domain/fizzbuzz";

describe('fizzbuzz', () => {
  let instance;
  beforeEach(() => {
    instance = new FizzBuzz();
  });

  it('pass any normal number should print input number', () => {
    expect(instance.print(1)).toBe('1');
    expect(instance.print(2)).toBe('2');
  });
});