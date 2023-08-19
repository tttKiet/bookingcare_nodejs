class AdminController {
  async helloworld(req, res, next) {
    res.send("Welcome helloworld AdminController!");
  }
}

export default new AdminController();
