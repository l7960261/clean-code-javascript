export class Tutorial {

  constructor() {
    this.taskProcessor = [];
  }

  Loop5Times() {
    let result = [];
    for (var i = 0; i < 5; i++) {
      result.push(i);
    }

    return result;
  }

  deeplyProp(data) {
    let result = []

    for (var i = 0; i < data.length; i++) {
      result.push(data[i].pets[0].name);
    }

    return result;
  }

  getUniqueValuesOfSamePrefix() {
    let result = []

    for (var i = 0; i < 3; i++) {
      result.push('prefix_' + (i + 1).toString());
    }

    return result;
  }

  removeFalsyValues(data) {
    let result = [];

    for (let index = 0; index < data.length; index++) {
      if (!!data[index]) {
        result.push(data[index]);
      }
    }

    return result;
  }

  executeTask123() {
    const tasks = [this.task1, this.task2, this.task3];

    return Promise.all(tasks.map(i => i()));
  }

  sequenceTask123() {
    // TODO: sequenceTask123
  }

  task1() {
    const name = 'task1';
    const delay = 3000;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`${name} Done.`);
        resolve(name);
      }, delay)
    });
  }

  task2() {
    const name = 'task2';
    const delay = 1000;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`${name} Done.`);
        resolve(name);
      }, delay)
    });
  }

  task3() {
    const name = 'task3';
    const delay = 2500;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`${name} Done.`);
        resolve(name);
      }, delay)
    });
  }
}