/// <reference types = "cypress" />


describe('FAQ Page Tests', () => {

  before(() => {
    // Visit the FAQ page before running the test
    cy.visit('https://pay4power.com/default.aspx'); // Update with the actual URL path of the FAQ page
    cy.get(':nth-child(4) > .dropdown-toggle').click()
  });
    
    it('should expand the answer when a question is clicked', () => {
      // Locate the first question on the FAQ page
      cy.get('#heading1 > .mb-0 > .collapsed') // Adjust the selector as needed based on the page structure
        .first() // Selecting the first question (can be adjusted to select a specific question)
        .click(); // Simulate a click on the question
  
      
    });
    
    it('verify the contact customer care button is working', () => {
      
      cy.visit('https://pay4power.com/default.aspx'); // Update with the actual URL path of the FAQ page
      cy.get(':nth-child(4) > .dropdown-toggle').click()
      
      cy.get('.btn').click()
      cy.get('select').select('Token Issues')
      cy.get('#support_txtFullname').type('blessing akanimi')
      cy.get('#support_txtEmailAddress').type('asuquoe13@gmail.com')
      cy.get('#support_txtPhoneNumber').type('07034697295')
      cy.get('#support_txtEnquiry').type('i was debited without receiving value could you help please')
      cy.get('#support_btnAdd').click()
      
  
      
    });

     

      
     
      
    
      
    

});