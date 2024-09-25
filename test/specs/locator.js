describe("facebook",()=>{
    it("launch the url",async()=>{

   await browser.url("https://www.amazon.in/")
   await browser.minimizeWindow()
   await browser.maximizeWindow()


   //id locator
   //let a=await browser.$('#twotabsearchtextbox').addValue("shoes")
   //name locator
//    let d=await browser.$('[name="field-keywords"]').addValue("shoes")
//    await browser.pause(2000)

   //CLASS
//    let a=await browser.$('.nav_a').click()
//    await browser.pause(2000)
//dropdown
     const a=await browser.$('#searchDropdownBox')
     const b=await a.getValue()
     console.log(b);

     await browser.back()
     await browser.pause(2000)
     await browser.forward()
     await browser.pause(2000)
     await browser.refresh()
     await browser.pause(2000)
     
     let title=await browser.$("//input[@id='nav-search-submit-button']").getTitle()
     console.log(title);
     

     //dropdown 
     //await browser.$('#searchDropdownBox').selectByVisibleText("Amazon Fashion")
     //await browser.$('#searchDropdownBox').selectByIndex([10])
    //  await browser.$('#searchDropdownBox').selectByAttribute('value','search-alias=amazon-devices')
    //  await browser.$("//input[@id='nav-search-submit-button']").getvalue()
     
    
})
})