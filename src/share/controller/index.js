'use strict';

import Base from './base.js';

const urlPrefix= "http://eswjdg.com/";

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    return this.display();
  }

  async buyAction(){
    let instance = this.model('cms_buyer');
    let buy = await instance.where({id : this.get('id')}).find();
    let user = buy.user;

    this.assign({
      avatarPath: urlPrefix + user.avatar.path,
      nickname: user.nickname,

      addtime: buy.addtime,
      description: buy.description,

      brand: buy.brand,
      cartype: buy.cartype,
      version: buy.version,

      contacts: buy.contacts,
      phone: buy.phone,
      address: buy.address,
    });
    return this.display();
    }
}