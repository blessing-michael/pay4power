/// <reference types = "cypress" />

it('visit url', ()=>{
    cy.visit('https://pay4power.com/default.aspx')
    cy.get('.login-signup > .dropdown-toggle').click()
   
    cy.get('a > .btn').click()
    cy.get('#txtFullname').type('blessing akanimi')
    cy.get('#txtPhoneNumber').type('07034697295')
    cy.get('#txtEmail').type('blessingauquo103@gmail.com')
    cy.get('#chkIAgree').click()
    cy.get('#btnAdd').click()
    
})