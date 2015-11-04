'use strict';

import config from '../gulp/config';
import oriento from 'oriento';

let server = oriento(config.orientdb.auth);
let db = server.use(config.orientdb.database);

let routes = [
  {
    route: 'items[{ranges:ranges}].["cost", "added", "price", "name", "modified", "description"]',
    get: function(pathSet) {
      let ranges = pathSet.ranges;
      ranges.map(range => {
        let from = parseInt(range.from);
        let limit = parseInt(range.from) - parseInt(range.to);
        let sql = 'SELECT ' + pathSet[2].join(',') + ' FROM Items SKIP ' + from + ' LIMIT ' + limit;
        console.log('sql', sql);

        db.query(sql)
          .then((results)=>  {
            console.log(results);


            //let keys = pathSet[1];
            //let example = {
            //  header: 'Welcome to the Aurelia Falcor Navigation App!',
            //  first: 'Leia',
            //  last: 'Skywalker'
            //};
            let data = [];

            for(let g=0, l=results.length; g<l; g++) {
              let item = results[g];
              //data.push({path: [pathSet[0], k], value: example[k]});
            }

            //return keys.map(k => {
            //  return {path: [pathSet[0], k], value: example[k]};
            //});
          }, (error) => {
            console.log('error', error);
          });
      });
    }
  }
];

export default routes;