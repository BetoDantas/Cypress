context('',() => {
    
    beforeEach(() => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")
    });
    
    
    it('Depósito',() => {
       

        criarTrasacao("Salario", 1550)
        cy.get("tbody tr td.description").should("have.text", "Salario")

        criarTrasacao("Saque", -450)
        //cy.get("tbody tr td.description").should("have.text", "Saque")

    });

    it('Saída', () =>{
        
       
        criarTrasacao("Coxinha", -200)
        
        cy.get("tbody tr td.description").should("have.text", "Coxinha")
    });

    it('Excluir transação', () => {
        criarTrasacao("Salario", 1222)
        cy.contains(".description", "Salario").parent()
        .find('img')
        .click()

        //cy.get("tbody tr").should("have.length", 1)
    });
});

function criarTrasacao(descricao, valor){
    cy.contains('Nova Transação').click()

    cy.get('#description').type(descricao)

    cy.get('#amount').type(valor)

    cy.get("#date").type("2023-03-17")

    cy.contains('button', 'Salvar').click()
}