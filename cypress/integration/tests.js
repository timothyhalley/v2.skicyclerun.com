describe('Loading Pages', () => {
  it('visits the homepage', () => {
    cy.visit('/')
      .contains('SkiCycleRun')
  })

  it('visits the blog page', () => {
    cy.visit('/blog')
      .contains('Travel Blog')
  })

  it('visits the docs page', () => {
    cy.visit('/docs')
      .contains('Technical Site Docs')
  })

})

// describe('Page Scroll to Sections', () => {
//   it('can scroll to Photos', () => {
//     cy.visit('/')
//     cy.get('[data-cypress=photos]').click()
//     cy.contains('Photos:')
//   })
// })

// describe('Theme Switcher', () => {
//   it('can change to dark theme', () => {
//     cy.visit('/')

//     cy.get('[data-cypress=switchTheme]').click({ force: true })
//     cy.get('.content-wrapper').should('have.class', 'theme-dark')
//   })

//   it('can change to light theme', () => {
//     cy.visit('/')

//     cy.get('[data-cypress=switchTheme]').click({ force: true })
//     cy.get('[data-cypress=switchTheme]').click({ force: true })
//     cy.get('.content-wrapper').should('have.class', 'theme-light')
//   })
// })

// describe('Search with Vue Fuse', () => {
//   it('can search for blog posts', () => {
//     cy.visit('/')

//     cy.get('[data-cypress=search-results]').should('not.exist')
//     cy.get('[data-cypress=search]').type('Gravel')
//     cy.get('[data-cypress=search-results]').should('exist')
//     cy.contains('Adventures by Gravel')
//     cy.contains('skicyclerun')
//   })

//   it('Can search for docs', () => {
//     cy.visit('/')

//     cy.get('[data-cypress=search-results]').should('not.exist')
//     cy.get('[data-cypress=search]').type('AWS')
//     cy.get('[data-cypress=search-results]').should('exist')
//     cy.contains('AWS Amplify Tutorial')
//   })
// })

describe('Mobile View', {
  viewportWidth: 400,
}, () => {
  it('shows the hamburger menu', () => {
    cy.visit('/')

    cy.get('[data-cypress=menu]').should('not.exist')
    cy.get('[data-cypress=hamburger]').should('exist').click()
    cy.get('[data-cypress=menu]').should('exist')
  })
})
