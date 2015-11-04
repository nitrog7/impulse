'use strict';

import 'fetch';
import $ from 'jquery';
import Promise from 'bluebird';
import falcor from 'falcor/dist/falcor.browser.min';

class ListService {
  constructor() {
    this.content = false;

    // Create Falcor model
    this.model = new falcor.Model({source: new falcor.HttpDataSource('/model.json')});
  }

  getList() {
    return this.model.get('items[0...5].["name", "price", "description"]')
      .then((res) => {
        return res.json.welcome;
      },
      (err) => {
        return err;
      }
    );
  }

  getItem() {
    return this.model.get('welcome.["header", "first", "last"]')
      .then((res) => {
        return res.json.welcome;
      },
      (err) => {
        return err;
      }
    );
  }
}

export default ListService;
