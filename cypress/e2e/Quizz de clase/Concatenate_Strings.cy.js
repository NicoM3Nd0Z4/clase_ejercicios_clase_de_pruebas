describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://thelab.boozang.com/')

    cy.get('.veggie_burger').click()

    cy.get(':nth-child(7) > .sub_list > li > span > .link').click()

    cy.get('.strings_section > :nth-child(2)').click()

    cy.get('.string1').invoke('text').then((text1) => {
      const string1 = text1.trim().toLowerCase()

      cy.get('.string2').invoke('text').then((text2) => {
        const string2 = text2.trim().toLowerCase()

        const textoConcatenado = string1 + string2

        // Escribir en el input
        cy.get('input').type(textoConcatenado)

        // Enviar
        cy.get('.text-center > .form_btn').click()
      })
    })

  })
})