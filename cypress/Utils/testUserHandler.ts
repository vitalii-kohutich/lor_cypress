class TestUser {
  userRegistrationWitApprovingEmail(body: any): void {
    cy.log(JSON.stringify(body));
    // Registration of new test user
    cy.request({
      method: 'POST',
      url: Cypress.env('<endpointForRegistration>'),
      // failOnStatusCode: false,
      body: body
    }).then(res => {
      expect(res.status).to.equal(200);
    });

    // One-time password change label
    // ${Cypress.env('pgdb').schemas.userSchema}

    /* Approving registration */
    // cy.task('pgQuery', `UPDATE user_schema.users SET temporary_password_changed = true  WHERE login ='${body.login}';`).then(
    // 	(res: any) => {
    // 		cy.log('RES: \n', JSON.stringify(res.rows));
    // 	}
    // );
  }

  userRegistrationWithoutApprovingEmail(body: any): void {
    cy.log(body);
    // Registration of new test user
    cy.request({
      method: 'POST',
      url: Cypress.env('<endpointForRegistration>'),
      failOnStatusCode: false,
      body: body
    }).then(res => {
      expect(res.status).to.equal(200);
    });
  }

  userRemover(login: string): void {
    cy.log(login);
    // cy.task('pgQuery', `DELETE FROM ${Cypress.env("pgdb").schemas.userSchema}.users WHERE login='${login}';`).then((res: any) => {
    // 	cy.log('RES: \n', JSON.stringify(res.rows));
    // });
  }
}

export default new TestUser();
