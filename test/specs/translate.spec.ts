import TranslatePage from '../pageobjects/translate.page'


describe('select language', function () {
    it('checkbox 2 should be enabled', function () {
        TranslatePage.open()
        expect(TranslatePage.title).not.toBeNull
        // expect(CheckboxPage.lastCheckbox).toBeSelected()
    })

    // it('checkbox 1 should be enabled after clicking on it', function () {
    //     CheckboxPage.open()
    //     expect(CheckboxPage.firstCheckbox).not.toBeSelected()
    //     CheckboxPage.firstCheckbox.click()
    //     expect(CheckboxPage.firstCheckbox).toBeSelected()
    // })
})
