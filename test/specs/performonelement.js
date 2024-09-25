describe("facebook",()=>{
    it("launch the url",async()=>{

   await browser.url("https://www.amazon.in/")
     const s=await browser.$('#searchDropdownBox')
     const a=await browser.$('#searchDropdownBox').isClickable()
     console.log(a);
     
     await browser.waitUntil(() => s.isClickable())
     
     
    
})
})