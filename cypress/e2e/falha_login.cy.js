describe('Testes de login do site - Automation Practice', () => {
  beforeEach(() => {
    cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account.cypress.io');
  })

  //Cenário número 1: 
  it('Deve exibir erro ao tentar login com credenciais não cadastradas', () => {
    cy.get('#email').type('Carla@gmail.com')
    cy.get('#passwd').type('teste123')
    cy.get('#SubmitLogin > span').click()

    cy.get('#center_column > :nth-child(2)').should('be.visible')
  })
   
})
