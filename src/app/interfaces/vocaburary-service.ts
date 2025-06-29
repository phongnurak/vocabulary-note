import { Observable } from "rxjs";
import { Vocabulary } from "../models/vocabulary";
import { StorageType } from "../models/common-model";

export interface VocabularyService {

    canHandle(type: StorageType): boolean;

    onValueChange(): Observable<Vocabulary[]>;

    getAllVocaburary(): Vocabulary[];
    
    addVocaburary(newVocaburary: Vocabulary): void;
    
    deleteVocaburary(word: String): void;
}