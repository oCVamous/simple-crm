import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  user: User = new User(); 
  birthDate!: Date;

  color = 'primary';
  mode: any = 'indeterminate';
  value = 50;
  bufferValue = 75;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current user is', this.user);

    this.loading = true;
    console.log(this.loading);

    this.firestore
    .collection('users')
    .add(this.user.toJSON())
    .then((result:any)=> {
      console.log('Adding user fisnished', result);
      this.loading = false;
      console.log(this.loading);
      this.dialogRef.close()
    })
  }

}
