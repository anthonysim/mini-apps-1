const traverse = function (json) {
    let result = [];
    let record = {}

    for (let key in json) {
        if (!Array.isArray(json[key])) {
            record[key] = json[key];
        }
    }

    for (let child of json.children) {
        result = result.concat(traverse(child));
    }

    result.push(record);
    return result;
}

module.exports.traverse = traverse;