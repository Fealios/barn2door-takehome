import { Injectable } from '@angular/core';

@Injectable()
export class ObjectUtilities {
  constructor() {}

  flatten(ob) {
    let toReturn = {};

    for (const i in ob) {
      if (!ob.hasOwnProperty(i)) continue;

      if (typeof ob[i] == 'object' && ob[i] !== null) {
        const flatObject = this.flatten(ob[i]);
        for (const x in flatObject) {
          if (!flatObject.hasOwnProperty(x)) continue;

          toReturn[i + '.' + x] = flatObject[x];
        }
      } else {
        toReturn[i] = ob[i];
      }
    }
    return toReturn;
  }
}
