/// <reference types="cypress" />

export class API {
  static get baseUrl() {
    return Cypress.env('baseUrl')
  }

  static get apiUrl() {
    return this.baseUrl + '/api'
  }

  static postRequest(payload: any) {
    const qs: {} = {'clientID': 100}

    return cy.request({
      method: 'POST',
      url: this.apiUrl,
      qs,
      auth: {
        username: 'username',
        password: 'password',
      },
      headers: {
        'Content-Type': 'text/xml',
        charset: 'ISO-8859-1',
      },
      body: payload,
      failOnStatusCode: false,
    })
  }


}
