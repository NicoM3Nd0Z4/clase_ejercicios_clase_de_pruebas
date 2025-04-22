describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://thelab.boozang.com/')

    cy.get('.veggie_burger').click()

    cy.get(':nth-child(4) > .sub_list > :nth-child(2) > span > .link').click()

    cy.fixture('formData').then((data) => {
      cy.get(':nth-child(1) > input').clear().type(data[0].nombre1)
      cy.get(':nth-child(2) > input').clear().type(data[0].apellido1)
      cy.get(':nth-child(3) > input').clear().type(data[0].email1)
      cy.get(':nth-child(4) > input').clear().type(data[0].contrasena1)

      cy.get('.btn_section > .form_btn').click()

      cy.wait(1000)

      cy.get('.orange').click()

      cy.wait(1000)

      cy.contains(data[0].nombre1).should('exist')
      cy.contains(data[0].apellido1).should('exist')
      cy.contains(data[0].email1).should('exist')

      
      cy.get(':nth-child(1) > input').clear().type(data[1].nombre2)
      cy.get(':nth-child(2) > input').clear().type(data[1].apellido2)
      cy.get(':nth-child(3) > input').clear().type(data[1].email2)
      cy.get(':nth-child(4) > input').clear().type(data[1].contrasena2)
      

      cy.get('.btn_section > .form_btn').click()

      cy.wait(1000)

      cy.get('.orange').click()

      cy.contains(data[1].nombre2).should('exist')
      cy.contains(data[1].apellido2).should('exist')
      cy.contains(data[1].email2).should('exist')
    })
  })
})