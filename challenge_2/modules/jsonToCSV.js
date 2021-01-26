exports.convertCSV = function (arr) {
  let headers = Object.keys(arr[0]).join(',') + '\n';

  let records = '';

  for (let item of arr) {
    records += item.firstName + ','
      + item.lastName + ',' + item.county + ',' + item.city
      + ',' + item.role + ',' + item.sales + '\n';
  }
  return headers + records;
}
