import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import envPage from "../../../pom/envPage"
import homePage from "../../../pom/homePage";
import loginPage from "../../../pom/loginPage";
import loggedInLandingPage from "../../../pom/loggedInLandingPage";

before(function() {
    cy.fixture("personalAccountUser").then(function(data){
        this.data=data
    })
})

Given("I am logged into the Pilot environment", function(){
    new envPage().getPilotURL() 
    new homePage().getLoginButton().click()
    cy.login(this.data.pilotPersonalAccountEmail, this.data.pilotPersonalAccountPassword)
    new loginPage().getLoginButton().click()
})

Then("I should confirm text is displayed when I am logged in", function(){
    new loggedInLandingPage().getLoggedInText()
})

Given("I am logged into the Live environment with a Business Account", function(){
    new envPage().getProdURL()
    new homePage().getLoginButton().click()
    cy.login(this.data.liveBusinessAccountEmail, this.data.liveBusinessAccountPassword)
    new loginPage().getLoginButton().click()
})

Given("I am logged into the Live environment with a Personal Account", function(){
    new envPage().getProdURL()
    new homePage().getLoginButton().click()
    cy.login(this.data.livePersonalAccountEmail, this.data.livePersonalAccountPassword)
    new loginPage().getLoginButton().click()
})