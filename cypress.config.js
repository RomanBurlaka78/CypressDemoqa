const { defineConfig } = require("cypress");
// const { resolve, reject } = require("cypress/types/bluebird");
// const { error } = require("cypress/types/jquery");
// const { result } = require("cypress/types/lodash");
// const mysql = require('mysql');


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
 
  
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    defaultCommandTimeout: 7000,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      // on("task", {
      //   queryDB:(query)=>{
      //     return queryTestDb(query, config);
      //   }
      // })
    },
    // "env":{
    //   "db": {
    //     "server": "127.0.01",
    //      user:"root",
    //      password: '',
    //      dababase: ''
    //   }
    // }

    
    
  
  },
});

// function queryTestDb(query, config) {
//   const connection = mysql.createConnection(config.env.db);
//   connection.connect();

//   // return new Promise((resolve, reject)=> {
//   //   connection.query(query, (error, results) => {
//   //   if(error) reject(error);
//   //   else {
//   //     connection.end();
//   //     return resolve(results)
//   //   }
    
    
//   // })
//   // })
// }
