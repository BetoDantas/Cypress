context('',() => {
    it('Depósito',() => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")

        criarTrasacao("Salario", 1550)
        cy.get("tbody tr td.description").should("have.text", "Salario")

        criarTrasacao("Mensalidade", -450)
        cy.get("tbody tr td.description").should("have.text", "Mensalidade")

    });

    it('Saída', () =>{
        cy.visit("https://devfinance-agilizei.netlify.app/#")

        criarTrasacao("Coxinha", -200)
        cy.get("tbody tr td.description").should("have.text", "Coxinha")
    });
});

function criarTrasacao(descricao, valor){
    cy.contains('Nova Transação').click()

    cy.get('#description').type(descricao)

    cy.get('#amount').type(valor)

    cy.get("#date").type("2023-03-17")

    cy.contains('button', 'Salvar').click()
}