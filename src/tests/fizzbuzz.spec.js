import {
  FizzBuzz
} from "../domains/fizzbuzz";

describe('fizzbuzz', () => {
  let instance;
  beforeEach(() => {
    instance = new FizzBuzz();
  });

  it('pass any normal number should print input number', () => {
    expect(instance.print(1)).toBe('1');
    expect(instance.print(2)).toBe('2');
  });

  it('pass 3 should print Fizz', () => {
    expect(instance.print(3)).toBe('Fizz');
    expect(instance.print(6)).toBe('Fizz');
  });

  it('pass 5 should print Buzz', () => {
    expect(instance.print(5)).toBe('Buzz');
    expect(instance.print(10)).toBe('Buzz');
  });

  it('pass 15 should print FizzBuzz', () => {
    expect(instance.print(15)).toBe('FizzBuzz');
    expect(instance.print(30)).toBe('FizzBuzz');
  });
});