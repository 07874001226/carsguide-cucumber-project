$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search Functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \"buy+sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 17,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Land Rover",
        "Range Rover",
        "SA - All",
        "$100,000"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "Honda",
        "CR-V",
        "NSW - Far West",
        "$60,000"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Mercedes-Benz",
        "E250",
        "SA - All",
        "$50,000"
      ],
      "line": 20,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Jeep",
        "Cherokee",
        "SA - Adelaide",
        "$30,000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Volvo",
        "V40",
        "SA - All",
        "$100,000"
      ],
      "line": 22,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Mazda",
        "BT-50",
        "WA - Country East",
        "$80,000"
      ],
      "line": 23,
      "id": "search-functionality;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13462237900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \"buy+sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Land Rover\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Range Rover\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"SA - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$100,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Land Rover\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 407749700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy+sell",
      "offset": 18
    }
  ],
  "location": "BuyStepdefs.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 1431756100,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickSearchCars()"
});
formatter.result({
  "duration": 4414142600,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 1091507500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Land Rover",
      "offset": 15
    }
  ],
  "location": "BuyStepdefs.iSelectMake(String)"
});
formatter.result({
  "duration": 1265318400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Range Rover",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectModel(String)"
});
formatter.result({
  "duration": 1200471200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SA - All",
      "offset": 19
    }
  ],
  "location": "BuyStepdefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 1225909300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100,000",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 1186025500,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 14241207700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Land Rover",
      "offset": 23
    }
  ],
  "location": "BuyStepdefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 57867400,
  "status": "passed"
});
formatter.after({
  "duration": 1227278200,
  "status": "passed"
});
formatter.before({
  "duration": 12392579400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \"buy+sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"CR-V\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - Far West\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$60,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Honda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 29300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy+sell",
      "offset": 18
    }
  ],
  "location": "BuyStepdefs.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 1267558800,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickSearchCars()"
});
formatter.result({
  "duration": 12460131000,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 1082174200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "BuyStepdefs.iSelectMake(String)"
});
formatter.result({
  "duration": 1203319000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CR-V",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectModel(String)"
});
formatter.result({
  "duration": 1182772800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Far West",
      "offset": 19
    }
  ],
  "location": "BuyStepdefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 1194201800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$60,000",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 1233313500,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 14052030300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "BuyStepdefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 62324700,
  "status": "passed"
});
formatter.after({
  "duration": 1121121700,
  "status": "passed"
});
formatter.before({
  "duration": 8747263500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \"buy+sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Mercedes-Benz\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"E250\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"SA - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$50,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Mercedes-Benz\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 30500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy+sell",
      "offset": 18
    }
  ],
  "location": "BuyStepdefs.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 1294411600,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickSearchCars()"
});
formatter.result({
  "duration": 4285874700,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 1087536700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mercedes-Benz",
      "offset": 15
    }
  ],
  "location": "BuyStepdefs.iSelectMake(String)"
});
formatter.result({
  "duration": 1221148900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "E250",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectModel(String)"
});
formatter.result({
  "duration": 1189667000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SA - All",
      "offset": 19
    }
  ],
  "location": "BuyStepdefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 1249313200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 1192361800,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 14928773400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mercedes-Benz",
      "offset": 23
    }
  ],
  "location": "BuyStepdefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 53564900,
  "status": "passed"
});
formatter.after({
  "duration": 1101745900,
  "status": "passed"
});
formatter.before({
  "duration": 7173611600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \"buy+sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Jeep\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Cherokee\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"SA - Adelaide\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$30,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Jeep\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 29100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy+sell",
      "offset": 18
    }
  ],
  "location": "BuyStepdefs.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 1281349900,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickSearchCars()"
});
formatter.result({
  "duration": 3747928100,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 1069743300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 15
    }
  ],
  "location": "BuyStepdefs.iSelectMake(String)"
});
formatter.result({
  "duration": 1187684500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cherokee",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectModel(String)"
});
formatter.result({
  "duration": 1180681400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SA - Adelaide",
      "offset": 19
    }
  ],
  "location": "BuyStepdefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 1256140200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$30,000",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 1188469500,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 14770269100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 23
    }
  ],
  "location": "BuyStepdefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 52400200,
  "status": "passed"
});
formatter.after({
  "duration": 1256894100,
  "status": "passed"
});
formatter.before({
  "duration": 8419989300,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \"buy+sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Volvo\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"V40\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"SA - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$100,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Volvo\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 29200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy+sell",
      "offset": 18
    }
  ],
  "location": "BuyStepdefs.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 1417263000,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickSearchCars()"
});
formatter.result({
  "duration": 4646768400,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 1105394600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Volvo",
      "offset": 15
    }
  ],
  "location": "BuyStepdefs.iSelectMake(String)"
});
formatter.result({
  "duration": 1231110400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "V40",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectModel(String)"
});
formatter.result({
  "duration": 1211115900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SA - All",
      "offset": 19
    }
  ],
  "location": "BuyStepdefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 1286188400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100,000",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 1178706900,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 14696170500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Volvo",
      "offset": 23
    }
  ],
  "location": "BuyStepdefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 169093400,
  "status": "passed"
});
formatter.after({
  "duration": 1263175600,
  "status": "passed"
});
formatter.before({
  "duration": 13522623600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \"buy+sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Mazda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"BT-50\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"WA - Country East\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$80,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Mazda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 37000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy+sell",
      "offset": 18
    }
  ],
  "location": "BuyStepdefs.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 1362981000,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickSearchCars()"
});
formatter.result({
  "duration": 4431479800,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 1089733800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 15
    }
  ],
  "location": "BuyStepdefs.iSelectMake(String)"
});
formatter.result({
  "duration": 1274820200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BT-50",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectModel(String)"
});
formatter.result({
  "duration": 1220879600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WA - Country East",
      "offset": 19
    }
  ],
  "location": "BuyStepdefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 1345975900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$80,000",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 1213592000,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 15034203800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 23
    }
  ],
  "location": "BuyStepdefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 79181100,
  "status": "passed"
});
formatter.after({
  "duration": 1076090500,
  "status": "passed"
});
});