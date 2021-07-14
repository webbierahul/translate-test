import Page from "./page";
import detectLanguage from "../../utils/langdetect";

class TranslatePage extends Page {
    /**
     * define elements
     */
    // get lastCheckbox () { return $('#checkboxes input:last-Child') }
    // get firstCheckbox () { return $('#checkboxes input:first-Child') }

    get title() {
        console.log(
            $(
                '//*[@id="featured"]/div/div/div/div/div[1]/a/span/span[1]/span'
            ).getText()
        );
        console.log(
            "Language detected is--- >>>",
            detectLanguage(
                $(
                    '//*[@id="featured"]/div/div/div/div/div[1]/a/span/span[1]/span'
                ).getText()
            )
        );
        return $(
            '//*[@id="featured"]/div/div/div/div/div[1]/a/span/span[1]/span'
        ).getText();
    }
    /**
     * define or overwrite page methods
     */
    open() {
        super.open("");
    }
}

export default new TranslatePage();
