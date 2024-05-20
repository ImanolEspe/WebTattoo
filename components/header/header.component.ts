import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, MessagesModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private apiService: ApiService,
    private router: Router
  ) {
    this.checkLogin();
  }

  checkLogin() {
    console.log(this.apiService.getIsLogged())
    if (this.apiService.getIsLogged() === true) {
      console.log("entra")
      this.router.navigate(['/clientes']);
    }
  }


}
