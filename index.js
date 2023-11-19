import app from './app.js';

import value from './const/const.js';

const main = (() => {
    const server = app.listen( value.RUN_PORT || 5000 ); //instancia 
    console.log("Server activo", value.RUN_PORT || 5000);
    server.timeout = 600000;
})();