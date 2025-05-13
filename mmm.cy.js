

```javascript
describe('Add multiple items to cart', () => {
  it('should add items from different categories to the cart', () => {
    // Visit the homepage
    cy.visit('http://yourwebsite.com');

    // Function to add item to cart based on category and subtype
    function addItemToCart(category, subtype) {
      cy.get(`[data-category="${category}"]`).click();
      cy.get(`[data-subtype="${subtype}"]`).click();
      cy.get('[data-action="add-to-cart"]').click();
      cy.get('[data-action="continue-shopping"]').click();
    }

    // Add items to the cart
    addItemToCart('women', 'dress');
    addItemToCart('men', 'tshirt');
    addItemToCart('kids', 'top');

    // Verify items are in the cart
    cy.get('[data-action="view-cart"]').click();
    cy.get('[data-item="women-dress"]').should('exist');
    cy.get('[data-item="men-tshirt"]').should('exist');
    cy.get('[data-item="kids-top"]').should('exist');
  });
});
```

