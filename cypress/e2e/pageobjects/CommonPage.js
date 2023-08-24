class CommonPage {
    // Locators
    get productsNavLink() {
      return cy.get("a[href*='products']");
    }
    get loginNavLink() {
      return cy.get("a[href*='login']");
    }
    get deleteAccountLink() {
      return cy.get("a[href*='delete']");
    }
  
    // Methods
    navigateToPage(page) {
      switch (page) {
        case 'products':
          this.productsNavLink.click();
        case 'login':
          this.loginNavLink.click();
      }
    }
  
    clickDeleteAccount() {
      this.deleteAccountLink.click({ force: true });
    }
  }
  
  export default CommonPage;
  