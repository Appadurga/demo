describe("facebook",()=>{
    it("launch the url",async()=>{

   await browser.url("https://www.amazon.in/")
   //setvalue
   //let a=await browser.$('//input[@placeholder="Search Amazon.in"]').setValue("shoes for man")

   //getattribute
//    let a=await browser.$('//input[@placeholder="Search Amazon.in"]').getAttribute("placeholder")
//    console.log(a);
   
//    //gettitle
//    let b=await browser.$('//input[@placeholder="Search Amazon.in"]').getTitle()
//    console.log(b);
  //get text
   let c=await browser.$('//input[@placeholder="Search Amazon.in"]').getText()
   console.log(c);
   let d=await browser.$('#twotabsearchtextbox2').addValue("shoes")
   

   //click
   //await browser.$("//input[@id='nav-search-submit-button']").click()
   
   //get url
     //console.log(await  browser.getUrl());
    
     
  
  
  

    })
})