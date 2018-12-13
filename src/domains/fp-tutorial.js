import times from 'lodash/times';

export class Tutorial {

  Loop5Times() {
    let result = [];
    for (var i = 0; i < 5; i++) {
      result.push(i);
    }

    return result;
  }

  deeplyProp(data) {
    let result = []

    result.push("dog1");
    result.push("dog2");

    return result;
  }
}