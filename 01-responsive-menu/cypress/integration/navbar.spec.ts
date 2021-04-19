/// <reference types="cypress" />

describe("Desktop <Navbar />", () => {
  beforeEach(() => {
    cy.viewport(1024, 768)
    cy.visit(
      "http://localhost:6006/iframe.html?id=navbar--default&viewMode=story"
    )
  })

  it('handle "google" click correctly', () => {
    cy.get("#google").click()
    cy.get("#currentMenuItemSlug").should("contain", "google")
  })

  it('handle "we-connect" click correctly', () => {
    cy.get("#we-conect").click()
    cy.get("#currentMenuItemSlug").should("contain", "we-conect")
  })

  it('handle "live-events" click correctly', () => {
    cy.get("#we-conect-children").invoke("show")
    cy.get("#live-events").click()
    cy.get("#currentMenuItemSlug").should("contain", "live-events")
  })

  it('handle "digital-managed-events" click correctly', () => {
    cy.get("#we-conect-children").invoke("show")
    cy.get("#digital-managed-events").click()
    cy.get("#currentMenuItemSlug").should("contain", "digital-managed-events")


  })
})

describe("Mobile <Navbar />", () => {
  beforeEach(() => {
    cy.viewport("iphone-8")
    cy.visit(
      "http://localhost:6006/iframe.html?id=navbar--default&viewMode=story"
    )
  })

  it("shows menu by first click on icon", () => {
    cy.get("#drop-navbar-label").click()
    cy.get("#menu-container").should("be.visible")
  })

  it("hide menu by second click on icon", () => {
    cy.get("#drop-navbar-label").click()
    cy.get("#drop-navbar-label").click()
    cy.get("#menu-container").should("not.be.visible")
  })

  it('handle "google" click correctly', () => {
    cy.get("#drop-navbar-label").click()
    cy.get("#google").click()
    cy.get("#currentMenuItemSlug").should("contain", "google")
  })

  it('handle "we-conect" click correctly', () => {
    cy.get("#drop-navbar-label").click()
    cy.get("#we-conect").click()
    cy.get("#currentMenuItemSlug").should("contain", "we-conect")
  })

  it('handle "live-events" click correctly', () => {
    cy.get("#drop-navbar-label").click()
    cy.get("#we-conect-children").invoke("show")
    cy.get("#live-events").click()
    cy.get("#currentMenuItemSlug").should("contain", "live-events")
  })

  it('handle "digital-managed-events" click correctly', () => {
    cy.get("#drop-navbar-label").click()
    cy.get("#we-conect-children").invoke("show")
    cy.get("#digital-managed-events").click()
    cy.get("#currentMenuItemSlug").should("contain", "digital-managed-events")
  })
})
