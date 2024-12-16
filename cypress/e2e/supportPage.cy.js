/// <reference types = "cypress" />

it('verify navigating to support page using support header link', ()=>{
    cy.visit('https://pay4power.com/default.aspx')
    cy.get(':nth-child(5) > .dropdown-toggle').click()

})


it('verify submitting the form by providing all details', ()=>{
    cy.visit('https://pay4power.com/default.aspx')
    cy.get(':nth-child(5) > .dropdown-toggle').click()
    cy.get('select').select('Token Issues')
    cy.get('#support_txtFullname').type('blessing akanimi')
    cy.get('#support_txtEmailAddress').type('asuquoe13@gmail.com')
    cy.get('#support_txtPhoneNumber').type('07034697295')
    cy.get('#support_txtEnquiry').type('i got an error message after payment. could you help please')
    cy.get('#support_btnAdd').click()
    

})

it('verify submitting the form by not providing any details', ()=>{
    cy.visit('https://pay4power.com/default.aspx')
    cy.get(':nth-child(5) > .dropdown-toggle').click()
    
    cy.get('#support_btnAdd').click()
    

})
it('verify submitting the form by entering invalid email address', ()=>{
    cy.visit('https://pay4power.com/default.aspx')
    cy.get(':nth-child(5) > .dropdown-toggle').click()
    cy.get('select').select('Token Issues')
    cy.get('#support_txtFullname').type('blessing akanimi')
    cy.get('#support_txtEmailAddress').type('asuquoe13@')
    cy.get('#support_txtPhoneNumber').type('07034697295')
    cy.get('#support_txtEnquiry').type('i got an error message after payment. could you help please')
    cy.get('#support_btnAdd').click()
    
    
    

})