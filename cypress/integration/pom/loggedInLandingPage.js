class loggedInLandingPage{
    getLoggedInText(){
        cy.wait(10000)
        cy.contains("It's a good day for super-fast transactions")
    }
}

export default loggedInLandingPage;