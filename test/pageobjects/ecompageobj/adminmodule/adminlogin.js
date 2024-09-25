
class adminlogin
{
get loginbtn()
{
    return $("//a[text()='LOGIN']")
}

get username(){
    return $("//input[@placeholder='Email']")
}
get password(){
    return $("//input[ @placeholder='Password']")
}
get signin(){
    return $("[name='login']")
}
async loginoptn(a,b)
{
await this.loginbtn.click()
await this.username.setValue(a)
await this.password.setValue(b)
await this.signin.click()
}
}
export default new adminlogin()