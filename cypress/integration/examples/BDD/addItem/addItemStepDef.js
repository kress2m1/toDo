import { Given } from "@badeball/cypress-cucumber-preprocessor"
import homePage from "../../../pom/homePage"



before(function() {
    cy.fixture("addItem").then(function(data){
        this.data=data
    })
})

Given("I am on the todo list page", function()){
    new homePage().getTodoSearchField().type(itemOne)
}

And("I have added an item")

Then("the item should be displayed") 

And("the count should reflect the item added") 
