import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  //private instance: LocalStorageService;

  private dbName = 'vocaburary.db';

  private _localPath: string | null = null;
  
  public set value(path : string) {
    this._localPath = path;
  }
  
  public constructor() {
    
  }

  public getAllVocaburary(): void {
  }

  

  public deleteVacaburary(): void {

  }


}
