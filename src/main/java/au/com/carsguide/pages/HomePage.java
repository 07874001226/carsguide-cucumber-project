package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @FindBy(xpath = "//a[contains(text(),'buy + sell')]")
    WebElement buyAndSell;
    @FindBy(xpath = "//a[contains(text(),'Search Cars')]")
    WebElement searchCars;
    @FindBy(xpath = "//h1[contains(text(),'New & Used Car Search - carsguide')]")
    WebElement newAndUsedCarSearch;

    public void mouseHoverOnBuyAndSellTab() {
        mouseHoverToElement(buyAndSell);
        log.info("Mouse hover on Buyandsell : " + buyAndSell + " to buyandsell field : " + buyAndSell.toString());

    }

    public void clickOnSearchCarsTab() {
        clickOnElement(searchCars);
        log.info("Clicking on searchcars : " + searchCars + " tosearchcars field : " + searchCars.toString());

    }

    public String verifyNewAndUsedCarSearchPageText() {
        log.info("Getting text from : " + newAndUsedCarSearch.toString());
        return getTextFromElement(newAndUsedCarSearch);
    }
}
