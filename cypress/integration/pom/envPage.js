class envPage{
    getQaURL(){
        return cy.visit(Cypress.env("qaURL"))
    }

    getPilotURL(){
        return cy.visit(Cypress.env("pilotURL"))
    }

    getProdURL(){
        return cy.visit(Cypress.env("prodURL"))
    }
}

export default envPage;