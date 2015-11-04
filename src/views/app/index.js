'use strict';

export class App {
  configureRouter(config, router) {
    config.title = 'Impulse';
    config.options.pushState = true;
    config.map([
      {route: ['', 'list'], name: 'list', moduleId: 'views/list/index', nav: true, title: 'List'},
      {route: ['cart'], name: 'cart', moduleId: 'views/cart/index', nav: true, title: 'Cart'}
    ]);

    this.router = router;
  }
}
