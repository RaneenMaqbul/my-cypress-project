import HomePage from '../../pages/HomePage';
import CategoryPage from '../../pages/CategoryPage';


describe('Smoke Test - Category Products Flow (POM)', () => {
    const homePage = new HomePage();
    const categorypage = new CategoryPage();

    let userData;

    before(() => {
        cy.fixture('userData').then((data) => {
            userData = data;
        });
    });

    it('View Category Products', () => {
        // Step 1,2: Launch & Naviage 
        homePage.visit();
        //3. Verify that categories are visible on left side bar
        categorypage.VerifyCategoryLink()
        //4. Click on 'Women' category
        categorypage.ClickInWomenCategory()
        //5. Click on any category link under 'Women' category, for example: Dress
        categorypage.ClickInDressCategory()
        //6. Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
        categorypage.ValidationMessageForDress()
        //7. Click In Men Category
        categorypage.ClickInMenCategory()
        //8.Verify that user is navigated to that category page
        categorypage.ValidationMessageForMen()
    });



});

