context('',() => {
    it('',() => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")

        cy.contains('Nova Transação').click()

        cy.get('#description').type("Freela")

        cy.get('#amount').type(250)

        cy.get("#date").type("2023-03-17")

        cy.contains('button', 'Salvar').click()
    });
});