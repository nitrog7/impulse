'use strict';

import {inject} from 'aurelia-framework';
import ListService from '../../services/list';

@inject(ListService)
export class ListView {
  constructor(ListService) {
    ListService.getList().then((data) => {
      console.log('getList::data', data);
    });
  }
}

