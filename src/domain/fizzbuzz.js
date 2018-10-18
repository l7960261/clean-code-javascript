export class FizzBuzz {
    print(input) {
        const TIMES_OF_15 = 15;
        const TIMES_OF_5 = 5;
        const TIMES_OF_3 = 3;
        const NORMAL_NUMBER = 1;
        const resource = [
            [TIMES_OF_15, () => 'FizzBuzz'],
            [TIMES_OF_5, () => 'Buzz'],
            [TIMES_OF_3, () => 'Fizz'],
            [NORMAL_NUMBER, () => input.toString()]
        ];

        return resource.find(r => input % r[0] === 0)[1]();
    }
}