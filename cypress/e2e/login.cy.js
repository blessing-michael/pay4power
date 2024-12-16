/// <reference types = "cypress" />
it('login', ()=>{
    cy.visit('https://pay4power.com/default.aspx')
    cy.get('.login-signup > .dropdown-toggle').click()
   
    cy.get('#txtEmail').type('asuquoe13@gmail.com')
    cy.get('#txtPassword').type('dee123456')
    cy.get('#btnAdd').click()
})