describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://thelab.boozang.com/')

    cy.get('.veggie_burger').click()

    cy.get(':nth-child(4) > .sub_list > :nth-child(3) > span > .link').click()

    cy.get('.cat_shelter_header > .link_btn').click()

    cy.fixture('formDataCats').then((data) => {
      cy.get('.list_form > :nth-child(1) > input').clear().type(data[0].nombre1)
      cy.get('textarea').clear().type(data[0].descripcion1)

      cy.get('.go_out_or_not > :nth-child(2) > label > input', {timeout: 4000}).click()

      cy.get('.text-center > .form_btn').click()

      cy.wait(1000)

      cy.get('.cat_shelter_header > .link_btn').click()

      cy.wait(1000)

      cy.get('.list_form > :nth-child(1) > input').clear().type(data[1].nombre2)
      cy.get('textarea').clear().type(data[1].descripcion2)

      cy.get('.go_out_or_not > :nth-child(2) > label > input', {timeout: 4000}).click()

      cy.get('.text-center > .form_btn').click()

      cy.wait(1000)

    })
  })
})