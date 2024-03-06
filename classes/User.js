const UserModel = require('../models/User');
const jwt = require('jsonwebtoken');

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  async register() {
    await this.hashPassword();
    const newUser = new UserModel({ username: this.username, password: this.password });
    await newUser.save();
  }

  async login() {
    const user = await UserModel.findOne({ username: this.username });
    if (user && await user.validatePassword(this.password)) {
      const token = jwt.sign({ username: user.username }, 'secret-key', { expiresIn: '1h' });
      return token;
    } else {
      throw new Error('Invalid credentials');
    }
  }

  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}

module.exports = User;
