'use strict';
/**
 * template config
 */
export default {
  type: 'nunjucks',
  content_type: 'text/html',
  file_ext: '.html',
  file_depr: '_',
  root_path: think.ROOT_PATH + '/view',
  adapter: {
      nunjucks: {
          prerender: function(nunjucks, env){
              //添加一个过滤器，这样可以在模板里使用了
              env.addFilter('filter_foo', function(){

              });
          }
      }
  }
};