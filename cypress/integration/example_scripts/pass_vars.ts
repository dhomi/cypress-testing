/// <reference types="cypress" />

context("Login to SAP web gui", () => {
    var mijnID = 0
    sessionStorage.clear() // cleanup sessionStorage

    it("Set session", () => {
        sessionStorage.setItem('sesID', 'init')
    })
    it("Get session", () => {
        cy.log('mijnID init', mijnID)
        var sesID = sessionStorage.getItem('sesID')
        cy.log('sesID init', sesID)
        cy.fixture('example').as('voorbeeld_json') // assign to a cypress alias
        cy.wait(1000)
        cy.get('@voorbeeld_json').then(resp => {
            Object.assign(resp, {
                "ID": 1,
                "nieuwe": "nieuw"
            })
            cy.log('resp.ID after', resp.ID)
            cy.log('resp.nieuwe', resp.nieuwe)
            sessionStorage.setItem('sesID', resp.ID) // save collectionId to sessionStorave
        })

    })
})
