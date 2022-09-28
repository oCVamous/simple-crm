import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  user: User = new User(); 
  birthDate!: Date;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current user is', this.user);

    this.firestore.collection('users').add(this.user.toJSON()).then((result:any)=> {
      console.log('Adding user fisnished', result)
    })
  }

}
