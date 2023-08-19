class AuthController {
  // [POST] /api/v1/auth/login
  async handleLogin(req, res, next) {
    res.send("Welcome helloworld!");
  }
}

export default new AuthController();
