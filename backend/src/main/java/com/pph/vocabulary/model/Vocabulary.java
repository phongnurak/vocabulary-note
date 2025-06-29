package com.pph.vocabulary.model;

public class Vocabulary {
	private String word;
	private VocabularyType context;
	
	public Vocabulary(String word, VocabularyType context) {
		this.word    = word;
		this.context = context;
	}

	public String getWord() {
		return word;
	}

	public void setWord(String word) {
		this.word = word;
	}

	public VocabularyType getContext() {
		return context;
	}

	public void setContext(VocabularyType context) {
		this.context = context;
	}
	
}
