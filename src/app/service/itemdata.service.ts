import { Injectable } from '@angular/core';
import { elements } from '../../assets/elements.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemdataService {

  private content = new BehaviorSubject<elements[]>([]);
  private contentEdit = new BehaviorSubject<elements[]>([]);
  public share = this.content.asObservable();
  public sharetwo = this.contentEdit.asObservable();
  constructor() { }

  updateData(elements: any){
    this.content.next(elements)
  }

  getCurrentData(elements: any){
    this.contentEdit.next(elements)
  }
}
