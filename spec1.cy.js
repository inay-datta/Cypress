describe('Simple Page Tests', () => {
  it('should load the page and show an alert with the entered name', () => {
      // Visit the page using a relative path
      cy.visit('cypress/fixtures/index.html');

      // Enter a name into the input field
      cy.get('#name').type('John Doe');

      // Click the button to trigger the alert
      cy.get('button').click();

      // Verify the alert text
      cy.on('window:alert', (str) => {
          expect(str).to.equal('Hello, John Doe!');
      });
  });
});
