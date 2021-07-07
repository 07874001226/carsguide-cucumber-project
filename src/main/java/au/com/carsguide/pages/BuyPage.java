package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BuyPage extends Utility {

    private static final Logger log = LogManager.getLogger(BuyPage.class.getName());


    @FindBy(xpath = "//select[@id='makes']")////input[@id='uhf-make']
    WebElement selectMake;
    @FindBy(xpath = "//select[@id='models']")//input[@id='uhf-model']
    WebElement selectModel;
    @FindBy(xpath = "//select[@id='locations']")
    WebElement selectLocation;
    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement selectPrice;
    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement findMyNextCar;
    @FindBy(xpath = "//h1[@class='listing-search-title']")
    WebElement verifyMake;


    public void setSelectMakeTab(String make) {
        selectByValueFromDropDown(selectMake, make);
        log.info("Select Car from Dropdown list " +selectMake.toString());
    }

    public void setSelectModelTab(String model) {
        selectByValueFromDropDown(selectModel, model);
        log.info("Selecting Model : " + selectModel.toString());
    }

    public void setSelectLocationTab(String location) {
        selectByValueFromDropDown(selectLocation, location);
        log.info("Selecting location : "+ selectLocation.toString());
    }

    public void setSelectPrice(String price) {
        selectByVisibleTextFromDropDown(selectPrice, price);
        log.info("Selecting Price : " + selectPrice.toString());
    }

    public void clickOnFindMyNextCarTab() {
        clickOnElement(findMyNextCar);
        log.info("Selecting Nextcar : " + findMyNextCar.toString());
    }

    public String verifyMakeText() {
        log.info("Getting Text from : " + getTextFromElement(verifyMake).toString());
        return getTextFromElement(verifyMake);

    }


}
