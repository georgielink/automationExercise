class AccountPage {

    get accountCreated(){
        return cy.get('[data-qa="account-created"]');
    }
   
    get accountDeletedText() {
      return cy.get('b');
    }
  
    get continueButton() {
      return cy.get('[data-qa="continue-button"]');
    }
  
    // Methods
    clickContinue() {
      this.continueButton.click();
    }
  }
  
  export default AccountPage;
  