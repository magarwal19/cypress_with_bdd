/// <reference types= "cypress" />>

const {
    Before,
    After,
    Given,
    Then ,
    When,
    defineStep,
    And
  } = require("cypress-cucumber-preprocessor/steps"); 

  When('I open application',()=>{
    cy.visit('/')
  })

  And('Select test from tags',()=>{
    cy.get('.logo-font').should('have.text','conduit')
    cy.get('div a.tag-default.tag-pill').each((el,index)=>{
        if(el.text().match('test'))
        {
            cy.get('div a.tag-default.tag-pill').eq(index).click();
        }
    })
  })

  Then('I should be able to see comments with test',()=>{
    cy.get('.navbar-nav li a').eq(0).click();
    cy.get('.navbar-nav li a').eq(1).click();
    cy.get('.navbar-nav li a').eq(2).click();
    cy.get('.navbar-nav li a').eq(0).click();
  })