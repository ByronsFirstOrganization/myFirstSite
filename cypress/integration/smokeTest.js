// ntitled.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('My First Passing Test', () => {
    it('Visit my first site', () => {
      cy.visit('https://main.dlke5sighv45.amplifyapp.com/')
      cy.contains(`My First Paragraph`)
    })
  })

  describe('My First Failing Test', () => {
    it('Visit my first site', () => {
      cy.visit('https://main.dlke5sighv45.amplifyapp.com/')
      cy.contains(`My Only Paragraph`)
    })
  })
