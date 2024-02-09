class loginPage{
    getEmailAddress(){
        return cy.get("#email")
    }

    getPassword(){
        return cy.get("#password")
    }

    getLoginButton(){
        return cy.get("button[type='submit']")
    }

    getResetLink(){
        return cy.get("span[class='curp pry-text tracking-wide hover:scale-105 trall med']")
    }
}

export default loginPage;