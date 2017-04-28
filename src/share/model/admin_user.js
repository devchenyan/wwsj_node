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
      admin_upload: {
        type: think.model.HAS_ONE,
        name: 'avatar',
        key: 'avatar',
        fKey: 'id',
        field: 'id, path'
      }
    }
  }
}