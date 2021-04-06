/// <reference types="cypress" />

// *** THIS TEST COVERS THE FOLLOWING ***
// 
// Test structure: describe/it
// Visit a url in cypress
// How to use the browsers Web Inspector
// Get a css-element for usage in cypress: cy.get('element')
// Type in a input field
// Click one button
// Use variables
// 
// ***   ***

describe("Frontend test one", () => {

    it("Login, use element, click & type", () => {
        cy.visit('https://example.cypress.io/commands/actions') // Visit a url in cypress

        // How to use the browsers Web Inspector
        cy.xpath('//*[@id="couponCode1"]') // Get a xpath for usage in cypress: cy.xpath('xpath')
            .type('pizza') // Type in a input field

        cy.get('button.btn:nth-child(2)') // Get a css-element for usage in cypress: cy.get('element')
            .click() // Click one button

        cy.xpath('/html/body/div[2]/div/div/div[14]/div/p')
            .should('contain', 'submitted!')

    })

})
