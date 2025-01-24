describe('Testes de preenchemento da area de cadastro do site - Automation Practice', () => {
  beforeEach(() => {
    cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account.cypress.io');
  })

  //Cenarios extra:
  it.only('Verifica se exibe mensagem de erro ao preencher o campo do email com formatação inválida', () => {
    cy.get('#email_create').type('adrielly@gmail;com')
    cy.get('#SubmitCreate > span').click()

    cy.get('#create_account_error').should('be.visible')

    //Verifica se ocorre o impedimento do cadastro com senha inferior a 5 caracteres
    cy.get('#email_create').clear()
    cy.get('#email_create').type('arielly@gmail.com')
    cy.get('#SubmitCreate > span').click()

    cy.get('#account-creation_form').should('be.visible')

    cy.get('#id_gender2').click()
    cy.get('#customer_firstname').type('Arielly')
    cy.get('#customer_lastname').type('Julião')
    cy.get('#passwd').type('1234')
    cy.get('#days').select('16')
    cy.get('#months').select('February')
    cy.get('#years').select('2002')
    cy.get('#submitAccount > span').click()

    cy.get('.alert').should('be.visible')
  })
  

})