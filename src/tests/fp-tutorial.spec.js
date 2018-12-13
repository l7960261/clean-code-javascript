import {
  Tutorial
} from '../domains/fp-tutorial'

describe('Functional Programming Tutorial', () => {
  let instance;

  beforeEach(() => {
    instance = new Tutorial();
  });

  it('Call Loop5Times then return [0, 1, 2, 3, 4]', () => {
    const result = instance.Loop5Times();
    expect(result.length).toBe(5);
    expect(result).toEqual([0, 1, 2, 3, 4]);
  });

  it('Call deeplyProp then return ["dog1", "dog2"]', () => {
    const data = [{
      "owner": "Colin",
      "pets": [{ "name": "dog1" }, { "name": "cat1" }]
    }, {
      "owner": "John",
      "pets": [{ "name": "dog2" }, { "name": "cat2" }]
    }];
    const result = instance.deeplyProp(data);
    expect(result.length).toBe(2);
    expect(result).toEqual(["dog1", "dog2"]);
  });

  it('Call getUniqueValuesOfSamePrefix then return ["prefix_1", "prefix_2", "prefix_3"]', () => {
    const result = instance.getUniqueValuesOfSamePrefix();

    expect(result.length).toBe(3);
    expect(result).toEqual(["prefix_1", "prefix_2", "prefix_3"]);
  });

  it('Call removeFalsyValues then return ["dog1", "dog2"]', () => {
    const data = [0, 1, false, 2, '', 3];
    const result = instance.removeFalsyValues(data);
    expect(result.length).toBe(3);
    expect(result).toEqual([1, 2, 3]);
  });

  it('Call executeTask123 get ["task1", "task2", "task3"]', () => {
    return instance.executeTask123()
      .then(value => expect(value).toEqual(["task1", "task2", "task3"]))
  });

  it('Call sequenceTask123 get ["task1", "task2", "task3"]', () => {
    //TODO: how to prove 
  });
});