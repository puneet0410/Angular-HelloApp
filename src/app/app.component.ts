import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Helloworld';
  imgUrl = "../assets/BL_logo_square_jpg.jpg";
  url = "https://www.bridgelabz.com";
  userName: string = ""; 
  nameError: string = "";  

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz.";
  }

  onClick($event: Event): void {
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }

  onInput($event: Event) {
    console.log("Change Event Occurred!", ($event.target as HTMLInputElement).value);
  
    this.userName = ($event.target as HTMLInputElement).value;  
    
    const nameRegex = /^[A-Z]{1}[a-zA-Z\s]{2,}$/;  
  
    if (nameRegex.test(this.userName)) {
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect!";
  }
  
}