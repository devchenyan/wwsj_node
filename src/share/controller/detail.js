'use strict';

import Base from './base.js';

const urlPrefix = "http://eswjdg.com/";

export default class extends Base {
  // 帮助方法
  getAvatarUrl(path){
    return path ? urlPrefix + path : "http://eswjdg.com/head-p.png";
  }
  getPhoneNum(phone){
    return phone.substring(0, 3) + "****" + phone.substring(7);
  }
  getAddtime(addtime){
    // return new Date(addtime * 1000).toLocaleDateString();
    return new Date(addtime * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
  }

  // 买车信息
  async buyAction(){
    let instance = this.model('cms_buyer');
    let obj = await instance.where({id: this.get('id')}).find();
    let user = obj.user;

    this.assign({
      avatarPath: this.getAvatarUrl(user.avatar.path),
      nickname: user.nickname,

      addtime: this.getAddtime(obj.addtime),
      description: obj.description,

      brand: obj.brand,
      cartype: obj.cartype,
      version: obj.version,

      contacts: obj.contacts,
      phone: this.getPhoneNum(obj.phone),// + "下载App查看",
      address: obj.address,
    });
    return this.display();
  }

  // 求租信息
  async rentAction(){
    let instance = this.model('cms_buyer');
    let obj = await instance.where({id: this.get('id')}).find();
    let user = obj.user;

    this.assign({
      avatarPath: this.getAvatarUrl(user.avatar.path),
      nickname: user.nickname,

      addtime: this.getAddtime(obj.addtime),
      description: obj.description,

      brand: obj.brand,
      cartype: obj.cartype,
      version: obj.version,

      contacts: obj.contacts,
      phone: this.getPhoneNum(obj.phone),// + "下载App查看",
      address: obj.address,
    });
    return this.display();
  }

  // 卖车信息
  async sellAction(){
    let instance = this.model('cms_seller');
    let obj = await instance.where({id: this.get('id')}).find();
    let user = obj.user;

    let images = obj.images.split(",");
    let imageUrls = [];

    let uploadInstance = this.model('admin_upload');

    if (images.length) {
      for (let i = 0; i < images.length; i++) {
        let upload = await uploadInstance.where({id: images[i]}).find();
        imageUrls.push(urlPrefix + upload.path);
      }
    }

    this.assign({
      avatarPath: this.getAvatarUrl(user.avatar.path),
      nickname: user.nickname,

      addtime: this.getAddtime(obj.addtime),
      description: obj.description,

      brand: obj.brand,
      cartype: obj.cartype,
      version: obj.version,

      price: obj.price,
      madetime: obj.madetime,
      worktime: obj.worktime,

      contacts: obj.contacts,
      phone: this.getPhoneNum(obj.phone),// + "下载App查看",
      address: obj.address,

      imageUrls: imageUrls
    });
    return this.display();
  }

  // 出租信息
  async leaseAction(){
    let instance = this.model('cms_seller');
    let obj = await instance.where({id: this.get('id')}).find();
    let user = obj.user;

    let images = obj.images.split(",");
    let imageUrls = [];

    let uploadInstance = this.model('admin_upload');

    if (images.length) {
      for (let i = 0; i < images.length; i++) {
        let upload = await uploadInstance.where({id: images[i]}).find();
        imageUrls.push(urlPrefix + upload.path);
      }
    }

    this.assign({
      avatarPath: this.getAvatarUrl(user.avatar.path),
      nickname: user.nickname,

      addtime: this.getAddtime(obj.addtime),
      description: obj.description,

      brand: obj.brand,
      cartype: obj.cartype,
      version: obj.version,

      price: obj.price,
      madetime: obj.madetime,
      worktime: obj.worktime,

      contacts: obj.contacts,
      phone: this.getPhoneNum(obj.phone),// + "下载App查看",
      address: obj.address,

      imageUrls: imageUrls
    });
    return this.display();
  }

  // 招聘信息
  async recruitAction(){
    let instance = this.model('cms_recruit');
    let obj = await instance.where({id: this.get('id')}).find();
    let user = obj.user;

    this.assign({
      avatarPath: this.getAvatarUrl(user.avatar.path),
      nickname: user.nickname,

      addtime: this.getAddtime(obj.addtime),
      description: obj.description,

      companyname: obj.companyname,
      workback: obj.workback,
      educational: obj.educational,

      jobtitle: obj.jobtitle,
      salary: obj.salary,

      phone: this.getPhoneNum(obj.phone),// + "下载App查看",
      workplace: obj.workplace
    });
    return this.display();
  }

  // 求职信息
  async applyAction(){
    let instance = this.model('cms_jobwanted');
    let obj = await instance.where({id: this.get('id')}).find();
    let user = obj.user;

    this.assign({
      avatarPath: this.getAvatarUrl(user.avatar.path),
      nickname: user.nickname,

      addtime: this.getAddtime(obj.addtime),
      description: obj.description,

      surename: obj.surename,
      sex: obj.sex,
      jobback: obj.jobback,

      educational: obj.educational,
      jobtype: obj.jobtype,
      salary: obj.salary,

      phone: this.getPhoneNum(obj.phone),// + "下载App查看",
      workplace: obj.workplace
    });
    return this.display();
  }
}