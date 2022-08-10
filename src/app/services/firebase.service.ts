import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

interface Item {
  first_name: string,
  last_name: string,
};

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  item$: Observable<Item[]> | undefined;
  constructor(private afs: AngularFirestore) { 
  
  }

  getUser(userKey:any){
    return this.afs.collection('users').doc(userKey).snapshotChanges();
  }


  updateUser(userKey:any, value:any){
    value.nameToSearch = value.name.toLowerCase();
    return this.afs.collection('users').doc(userKey).set(value);
  }

  deleteUser(userKey:any){
    return this.afs.collection('users').doc(userKey).delete();
  }

  getUsers(){
    return this.afs.collection('users').snapshotChanges();
  }

  searchUsers(searchValue:any){
    return this.afs.collection('users',ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  searchUsersByAge(value:any){
    return this.afs.collection('users',ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  }


  createUser(value:any, avatar:any){
    return this.afs.collection('users').add({
      name: value.name,
      nameToSearch: value.name.toLowerCase(),
      surname: value.surname,
      age: parseInt(value.age),
      avatar: avatar
    });
  }
}
