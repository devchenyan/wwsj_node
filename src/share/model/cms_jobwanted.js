'use strict';
/**
 * relation model
 */
export default class extends think.model.relation {
  /**
   * init
   * @param  {} args []
   * @return {}         []
   */
  init(...args){
    super.init(...args);

    this.relation = {
      user: {
        type: think.model.BELONG_TO,
        model: 'admin_user',
        key: 'username',
        fKey: 'username',
        field: 'username, nickname, avatar'
      }
    }
  }
}