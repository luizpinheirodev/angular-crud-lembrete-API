import { Component, ViewChild, OnInit } from '@angular/core';
import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD de lembrete com Angular';
}
