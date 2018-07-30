'use strict'

const User = use('App/Models/User');
const { validateAll } = use('Validator');

class UserController {
  async create({ session, request }) {
    const data = request.only(['username', 'email', 'password']);

    const validation = await validateAll(data, {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required',
    });

    if (validation.fails()) {
      return validation.messages();
    }

    const user = await User.create(data);

    return user;
  }
}

module.exports = UserController
