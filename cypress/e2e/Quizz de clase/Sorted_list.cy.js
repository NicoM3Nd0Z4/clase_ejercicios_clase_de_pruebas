describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://thelab.boozang.com/')

    cy.get('.veggie_burger').click()

    cy.get(':nth-child(4) > .sub_list > :nth-child(1) > span > .link').click()

    cy.get('input').clear().type('1')
    cy.get('.form_btn', {timeout: 4000}).click()

    cy.get('input').clear().type('2')
    cy.get('.form_btn', {timeout: 4000}).click()
  })
})