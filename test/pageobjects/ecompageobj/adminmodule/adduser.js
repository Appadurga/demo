class userdetails{
get userbtn(){
    return $("//i[@class='fa fa-users']")
}
get addnewuser(){
    return $("//a[@class='btn btn-primary btn-sm btn-flat']")
}

get useremail(){
    return $("(//input[@id='email' ])[2]")
}
get password(){
    return $("(//input[@id='password'])[2]")
}
get firstname(){
    return $("(//input[@id='firstname' ])[2]")
}
get lastname(){
    return $("(//input[@id='lastname' ])[2]")
}
get address(){
    return $("//textarea[@id='address' ]")
}
get usercontactinfo(){
      return $("//input[@id='contact' ]")
}
get userphoto(){
    return $("(//input[@id='photo'])[2]")
}
get usersavebtn(){
    return $("//button[@name='add']")
}
get userdeletebtn()
{
    return $("(//button[@class='btn btn-danger btn-sm delete btn-flat'])[3]")
}
async userfunction(a,b,c,d,e,f,g)
{
    await this.userbtn.click()
    await this.addnewuser.click()
    await this.useremail.setValue(a)
    await this.password.setValue(b)
    await this.firstname.setValue(c)
    await this.lastname.setValue(d)
    await this.address.setValue(e)
    await this.usercontactinfo.setValue(f)
   await this.userphoto.setValue(g)
   await this.usersavebtn.click()
   await browser.refresh()
   await this.userdeletebtn.click()

}
}
export default new userdetails()