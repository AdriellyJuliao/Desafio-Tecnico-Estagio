describe('Testes da página de login - Automation Practice', () => {
  beforeEach(() => {
    cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account.cypress.io');
  })

  //Cenário número 3:
  it.only('Verifica se o sistema bloqueio o numero de tentativas de login apos 3 falhas na senha', () => {
    cy.get('#email').type('adrielly@gmail.com');

    
    for (let i = 0; i < 3; i++) {
      
      cy.get('#passwd').clear().type('Teste123');  
      cy.get('#SubmitLogin > span').click(); 
     
      cy.get('#center_column > :nth-child(2)').should('be.visible');  
  
    }
    cy.get('#center_column > :nth-child(2)').should('not.contain', 'Acesso bloqueado por tentativas exessivas.')
  })

})