import loginpage from "../../pageobjects/login.js"
import organization from "../../pageobjects/organization.js"

import fs from "fs"
 let data=fs.readFileSync("./test/specs/testData/credentials.json")
let cred=JSON.parse(data)

describe("login app",()=>{
 let URL=cred.url
 let username=cred.un
 let password=cred.pwd
 let organizationname=cred.orgname
    it("user is able to login",async()=>{

    
       await browser.url(URL)
       await loginpage.loginls(username,password)
       await organization.orgoptn(organizationname)
      // await expect(this.orgname).toHaveTextContaining("gowtham")
        
    
    })
})