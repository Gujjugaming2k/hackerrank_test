var path = require("path");

module.exports = {
  HomePage_Content: function (browser) {
    browser
      .url("file://" + __dirname + "/../src/index.html")
      .waitForElementPresent("body", 10000, "Page loaded");
    browser
      .url(browser.launch_url)
      .waitForElementVisible("body")
      .verify.containsText(
        "body > header > h3",
        "Event Management"
      )
      .verify.containsText("body > figure > figcaption > h1", "Book Us On Your Great Events")
      .verify.containsText(
        "body > figure > figcaption > button",
        "Click Here!"
      )
      .verify.containsText("body > footer","Address: No:3, abc street, Xyz, ZZZ-21. Contact No: 1111111111. Copywrite@2021Fresco")
      .click("body > figure > figcaption > button")
      .assert.urlContains("/index.html#mainSection")
      .verify.containsText("#mainSection > section:nth-child(1) > h3","DECOR")
      .verify.containsText("#mainSection > section:nth-child(2) > h3","DINING")
      .verify.containsText("#mainSection > section:nth-child(3) > h3","INVITATION")
      .assert.attributeContains("#mainSection > section:nth-child(1) > img","src","Decor1.JPG")
      .assert.attributeContains("#mainSection > section:nth-child(2) > img","src","Decor2.JPG")
      .assert.attributeContains("#mainSection > section:nth-child(3) > img","src","Invitation1.jpg")
      .assert.attributeContains("body > figure > img","src","Wallpaper1.jpg")
      .end();
  },
  Navigation: function (browser) {
    browser
      .url("file://" + __dirname + "/../src/index.html")
      .waitForElementPresent("body", 10000, "Page loaded");
    browser
      .url(browser.launch_url)
      .waitForElementVisible("body")
      .click("body > figure > figcaption > button")
      .pause(500)
      .click("#mainSection > section:nth-child(1)")
      .assert.urlContains("/Decoration.html")
      .click("body > header > a")
      .assert.urlContains("/index.html")
      .click("#mainSection > section:nth-child(2)")
      .assert.urlContains("/Dining.html")
      .click("body > header > a")
      .assert.urlContains("/index.html")
      .click("#mainSection > section:nth-child(3)")
      .assert.urlContains("/Invitation.html")
      .click("body > header > a")
      .assert.urlContains("/index.html")
      .end();
  },
  Decortaion_Content: function (browser) {
    browser
      .url("file://" + __dirname + "/../src/Decoration.html")
      .waitForElementPresent("body", 10000, "Page loaded");
    browser
      .url(browser.launch_url)
      .waitForElementVisible("body")
      .verify.containsText(
        "body > header > h3",
        "Event Management"
      )
      .verify.containsText("body > footer","Address: No:3, abc street, Xyz, ZZZ-21. Contact No: 1111111111. Copywrite@2021Fresco")
      .verify.containsText("body > main > section:nth-child(1) > h3","Register Here To Book Us For Decor")
      .assert.attributeContains("body > main > section:nth-child(1) > form > input[type=text]:nth-child(1)","placeholder","Name")
      .assert.attributeContains("body > main > section:nth-child(1) > form > input[type=tel]:nth-child(3)","placeholder","Contact")
      .assert.attributeContains("body > main > section:nth-child(1) > form > input[type=date]:nth-child(5)","type","date")
      .assert.attributeContains("body > main > section:nth-child(1) > form > input[type=text]:nth-child(1)","required",true)
      .assert.attributeContains("body > main > section:nth-child(1) > form > input[type=tel]:nth-child(3)","required",true)
      .assert.attributeContains("body > main > section:nth-child(1) > form > input[type=date]:nth-child(5)","required",true)
      .assert.attributeContains("body > main > section:nth-child(1) > form > select:nth-child(7)","required",true)
      
      .assert.attributeContains("body > main > section:nth-child(1) > form > input[type=text]:nth-child(1)","pattern","[A-Za-z ]{3,}")
      .assert.attributeContains("body > main > section:nth-child(1) > form > input[type=tel]:nth-child(3)","pattern","[7-9]{1}[0-9]{9}")
      .assert.attributeContains("body > main > section:nth-child(1) > form > input[type=text]:nth-child(1)","title","minimum three letters required")
      .assert.attributeContains("body > main > section:nth-child(1) > form > input[type=tel]:nth-child(3)","title","Phone number should have 10 digits which should starts with 7-9 and remaing 9 digit with 0-9")

      .verify.containsText("body > main > section:nth-child(1) > form > select:nth-child(7) > option:nth-child(1)","Select The Props")
      .verify.containsText("body > main > section:nth-child(1) > form > select:nth-child(7) > option:nth-child(2)","Light")
      .verify.containsText("body > main > section:nth-child(1) > form > select:nth-child(7) > option:nth-child(4)","Flowers")
      .verify.containsText("body > main > section:nth-child(1) > form > select:nth-child(9) > option:nth-child(1)","Select The Space")
      .verify.containsText("body > main > section:nth-child(1) > form > select:nth-child(9) > option:nth-child(2)","Outdoor Stage")
      .verify.containsText("body > main > section:nth-child(1) > form > select:nth-child(9) > option:nth-child(3)","Indoor Stage")
      .assert.attributeContains("body > main > section:nth-child(1) > form > select:nth-child(9) > option:nth-child(3)","value","Indoor")
      .verify.containsText("body > main > section:nth-child(1) > form > select:nth-child(9) > option:nth-child(5)","Dining")
      .verify.containsText("body > main > section:nth-child(1) > form > select:nth-child(10) > option:nth-child(1)","Select Price Range")
      .verify.containsText("body > main > section:nth-child(1) > form > select:nth-child(10) > option:nth-child(3)","10,000 - 20,000")
      .verify.containsText("body > main > section:nth-child(1) > form > select:nth-child(10) > option:nth-child(4)","20,000 - 30,000")
      .assert.attributeContains("body > main > section:nth-child(1) > form > select:nth-child(10) > option:nth-child(4)","value","20,000 - 30,000")
      .verify.containsText("body > main > section:nth-child(1)> form > button","Register")
      .setValue("body > main > section:nth-child(1) > form > input[type=text]:nth-child(1)","Anu Sha")
      .setValue("body > main > section:nth-child(1) > form > input[type=tel]:nth-child(3)","9876543211")
      .setValue("body > main > section:nth-child(1) > form > input[type=date]:nth-child(5)","02/09/2022")
      .click("body > main > section:nth-child(1) > form > select:nth-child(7) > option:nth-child(3)")
      .click("body > main > section:nth-child(1) > form > select:nth-child(9) > option:nth-child(3)")
      .click("body > main > section:nth-child(1) > form > select:nth-child(10) > option:nth-child(3)")
      .click("body > main > section:nth-child(1) > form > button")
      .acceptAlert()
      .end();
  },
  Decoration_Carousel: function (browser) {
    browser
      .url("file://" + __dirname + "/../src/Decoration.html")
      .waitForElementPresent("body", 10000, "Page loaded");
    browser
      .url(browser.launch_url)
      .waitForElementVisible("body")
      .assert.attributeContains("body > main > section:nth-child(2) > div > div > div > div > div.owl-stage-outer > div > div:nth-child(3)","class","active")
      .assert.not.attributeContains("body > main > section:nth-child(2) > div > div > div > div > div.owl-stage-outer > div > div:nth-child(4)","class","active")
      .pause(5000)
      .assert.not.attributeContains("body > main > section:nth-child(2) > div > div > div > div > div.owl-stage-outer > div > div:nth-child(3)","class","active")
      .assert.attributeContains("body > main > section:nth-child(2) > div > div > div > div > div.owl-stage-outer > div > div:nth-child(4)","class","active")
      .end();
  },
  Dining_Content: function (browser) {
    browser
      .url("file://" + __dirname + "/../src/Dining.html")
      .waitForElementPresent("body", 10000, "Page loaded");
    browser
      .url(browser.launch_url)
      .waitForElementVisible("body")
      .verify.containsText(
        "body > header > h3",
        "Event Management"
      )
      .verify.containsText("body > footer","Address: No:3, abc street, Xyz, ZZZ-21. Contact No: 1111111111. Copywrite@2021Fresco")
      .verify.containsText("body > main > section:nth-child(1) > h3","Combo 1")
      .assert.attributeContains("body > main > section:nth-child(1) > img","src","Decor2.JPG")
      .verify.containsText("body > main > section:nth-child(1) > ul > li:nth-child(1)","Main Course 1")
      .verify.containsText("body > main > section:nth-child(1) > ul > li:nth-child(2)","Main Course 2")
      .verify.containsText("body > main > section:nth-child(1) > ul > li:nth-child(3)","Starters 1")
      .verify.containsText("body > main > section:nth-child(1) > ul > li:nth-child(4)","Starters 2")
      .verify.containsText("body > main > section:nth-child(1) > ul > li:nth-child(5)","Sweets")

      .verify.containsText("body > main > section:nth-child(2) > h3","Combo 2")
      .assert.attributeContains("body > main > section:nth-child(2) > img","src","Decor2.JPG")
      .verify.containsText("body > main > section:nth-child(2) > ul > li:nth-child(1)","Main Course 1")
      .verify.containsText("body > main > section:nth-child(2) > ul > li:nth-child(2)","Main Course 2")
      .verify.containsText("body > main > section:nth-child(2) > ul > li:nth-child(3)","Starters 1")
      .verify.containsText("body > main > section:nth-child(2) > ul > li:nth-child(4)","Starters 2")
      .verify.containsText("body > main > section:nth-child(2) > ul > li:nth-child(5)","Sweets")
      .verify.containsText("body > main > section:nth-child(3) > h3","Combo 3")
      .assert.not.attributeContains("dialog","open","true")
      .click("body > main > section:nth-child(3) > h3")
      .assert.attributeContains("dialog","open","true")
      .verify.containsText("dialog > p","Register Here To Book Us For Dining")
      .verify.containsText("dialog > form > select > option:nth-child(1)","Select The Combo")
      .verify.containsText("dialog > form > select > option:nth-child(2)","Combo1")
      .verify.containsText("dialog > form > select > option:nth-child(3)","Combo2")
      .assert.attributeContains("dialog > form > input[type=text]:nth-child(2)","placeholder","Name")
      .assert.attributeContains("dialog > form > input[type=email]:nth-child(3)","placeholder","Email")
      .assert.attributeContains("dialog > form > input[type=tel]:nth-child(4)","placeholder","Contact Number")
      .assert.attributeContains("dialog > form > input[type=date]:nth-child(5)","type","date")
      .assert.attributeContains("dialog > form > input[type=text]:nth-child(2)","required",true)
      .assert.attributeContains("dialog > form > input[type=email]:nth-child(3)","required",true)
      .assert.attributeContains("dialog > form > input[type=tel]:nth-child(4)","required",true)

      .assert.attributeContains("dialog > form > input[type=text]:nth-child(2)","pattern","[A-Za-z ]{3,}")
      .assert.attributeContains("dialog > form > input[type=tel]:nth-child(4)","pattern","[7-9]{1}[0-9]{9}")
      .assert.attributeContains("dialog > form > input[type=text]:nth-child(2)","title","minimum three letters required")
      .assert.attributeContains("dialog > form > input[type=tel]:nth-child(4)","title","Phone number should have 10 digits which should starts with 7-9 and remaing 9 digit with 0-9")

      .assert.attributeContains("dialog > form > input[type=date]:nth-child(5)","type","date")
      .verify.containsText("dialog > form > div > button:nth-child(1)","Register")
      .verify.containsText("dialog > form > div > button:nth-child(2)","Cancel")
      .click("dialog > form > div > button:nth-child(2)")
      .assert.not.attributeContains("dialog","open","true")
      .end();
  },
  Invitation_Content: function (browser) {
    browser
      .url("file://" + __dirname + "/../src/Invitation.html")
      .waitForElementPresent("body", 10000, "Page loaded");
    browser
      .url(browser.launch_url)
      .waitForElementVisible("body")
      .verify.containsText(
        "body > header > h3",
        "Event Management"
      )
      .verify.containsText("body > footer","Address: No:3, abc street, Xyz, ZZZ-21. Contact No: 1111111111. Copywrite@2021Fresco")
      .verify.containsText("body > main > h1","Our Invitation Designs")
      .verify.elementPresent("body > main > section:nth-child(8) > img")
      .assert.attributeContains("body > main > section:nth-child(5) > img","src","Invitation3")
      .assert.attributeContains("body > main > section:nth-child(7) > img","src","Invitation1")
      .pause(5000)
      .verify.containsText("body > main > marquee","****** For Invitation, Orders are Taken Directly At Our Shop ******")
      .end();
  },
  
};
