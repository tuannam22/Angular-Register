// Trong Component->Pages->register


import { Component } from '@angular/core';
import { RegisterService } from '../../../Services/Register.module';

@Component({
    templateUrl:"register.component.html",
    selector:'register',
    providers:[RegisterService]
})

export class RegisterComponent{

    thongbao:Boolean=false;
    noidung:string= "";

    constructor( private Register:RegisterService){}
        registerform(f){
            // this.noidung="thanh cong";
            // this.thongbao=true;
            // console.log(f);            
            this.Register.getRegister(f.form.value.txtUsername,f.form.value.txtPassword,f.form.value.txtName,f.form.value.txtEmail).subscribe(data=>{
                // console.log(data);
                this.thongbao=true;
                this.noidung="dang ki  thanh cong";
            });
        }  
}
