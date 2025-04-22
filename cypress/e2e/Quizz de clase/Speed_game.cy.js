describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://thelab.boozang.com/')

    cy.get('.veggie_burger').click()

    cy.get(':nth-child(2) > .sub_list > :nth-child(1) > span > .link').click()

    cy.get('[data-testid="startBtn"]').click()

    cy.get('.delete', {timeout: 10000}).click()
  })
})