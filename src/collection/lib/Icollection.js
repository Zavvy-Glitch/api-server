'use strict';

class Icollection {
  constructor(model){
    this.model = model;
  }

  async create(json) {
    try {
      let instance = await this.model.create(json);

      return instance;
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  async read(id, options) {
    try {
      const idNumber = parseInt(id);
      let query = { where: { id: idNumber }, ...options};

      let resultData = await this.model.findOne(query);
      return resultData;
    } catch (e) {
      console.error(e);
      return e;
    }

  }

  async update(id) {
    try{
      const idNumber = parseInt(id);
      let query = { where: { id: idNumber }};

      let instanceToUpdate = await this.model.findOne(query);
      await this.model.update(query);
      return instanceToUpdate;
    } catch (e) {
      console.error(e);
      return e
    }

  }

  async delete(id) {
    try {
      const idNumber = parseInt(id);
      let query = { where: { id: idNumber }};

      let instanceToDelete = await this.model.findOne(query);
      await this.model.destroy(query);
      return instanceToDelete;
    } catch(e) {
      console.error(e);
      return e
    }

  }
}

module.exports = Icollection;