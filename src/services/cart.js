'use strict';

import 'fetch';
import $ from 'jquery';
import Promise from 'bluebird';
import falcor from 'falcor/dist/falcor.browser.min';

export class CartService {
  constructor() {
    this.content = false;

    // Create Falcor model
    this.model = new falcor.Model({source: new falcor.HttpDataSource('/model.json')});
  }

  getList() {
    return new Promise((resolve, reject) => {
      this.model.get('welcome.["header", "first", "last"]')
        .then((res) => {
          resolve(res.json.welcome);
        },
        (err) => {
          reject(err);
        }
      );
    });
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