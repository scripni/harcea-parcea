'use strict';

class RethinkDbConfig {
  constructor(env, host, port, db) {
    this.env = env;
    this.host = host;
    this.port = port;
    this.db = db;
  }
}

const config = {
  'development':  new RethinkDbConfig('development', 'localhost', 28015, 'hp_development'),
  'test':         new RethinkDbConfig('test', 'localhost', 28015, 'hp_test'),
  'production':   new RethinkDbConfig('production', 'localhost', 28015, 'hp_production'),
};


module.exports = config[process.env.NODE_ENV];