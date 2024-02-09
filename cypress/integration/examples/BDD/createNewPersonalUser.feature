@regression
Feature: User can successfully create a personal account
    A user can successfully create a personal account
    so they can access the full features of QWID
    and complete financial transactions

    Scenario: User can create  a Personal account using valid credentials
        Given I am on the landing page 
        And I select my country of residence
        And I enter my firstname
        And I enter my lastname 
        And I enter my email address
        And I enter my password
        And I confirm my password
        When I select the Continue button
        And I verify my email address
        And I select the Continue button to complete my KYC
        And I select my gender
        And I enter my date of birth 
        And I select my nationality
        And I select my employment status
        And I confirm if I am PEP associated or not 
        When I select the save and continue button 
        And I enter my telepohone number 
        And I enter the first part of my address
        And I enter the second part of my address 
        And I enter my state 
        And I enter my city
        And I enter my postcode 
        When I select the save and continue button 
        And I select my issuing country
        And I select my type of ID
        And I enter my ID number 
        And I enter the issue date
        And I enter the expiry date 
        And I enter my Tax number or BVN number 
        When I select the save and continue button
        And I am navigated to the Summary page 
        And I select the save and continue button
        And I select the Continue button 
        When I select the issuing country for my ID 
        And I select my type of ID 
        And I upload my ID 
        And I select the Next button 
        


