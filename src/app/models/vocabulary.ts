export interface Vocabulary {
    word: string;
    context: {
        type: VocabularyType; 
        meaning: string
    }
}

export interface VocabularyType {
    displayName: string;
    value: string;
}

// export  VocabularyTypes = [];

//export type VocabularyType = 'Noun' | 'Verb' | 'Adverb' | 'Adjective' | 'Preposition';