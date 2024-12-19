/// <reference types = "cypress" />


describe('Signup page',()=>{
    beforeEach(()=>{
        cy.visit('https://pay4power.com/default.aspx')
        cy.get('.login-signup > .dropdown-toggle').click()
        cy.get('a > .btn').click()

    })
    it('verify registering an account by providing valid details in all fields', ()=>{
        
        cy.get('#txtFullname').type('bless michael ')
        cy.get('#txtPhoneNumber').type('07034697295')
        cy.get('#txtEmail').type('asuquoe13@gmail.com')
        cy.get('#chkIAgree').click()
        cy.get('#btnAdd').click()
        
    })
    it('should show an error when full name  field is empty', ()=>{
          // Leave the full name field empty and fill the other fields
        cy.get('#txtFullname').clear(); 
        cy.get('#txtPhoneNumber').type('07034697295')
        cy.get('#txtEmail').type('asuquoe13@gmail.com')
        cy.get('#chkIAgree').click()
        cy.get('#btnAdd').click()
        //Assert that the browser shows an error message
        cy.get('input[name="txtFullname"]')
        .should('have.prop', 'validationMessage')
        .and('not.be.empty');
 
    
    
    
    })
   it('should show an error for invalid email forma', ()=>{
    cy.get('#txtFullname').type('bless michael ') 
    cy.get('#txtPhoneNumber').type('07034697295')
    cy.get('#txtEmail').type('asuquoe13@')
    cy.get('#chkIAgree').click()
    cy.get('#btnAdd').click()
    //Assert that the browser shows an error message
    cy.get('#RegularExpressionValidator1')
    .should('be.visible')
    .and('contain.text', 'Invalid Email');
});

   



   


})
