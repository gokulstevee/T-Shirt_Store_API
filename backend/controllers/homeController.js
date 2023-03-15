/**
 *
 *  This is an example file for initial checkup
 *
 *
 * **/

const BigPromise = require('../middlewares/bigPromise');

exports.home = BigPromise(async (req, res) => {
  res.status(200).json({
    success: true,
    greeting: 'Hello',
  });
});
