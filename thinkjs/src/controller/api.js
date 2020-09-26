module.exports= class extends think.Controller{

  async indexAction() {
    // return this.display();
    const data= await this.model('type').limit(2).select();

    this.json(data);
  }


}
