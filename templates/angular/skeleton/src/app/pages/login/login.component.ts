import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public username: string = '';
  public password: string = '';

  constructor(private api: ApiService) {
  }

  onSubmit() {
    window.location.href = '/homepage';
    this.api.login({username: this.username, password: this.password})
      .subscribe((res) => {
        window.location.href = '/homepage';
      });
  }


}
