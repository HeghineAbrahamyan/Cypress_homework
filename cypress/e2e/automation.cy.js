/// <reference types = "cypress"/>


describe('automationteststore webpage', () => {

  beforeEach( () => {
   cy.visit('https://automationteststore.com/')
  })
 
   it('Check if the page open correctly', () => {
     cy.title().should('eq', 'A place to practice your automation skills!')
     cy.get('[class="logo"]').should('be.visible')
     cy.get('[class="active menu_home"]').should('be.visible')
   })
 
     it('Check login and register', () => {
     cy.get('#customer_menu_top > li > a').click()
     cy.get('#accountFrm > fieldset > .btn').click()
     cy.get('[id="AccountFrm_firstname"]').type('Mariam')
     cy.get('[id="AccountFrm_lastname"]').type('Ananyan')
     cy.get('[id="AccountFrm_email"]').type('mar123@mail.ru')
     cy.get('[id="AccountFrm_telephone"]').type('0123456')
     cy.get('[id="AccountFrm_fax"]').type('0123456')
     cy.get('[id="AccountFrm_company"]').type('Delta')
     cy.get('[id="AccountFrm_address_1"]').type('Nairyan')
     cy.get('[id="AccountFrm_address_2"]').type('Amiryan')
     cy.get('[id="AccountFrm_city"]').type('Yerevan')
     cy.get('[id="AccountFrm_country_id"]').select('Armenia')
     cy.get('#AccountFrm_zone_id').select('Yerevan')
     cy.get('[id="AccountFrm_postcode"]').type('123')
     cy.get('[id="AccountFrm_loginname"]').type('mariam')
     cy.get('[id="AccountFrm_password"]').type('55555')
     cy.get('[id="AccountFrm_confirm"]').type('55555')
     cy.get('[id="AccountFrm_newsletter1"]').click()
     cy.get('#AccountFrm_agree').click()
     cy.get('[class="btn btn-orange pull-right lock-on-click"]').click()
     cy.on('window:alert', (t) =>{
       expect(t).to.eq('YOUR ACCOUNT HAS BEEN CREATED!')
     })
    })
 
   it('Check login with valid credentials', () => {
     cy.get('#customer_menu_top > li > a').click()
     cy.get('[id=loginFrm_loginname]').type('mariam')
     cy.get('[id="loginFrm_password"]').type('55555')
     cy.get('[class="btn btn-orange pull-right"]').contains("Login").click()
     cy.on('window:alert', (t) =>{
       expect(t).to.eq('My Accaount Mariam')
     })
   })
 
   it('Check  with incorrect login', () => {
     cy.get('#customer_menu_top > li > a').click()
     cy.get('[id=loginFrm_loginname]').type('anna')
     cy.get('[id="loginFrm_password"]').type('55555')
     cy.get('[class="btn btn-orange pull-right"]').contains("Login").click()
     cy.on('window:alert',(t) =>{
       expect(t).to.eq('Error:Incorrect login or password provided.')   
  })
 })
 
 it('Check with invalid password', () => {
   cy.get('#customer_menu_top > li > a').click()
   cy.get('[id=loginFrm_loginname]').type('mariam')
   cy.get('[id="loginFrm_password"]').type('000000')
   cy.get('[class="btn btn-orange pull-right"]').contains("Login").click()
   cy.on('window:alert',(t) =>{
     expect(t).to.eq('Error:Incorrect login or password provided.')
   })
 })
 
 it('Check keywords button  funcionality', () => {
   cy.get('[name="filter_keyword"]').click()
   cy.get('[id="category_selected"]').should('be.visible') 
 })
 
 it('Check  APPAREL & ACCESSORIES menu button', () => {
   cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click()
   cy.on('window:alert',(t) =>{
     expect(t).to.eq('Apparel & accessories')
  })
 })
 
 it('Check Makeup menu button', () => {
   cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click()
   cy.on('window:alert', (t) => {
     expect(t).to.eq('makeup')
   })
 })
 it('Check Skincare menu button', () => {
   cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=43"]').click()
   cy.on('window:alert', (f) => {
     expect(t).to.eq('Skincare')
   })
 })
 
 it("Check Sort by dropdown functionality", () => {
   cy.get('.nav-pills > :nth-child(2)').click()
   cy.get('[name="sort"]').select("p.price-ASC").invoke("val").should("eq", "p.price-ASC")
   })
 
   it("Check Sort by dropdown functionality", () => {
     cy.get('.nav-pills > :nth-child(2)').click()
     cy.get('[name="sort"]').select("pd.name-ASC").invoke("val").should("eq", "pd.name-ASC")
     })
 
     it("Check Sort by dropdown functionality", () => {
       cy.get('.nav-pills > :nth-child(2)').click()
       cy.get('[name="sort"]').select("date_modified-DESC").invoke("val").should("eq", "date_modified-DESC")
       })
 })