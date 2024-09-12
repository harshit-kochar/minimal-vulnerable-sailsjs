// api/controllers/HeaderController.js

const _ = require('lodash');

module.exports = {
  handleRequest: function (req, res) {
    // Get request headers
    const requestHeaders = req.headers;

    const userAgent = requestHeaders['user-agent'];

    // Use lodash template (though it's not actually doing anything in this case)
    _.template('', { variable: userAgent })();

    // Respond with a JSON object
    return res.json({
      message: 'Headers processed successfully'
    });
  }
};
