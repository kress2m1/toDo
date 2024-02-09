@regression
Feature: User can login into QWID with an existing personal account
    User is able to login into QWID
    So they can carry out transactions
    And access their funds

    @pilot
    Scenario: User can successfully log into the Pilot environment using valid personal credentials
        Given I am logged into the Pilot environment
        Then I should confirm text is displayed when I am logged in

    @prod
    Scenario: User can successfully log into the Live environment using valid business credentials
        Given I am logged into the Live environment with a Business Account
        Then I should confirm text is displayed when I am logged in 

    @prod
    Scenario: User can successfully log into the Live environment using valid personal credentials
        Given I am logged into the Live environment with a Personal Account
        Then I should confirm text is displayed when I am logged in 