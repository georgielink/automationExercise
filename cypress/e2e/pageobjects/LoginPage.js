import CommonPage from "./commonPage";

class LoginPage extends CommonPage {
  
  get loginTitle() {
    return cy.get('.login-form > h2');
  }
  get loginEmailInput() {
    return cy.get('[data-qa="login-email"]');
  }
  get loginPasswordInput() {
    return cy.get('[data-qa="login-password"]');
  }
  get loginButton() {
    return cy.get('[data-qa="login-button"]');
  }
  get signupNameInput() {
    return cy.get('[data-qa="signup-name"]');
  }
  get signupEmailInput() {
    return cy.get('[data-qa="signup-email"]');
  }
  // Signup Form
  get passwordInput() {
    return cy.get('[data-qa="password"]');
  }
  get firstNameInput() {
    return cy.get('[data-qa="first_name"]');
  }
  get lastNameInput() {
    return cy.get('[data-qa="last_name"]');
  }
  get companyInput() {
    return cy.get('[data-qa="company"]');
  }
  get addressInput() {
    return cy.get('[data-qa="address"]');
  }
  get address2Input() {
    return cy.get('[data-qa="address2"]');
  }
  get stateInput() {
    return cy.get('[data-qa="state"]');
  }
  get cityInput() {
    return cy.get('[data-qa="city"]');
  }
  get zipcodeInput() {
    return cy.get('[data-qa="zipcode"]');
  }
  get mobileNumberInput() {
    return cy.get('[data-qa="mobile_number"]');
  }
  get birthDaySelect() {
    return cy.get('[data-qa="days"]');
  }
  get birthMonthSelect() {
    return cy.get('[data-qa="months"]');
  }
  get birthYearSelect() {
    return cy.get('[data-qa="years"]');
  }
  get countrySelect() {
    return cy.get('[data-qa="country"]');
  }
  get newsletterCheckbox() {
    return cy.get('#newsletter');
  }
  get specialOffersCheckbox() {
    return cy.get('#optin');
  }
  get genderMaleRadio() {
    return cy.get('#id_gender1');
  }
  get genderFemaleRadio() {
    return cy.get('#id_gender2');
  }
  get signupButton() {
    return cy.get('[data-qa="signup-button"]');
  }
  get createAccountButton() {
    return cy.get('[data-qa="create-account"]');
  }
  get continueButton() {
    return cy.get('[data-qa="continue-button"]');
  }

  get loggedUser() {
    return cy.get('i[class*="fa-user"] + b');
  }
 // Log In 
  enterLoginEmail(email) {
    this.loginEmailInput.type(email);
  }
  enterLoginPassword(password) {
    this.loginPasswordInput.type(password);
  }
  clickLogin() {
    this.loginButton.click();
  }
  enterSignupName(name) {
    this.signupNameInput.type(name);
  }
  enterSignupEmail(email) {
    this.signupEmailInput.type(email);
  }
  clickSignupButton() {
    this.signupButton.click();
  }
  // Signup Form
  enterPassword(password) {
    this.passwordInput.type(password);
  }
  enterFirstName(firstName) {
    this.firstNameInput.type(firstName);
  }
  enterLastName(lastName) {
    this.lastNameInput.type(lastName);
  }
  enterAddress(address) {
    this.addressInput.type(address);
  }
  enterState(state) {
    this.stateInput.type(state);
  }
  enterCity(city) {
    this.cityInput.type(city);
  }
  enterZipcode(zipcode) {
    this.zipcodeInput.type(zipcode);
  }
  enterMobileNumber(number) {
    this.mobileNumberInput.type(number);
  }
  checkNewsletter() {
    this.newsletterCheckbox.check();
  }
  checkSpecialOffers() {
    this.checkSpecialOffers.check();
  }
  selectBirthDay(day) {
    this.birthDaySelect.select(day);
  }
  selectBirthMonth(month) {
    this.birthMonthSelect.select(month);
  }
  selectBirthYear(year) {
    this.birthYearSelect.select(year);
  }
  selectGender(gender) {
    if (gender == 'male') this.genderMaleRadio.check();
    else this.genderFemaleRadio.check();
  }
  clickCreateAccount() {
    this.createAccountButton.click();
  }
  clickContinue() {
    this.continueButton.click();
  }
  getLoggedUser() {
    return this.loggedUser.invoke('text');
  }
}

export default LoginPage;
