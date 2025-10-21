class LogoutPAge {

    element = {
        LogoutLink: () => cy.get('a[href="/logout"]')
    }


    clickLogout() {
        this.element.LogoutLink().should('be.visible').click()
    }

}
export default LogoutPAge;