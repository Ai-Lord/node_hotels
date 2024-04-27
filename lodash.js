var _ = require('lodash');

var data = ["person", "person", 1, 2, 1, 2, 'name', 'age', '2']
var filter = _.uniq(data);
console.log(filter);