const app = require('./app');
require('dotenv').config();


//running the server in the given port
app.listen(process.env.PORT, () => {
  console.log(`Server is running at${process.env.PORT}`);
});
