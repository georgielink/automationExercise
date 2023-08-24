import LoginPage from "./pageobjects/LoginPage";
import MainPage from "./pageobjects/MainPage";

describe('Automation Exercise', () => {
    const loginPage = new LoginPage();
    const mainPage = new MainPage();


    beforeEach(() => {
        cy.visit('/');
    });

    it('Scenario 1: Sign up and will create a user', () => {
        mainPage.navigateToPage('login');
        loginPage.enterSignupName('georgie');
        loginPage.enterSignupEmail('testEmailfaker7@gmail.com');
        loginPage.clickSignupButton();
        loginPage.selectGender('female');
        loginPage.selectBirthDay(21);
        loginPage.selectBirthMonth(6);
        loginPage.selectBirthYear(95);
        loginPage.enterPassword('p@s5word');
        loginPage.enterFirstName('Georgie');
        loginPage.enterLastName('Gogh');
        loginPage.enterAddress('Cebu');
        loginPage.enterState('RegionVI');
        loginPage.enterCity('Cebu City');
        loginPage.enterZipcode('6000');
        loginPage.enterMobileNumber('0917872923324');
        loginPage.clickCreateAccount();
        cy.contains('Account Created!').should('exist');
    
    });

    it('Scenario 2: Login User with correct email and password', () => {
        mainPage.navigateToPage('login');
        loginPage.loginTitle.should('have.text', 'Login to your account');
        loginPage.enterLoginEmail('testEmailfaker7@gmail.com');
        loginPage.enterLoginPassword('p@s5word');
        loginPage.clickLogin();
        cy.contains('Logged in as').should('exist');
        expect(loginPage.getLoggedUser(), 'Georgie');
       });
    
});
