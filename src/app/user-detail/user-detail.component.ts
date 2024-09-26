import { Component, Input } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  @Input() usuario!: User | null;
}
