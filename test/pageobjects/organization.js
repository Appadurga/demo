class orgpage{

get orglink()
{
    return $("=Organizations")
}
 get orgplus()
 {

    return $("//img[@alt='Create Organization...']")
 }
 get orglastname()
 {
    return $("[name='accountname']")
 }
 get addplus()
 {
    return $("//input[@name='account_name']/following-sibling::img")
 }
 get searchtxt()
 {
    return $("[name='search']")
 }
get savebtn()
{
    return $("//input[@title='Save [Alt+S]']")
}
get orgname()
{
   return $(".dvHeaderText")
}

 async orgoptn(c)
 {
    await this.orglink.click()
   await this.orgplus.click()
    let x = Math.floor((Math.random() * 1000) + 1);
    await this.orglastname.addValue(c+x)
   // await this.addplus.click()
   
    await this.savebtn.click()
    let s=this.orgname.getText()
     console.log(s);
     
 }

}

export default new orgpage()