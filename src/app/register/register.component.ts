import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name!: string;
  lastname!:string;
  email!: string;
  password!: string;

  constructor(private userService: UserService) {}
  showPopup() : void{

    alert("Registration successful!")
   }

  onSubmit() {
    const userData = {
      name: this.name,
      lastname: this.lastname,
      email: this.email,
      password: this.password
    };


    // this.userService.registerUser(userData)
    //   .subscribe(
    //     () => {
    //       // Handle successful registration
    //     },
    //     () => {
    //       // Handle registration error
    //     }
    //   );
  }
}
function showPopup() {
  throw new Error('Function not implemented.');
}

