describe("check alter",()=>
    {

           await browser.url("https://the-internet.herokuapp.com/javascript_alerts")
           await browser.$("//button[@onclick='jsAlert()']").click()
           await browser.pause(2000)
           //await browser.acceptAlert()
           await browser.$("//button[@onclick='jsConfirm()']").click()
           await browser.pause(2000)
           await browser.$("//button[@onclick='jsPrompt()']").click()
           await browser.pause(2000)
           
             
        })
        


})