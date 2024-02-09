class homePage{
    getLoginButton(){
        return cy.get(".bg-white > .px-3")
    }

    getCreateAnAccountButton(){
        return cy.get("span[class='px-3'][xpath='1']")
    }

    getBlogLink(){
        return cy.get("span[class='curp t6 tracking-wide hover:opacitys-80 trall text-white med opacity-100' ][css='2']")
    }

    getFeaturesLink(){
        return cy.get("span[class='ant-dropdown-trigger curp  t6 tracking-wide hover:opacity-80 trall med text-white' ][xpath='1']")
    }

    getHelpLink(){
        return cy.get("span[class='ant-dropdown-trigger curp t6 tracking-wide hover:opacity-80 trall med text-white' ][xpath='1']")
    }

    getSignUpForPersonalAccountButton(){
        return cy.get("span[class='text-dark-grey-text text-base'][css='2']")
    }

    getTodoSearchField(){
        return cy.get("input[class='new-todo']")
    }
}

export default homePage;