describe('BooksApp autotests', () => {
  it('Index page should be visible', () => {
    cy.visit('/');
    cy.get('.text-light > .ml-2').should("be.visible");
  });

  it("Successful authorization", () => {
    cy.visit('/');
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать bropet@mail.ru").should('be.visible');
  });

  it("Authorization with invalid username", () => {
    cy.visit('/');
    cy.login(" ", "123");
    cy
      .get("#mail")
      .then(($el) => $el[0].checkValidity())
      .should('be.false')
  });

  it("Adding a book", () => {
    cy.visit('/');
    cy.login("bropet@mail.ru", "123");
    cy.book("Джейн Эйр", "Шарлотта Бронте");
    cy.get('.card-body').should('be.visible')
  });

  it("Adding a book to favorites", () => {
    cy.visit('/');
    cy.login("bropet@mail.ru", "123");
    cy.book("Джейн Эйр", "Шарлотта Бронте");
    cy.contains("Add to favorite").click();
    cy.contains("Favorites").click();
    cy
      .get(".card-title")
      .then(($el) => $el[0].checkVisibility())
      .should("be.true")
  });
});