package au.com.carsguide.cucumber.stepdefs;

import au.com.carsguide.pages.BuyPage;
import au.com.carsguide.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class BuyStepdefs {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I mouse hover on \"([^\"]*)\" tab$")
    public void iMouseHoverOnTab(String arg0) throws InterruptedException {
        Thread.sleep(1000);
        new HomePage().mouseHoverOnBuyAndSellTab();
    }

    @And("^I click Search Cars$")
    public void iClickSearchCars() throws InterruptedException {
        Thread.sleep(1000);
        new HomePage().clickOnSearchCarsTab();
    }

    @Then("^I navigate to new and used car search page$")
    public void iNavigateToNewAndUsedCarSearchPage() throws InterruptedException {
        Thread.sleep(1000);
        Assert.assertEquals("New & Used Car Search - carsguide",new HomePage().verifyNewAndUsedCarSearchPageText());
    }

    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String make) throws InterruptedException {
        Thread.sleep(1000);
        new BuyPage().setSelectMakeTab(make);

    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String model) throws InterruptedException {
        Thread.sleep(1000);
        new BuyPage().setSelectModelTab(model);
    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String location) throws InterruptedException {
        Thread.sleep(1000);
        new BuyPage().setSelectLocationTab(location);

    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String price) throws InterruptedException {
        Thread.sleep(1000);
        new BuyPage().setSelectPrice(price);

    }

    @And("^I click on Find My Next Car tab$")
    public void iClickOnFindMyNextCarTab() throws InterruptedException {
        Thread.sleep(1000);
        new BuyPage().clickOnFindMyNextCarTab();
    }

    @Then("^I should see the make \"([^\"]*)\" in results$")
    public void iShouldSeeTheMakeInResults(String make)  {
        Assert.assertTrue(new BuyPage().verifyMakeText().contains(make));
    }
}
