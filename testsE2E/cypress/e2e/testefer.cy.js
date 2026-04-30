describe('Teste de Formulário Real', () => {
  it('Deve preencher os dados de cadastro no Testefer', () => {
    // 1. Visita a página de cadastro
    cy.visit('https://www.testefer.com/cadastroEmpresa.asp')

    // 2. Preenche os campos principais da empresa
    cy.get('[name="txtNomeFantasia"]').type('Minha Empresa Teste')
    cy.get('[name="txtRazaoSocial"]').type('Empresa de Testes Automatizados LTDA')
    cy.get('[name="txtCnpj"]').type('12.345.678/0001-90')
    
    // 3. Preenche dados do usuário master
    //cy.get('[name="txtNomeUsuario"]').type('João Silva')
    //cy.get('[name="txtEmailUsuario"]').type('joao@teste.com')
    //cy.get('[name="txtLoginUsuario"]').type('joaosilva_test')
    
    // 4. Ação de envio (Simulação)
    // cy.get('#bt1').click() 
    
    // Validação básica: verificar se o valor foi digitado corretamente
    cy.get('[name="txtNomeFantasia"]').should('have.value', 'Minha Empresa Teste')
  })
})