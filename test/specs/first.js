describe("first script",()=>{
    it("launch the url",async()=>{

        await browser.url("https://www.flipkart.com/")
       // let a=await browser.$("//input[@class='Pke_EE']").addValue("shoes")
       let a=await browser.$("//input[@class1='Pke_EE']").setValue("shoes")
    })
})