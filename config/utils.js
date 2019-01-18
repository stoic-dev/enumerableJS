const path = require('path');

const root = (function(pathUtil) {
    const rootPath = pathUtil.resolve(__dirname, '../');
    return pathUtil.join.bind(pathUtil, rootPath);
})(path);

module.exports = {
    root
};
