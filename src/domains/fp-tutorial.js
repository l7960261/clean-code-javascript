import times from 'lodash/times';
import map from 'lodash/map';

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
}