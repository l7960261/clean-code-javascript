import times from 'lodash/times';
import map from 'lodash/map';
import uniqueId from 'lodash/uniqueId';

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
}