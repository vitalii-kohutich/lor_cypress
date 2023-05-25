import { IRegistrationBody } from "./interfaces";

class TestUser {
  getTestUser(options: Partial<IRegistrationBody> = {}) {
    const testUser = Object.assign({
      "login": this.getLogin(),
      "password": this.getPassword(),
      "passport": this.getPassportId(),
      "phone": this.getPhone(),
      "email": this.getEmail(),
      "firstName": "Tester",
      "lastName": "Testerovich",
    }, options);

    return testUser;
  }

  getLogin() {
    const capital: string = 'ABCDEFGHIGKLMNOPQRSTUVWXYZ';
    const lowercase: string = 'abcdefghijklmnopqrstuvwxyz';
    const number: string = '0123456789';
    let login: string = '';

    for (let i = 0; i < 3; i++) {
      login += capital[Math.floor(Math.random() * capital.length)];
      login += lowercase[Math.floor(Math.random() * lowercase.length)];
      login += number[Math.floor(Math.random() * number.length)];
    }
    return login;
  };

  getPassword() {
    const capital: string = 'ABCDEFGHIGKLMNOPQRSTUVWXYZ';
    const number: string = '0123456789';
    let password: string = '';

    for (let i = 0; i < 4; i++) {
      password += capital[Math.floor(Math.random() * capital.length)];
      password += number[Math.floor(Math.random() * number.length)];
    }
    return password;
  }

  getPassportId() {
    const capital: string = 'ABCDEFGHIGKLMNOPQRSTUVWXYZ';
    const number: string = '0123456789';
    let passportId: string = '';

    for (let i = 0; i < 4; i++) {
      passportId += capital[Math.floor(Math.random() * capital.length)];
      passportId += number[Math.floor(Math.random() * number.length)];
    }
    return passportId;
  }

  getPhone() {
    const number: string = '0123456789';
    let phone: string = '+';

    for (let i = 0; i <= 12; i++) {
      phone += number[Math.floor(Math.random() * number.length)];
    }
    return phone;
  }

  getEmail() {
    const lowercase: string = 'abcdefghijklmnopqrstuvwxyz';
    let email: string = '';

    for (let i = 0; i <= 5; i++) {
      email += lowercase[Math.floor(Math.random() * lowercase.length)];
    }
    email += '@gmail.com';
    return email;
  }
};

export default new TestUser();