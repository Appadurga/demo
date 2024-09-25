class loginpage{

    get username(){
        return $("[name='user_name']")
    }
    get password(){

        return $("[name='user_password']")
    }
    get loginbutton(){
        return $('#submitButton')
    }
    
    async loginls(a,b){
        await this.username.setValue(a)
        await this.password.setValue(b)
        await this.loginbutton.click()
    }
        
} 

export default new loginpage()