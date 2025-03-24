import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Helloworld';

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz.";
  }
}