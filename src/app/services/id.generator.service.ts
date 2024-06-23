import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdGeneratorService {
  private currentId: number = 20;

  constructor() { }

  generatedId(): number {
    return Math.floor(Math.random() * this.currentId);

  }
}
