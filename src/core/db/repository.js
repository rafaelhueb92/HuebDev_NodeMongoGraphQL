class Repository {
    constructor(model) {
      this.model = model;
    }
  
    async list(options) {
      try {
        const result = await this.model.find(options);
        return result;
      } catch (ex) {
        throw ex;
      }
    }
  
    async findOne(args) {
      try {
        const result = await this.model.findOne(args);
        return result;
      } catch (ex) {
        throw ex;
      }
    }
  
    async findById(_id) {
      try {
        const result = await this.model.findById(_id);
        return result;
      } catch (ex) {
        throw ex;
      }
    }
  
    async insert(args) {
      try {
        const Model = this.model;
        const ModelSaved = await new Model(args).save();
        return ModelSaved;
      } catch (ex) {
        throw ex;
      }
    }
  
    async update(args) {
      try {
        const result = await this.model.findOneAndUpdate({ _id: args.id }, args);
        return result;
      } catch (ex) {
        throw ex;
      }
    }
  
    async delete(_id) {
      try {
        const result = await this.model.findOneAndDelete({ _id });
        return result;
      } catch (ex) {
        throw ex;
      }
    }
  }
  
  module.exports = Repository;