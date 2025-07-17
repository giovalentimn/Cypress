describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html') // visita o arquivo local
  })
  it('verifica o título da aplicação', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT') // verifica o título
  })
  it('Preencher os campos obrigatórios e envia o formulário', () => {
    const textolongo = Cypress._.repeat('Não, muito obrigada!', 5)

    cy.get('#firstName').type('Giovanna')
    cy.get('#lastName').type('Dantas')
    cy.get('#email').type('dantasgiovanna64@gmail.com')
    cy.get('#open-text-area').type(textolongo, {delay:0})
    cy.contains('button', "Enviar").click()

    cy.get('.success').should('be.visible')
  });
  it('Exibe mensagem de erro ao submeter o formulário com e-mail com formatação inválida', () => {

    cy.get('#email').type('gmail.com')
    cy.get('#open-text-area').type('Não!')
    cy.contains('button', "Enviar").click()

    cy.get('.error').should('be.visible')
  });
  it('Campo telefone continua vazio quando é inputado um valor não-númerico', () => {
    cy.get('#phone')
      .type('abcdefghijklmnopqrstuvwxyz')
      .should('have.value', '')
  });
  it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#firstName').type('Giovanna')
    cy.get('#lastName').type('Dantas')
    cy.get('#email').type('dantasgiovanna64@gmail.com')
    cy.get('#phone-checkbox').click('')
    cy.get('#open-text-area').type('Não')
    cy.contains('button', "Enviar").click()

    cy.get('.error').should('be.visible')
  });
  it('Preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName')
      .type('Giovanna')
        .should('have.value', 'Giovanna')
        .clear('have.value', '')
    cy.get('#lastName')
      .type('Dantas')
        .should('have.value', 'Dantas')
          .clear('have.value', '')
    cy.get('#email')
      .type('dantasgiovanna64@gmail.com')
        .should('have.value', 'dantasgiovanna64@gmail.com')
          .clear('have.value', '')
    cy.get('#phone')
      .type('123')
        .should('have.value', '123')
          .clear('have.value', '')
  });
  it('Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.contains('button', "Enviar").click()

    cy.get('.error').should('be.visible')
  });
/*  it.only('Envia o formuário com sucesso usando um comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit(data)

    cy.get('.success').should('be.visible')
  });*/
  it('Envia o formuário com sucesso usando um comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success').should('be.visible')
  });
    it('Seleciona um produto (YouTube) por seu texto', () => {
    cy.get('#product')
      .select('YouTube')
        .should('have.value', 'youtube')
  });
      it('seleciona um produto (Mentoria) por seu valor (value)', () => {
    cy.get('#product')
      .select('mentoria')
        .should('have.value', 'mentoria')
  });
      it('Seleciona um produto (Blog) por seu índice', () => {
    cy.get('#product')
      .select(1)
        .should('have.value', 'blog')
  });
  it('Marca o tipo de atendimento "Feedback', () => {
    cy.get('input[type="radio"][value="feedback"]')
      .check()
        .should('be.checked')
  });
  it('Marca cada tipo de atendimento', () => {
    cy.get('input[type="radio"]')
      .each((type0fService) => {
        cy.wrap(type0fService)
          .check()
          .should('be.checked')
      })
  });
  it('Marca ambos checkboxes, depois desmarca o último', () => {
    cy.get('input[type="checkbox"]') //seleciona os dois check box
      .check() //marcar os dois check box
        .should('be.checked') //verifica  os dois check box
          .last() //volta para o ultimo
            .uncheck() //desmarca
              .should('not.be.checked') //verifica se está desmarcado
  });
  it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#firstName').type('Giovanna')
    cy.get('#lastName').type('Dantas')
    cy.get('#email').type('dantasgiovanna64@gmail.com')
    cy.get('#phone-checkbox').check()
    cy.get('#open-text-area').type('Não')
    cy.contains('button', "Enviar").click()
    cy.get('.error').should('be.visible')
  });

  it('Seleciona um arquivo da pasta fixtures', () => {
    cy.get('#file-upload')
    .selectFile('cypress/fixtures/example.json')
      .should((input) => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  });
  it('Seleciona um arquivo simulando um drag-and-drop', () => {
    cy.get('#file-upload')
    .selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
      .should((input) => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  });
  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
    cy.fixture('example.json').as('sampleFile')
    cy.get('#file-upload')
    .selectFile('@sampleFile')
      .should((input) => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  });
  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    cy.contains('a', 'Política de Privacidade')
      .should('have.attr', 'href', 'privacy.html')
        .and('have.attr', 'target', '_blank')
  });
  it('Acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    cy.contains('a', 'Política de Privacidade')
      .invoke('removeAttr', 'target')
        .click()
  
    cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
  });
  it('testa a página da política de privacidade de forma independente', () => {
    
  });
})