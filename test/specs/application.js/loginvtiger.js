
import loginpage from "../../pageobjects/login.js"
import organization from "../../pageobjects/organization.js"

import fs from "fs"
 let data=fs.readFileSync("./test/specs/testData/credentials.json")
let cred=JSON.parse(data)

describe("login app",()=>{
    cred.forEach(obj => {
        let URL=obj.url
        let username=obj.un
 let password=obj.pwd
 let organizationname=obj.orgname
 it("user is able to login",async()=>{

    
     await browser.url(URL)
    await loginpage.loginls(username,password)
    await organization.orgoptn(organizationname)
   //await expect(this.orgname).toHaveTextContaining("gowtham")
    });
 
}) 
//it("logout",()=>{})
    

})