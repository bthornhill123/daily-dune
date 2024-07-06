import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, CollectionReference, DocumentData, addDoc, Timestamp } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export class JournalEntry implements DocumentData {
  title = '';
  content = '';
  date: Timestamp = Timestamp.fromDate(new Date());
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private collectionMap: Map<string, CollectionReference> = new Map<string, CollectionReference>();
  public journalEntries$: Observable<JournalEntry[]>;

  constructor(
    firestore: Firestore,
  ) {
    const journalEntryCollection = collection(firestore, 'journalEntries') as CollectionReference<JournalEntry>;
    this.collectionMap.set('journalEntries', journalEntryCollection);
    this.journalEntries$ = collectionData(journalEntryCollection);
  }

  async addDocument(collectionName: string, data: DocumentData) {
    const collection = this.collectionMap.get(collectionName);
    if (!collection) {
      console.error(`Collection ${collectionName} does not exist`);
      return;
    }

    const response = await addDoc(collection, data);
    console.log('response :>> ', response);
  }
}
