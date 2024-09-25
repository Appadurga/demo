import adminlogin from "../../pageobjects/ecompageobj/adminmodule/adminlogin.js"
import userdetails from "../../pageobjects/ecompageobj/adminmodule/adduser.js"

 import fs from "fs"

  let data=fs.readFileSync("./test/testData/adminlogincred.json")
  let cred=JSON.parse(data)

  let data1=fs.readFileSync("./test/testData/adminuserdetails.json")
  let cred1=JSON.parse(data1)

describe("admin module end to end flow",()=>{
    let URL=cred.url
     let username=cred.un
     let password=cred.pwd
     let email=cred1.mail
     let  pw=cred1.password
     let fn=cred1.fname
     let ln=cred1.lname
     let ad=cred1.address
     let phn=cred1.phoneno
     let path=cred1.filepath


    it("login to application",async()=>{
        await browser.url(URL)
       await adminlogin.loginoptn(username,password)
    })
    it("add user details",async()=>{

        await userdetails.userfunction(email,pw,fn,ln,ad,phn,path)
        await browser.pause()
    })
})