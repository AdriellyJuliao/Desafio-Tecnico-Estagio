describe('Testes de cadastro do site - Automation Practice', () => {
  beforeEach(() => {
    cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account.cypress.io');
  })

  //Cenário número 2: 
  it('Verifica o cadastramento realizado com sucesso', () => {
    cy.get('#email_create').type('Louis@gmail.com')
    cy.get('#SubmitCreate > span').click()
    cy.wait(3000)

    cy.get('#id_gender2').click()
    cy.get('#customer_firstname').type('Louis')
    cy.get('#customer_lastname').type('Souza')
    cy.get('#passwd').type('Teste@123')
    cy.get('#days').select('21')
    cy.get('#months').select('May')
    cy.get('#years').select('2002')
    cy.get('#submitAccount > span').click()

    cy.get('.alert').should('be.visible')
  })
  


})