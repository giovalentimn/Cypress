/*Cypress.Commands.add('fillMandatoryFieldsAndSubmit', data => {
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)
    cy.get('button[type="submit"]').click()
})

/*Cypress.Commands.add('fillMandatoryFieldsAndSubmit', data => {
    cy.get('#firstName').type('Giovanna')
    cy.get('#lastName').type('Dantas')
    cy.get('#email').type('dantasgiovanna64@gmail.com')
    cy.get('#open-text-area').type('Não')
    cy.get('button[type="submit"]').click()
})*/

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    text: 'Mensagem padrão'
}) => {
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)
    cy.contains('button', "Enviar").click()
})
