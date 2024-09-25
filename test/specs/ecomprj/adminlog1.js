/**
 * @author Durga
 * @description This script tests the admin module end-to-end flow, including login and user details addition.
 */

import { expect } from "chai";
import adminlogin from "../../pageobjects/ecompageobj/adminmodule/adminlogin.js";
import userdetails from "../../pageobjects/ecompageobj/adminmodule/adduser.js";

import fs from "fs";

/** Read and parse the JSON data*/
let data = fs.readFileSync("./test/testData/aduserdetails.json");
let cred = JSON.parse(data);

describe("admin module end to end flow", () => {
 /** Access the first object for admin login details*/ 
let adminLogin = cred[0];
let URL = adminLogin.url;
let username = adminLogin.un;
let password = adminLogin.pwd;
/**Access the second object for user details */

let userDetails = cred[1];
let email = userDetails.mail;
let pw = userDetails.password;
let fn = userDetails.fname;
let ln = userDetails.lname;
let ad = userDetails.address;
let phn = userDetails.phoneno;
let path = userDetails.filepath;
    
    it("login to application", async () => {
        /**
     * @heading Login to Application
     * @description This test case verifies that the admin can log in to the application using provided credentials.
     */
        await browser.url(URL);
        await adminlogin.loginoptn(username, password);
        // Assertions
        expect(username).to.equal("admin@technicalbabaji.com")
        expect(URL).to.include("Simple_Ecommerce_Site_System")
        // Verify page title or another element to confirm successful login
        const title = await browser.getTitle();
        console.log(title);
        expect(title).to.include("Ecommerce Site");

    });

    /**
     * @heading Add User Details
     * @description This test case verifies that a user can be added with the provided details and checks if the user details are correctly displayed.
     */
    
    it("add user details", async () => {

        
        await userdetails.userfunction(email, pw, fn, ln, ad, phn, path);
        await browser.pause();
        // Validate that user details are correctly displayed on the page
        let val = await browser.$("//td[text()='durga123@gmail.com']").getText()
        expect(val).to.equal("durga123@gmail.com");
        let val1 = await browser.$("//td[text()='durga murugan']").getText()
        expect(val1).to.equal("durga murugan");
        
    });
    

});
