/// <reference types = "cypress" />
describe('Homepage', () => {
  
    // Run before each test
    beforeEach(() => {
      // Visit the homepage
      cy.visit('https://pay4power.com/default.aspx');
    });
    it('should have the correct page title', () => {
        // Assert that the page has the correct title
        cy.title().should('eq', 'Pay4Power');
      });
      it('should display the logo', () => {
        // Assert that the logo is visible on the page
        cy.get('img[alt="Pay4Power"]').should('be.visible');
      });
      it('should display the main navigation menu', () => {
      
        
        cy.get('nav').contains('Do you Want to register?')
        cy.get('nav').contains('Buy Electricity')
        cy.get('nav').contains('About');
        cy.get('nav').contains('Contact');
        cy.get('nav').contains('FAQs')
        cy.get('nav').contains('Support')
        cy.get('nav').contains('Contact Us')
        cy.get('nav').contains('Merchant')
        cy.get('nav').contains('Sign Up / Login')

      });
      it('should have a working "Contact Us" button', () => {
        // Check if the "Contact Us" button exists and is clickable
        cy.contains('Contact Us').should('be.visible').click();
      
      });

})