// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Login Page Loads', () => {
    it('Visit my first login page', () => {
      cy.visit('/')
      cy.contains(`Login Page`)
    })
  })

  describe('Invalid Username is rejected', () => {
    it('Visit my first site', () => {
      cy.visit('/')      
      // Enter username and password in form inputs
      cy.get("input[name=username]").type('username');
      cy.get("input[name=password]").type('password').type("{enter}"); 
      cy.contains(`Invalid username and/or password`)
    })
  })

 /* describe('My First Failing Test', () => {
    it('Visit my first site', () => {
      cy.visit('/')
      cy.contains(`This test is meant to fail`)
    })
  })
  */
