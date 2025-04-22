describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://thelab.boozang.com/')

    cy.get('.veggie_burger').click()

    cy.get(':nth-child(3) > .sub_list > :nth-child(1) > span > .link').click()

    cy.get('.form_btn').click()

    cy.get('.add').click
    
    cy.get('.color').invoke('text').then((color) => {
      const colorFormateado = color.trim().toLowerCase()
      cy.get('.btn_section').contains(new RegExp(colorFormateado, 'i')).click()
    })

  })
})