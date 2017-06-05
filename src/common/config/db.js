'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  adapter: {
    mysql: {
      host: '5900bb1f50496.gz.cdb.myqcloud.com',
      port: '15240',
      database: 'wanwan',
      user: 'cdb_outerroot',
      password: 'cy!@#123456',
      prefix: 'jj_',
      encoding: 'utf8'
    },
    mongo: {

    }
  }
};