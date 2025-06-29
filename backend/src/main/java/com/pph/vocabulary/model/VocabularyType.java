package com.pph.vocabulary.model;

public class VocabularyType {
	
	private String displayValue;
	private String value;
	
	public VocabularyType(String displayValue, String value) {
		this.setDisplayValue(displayValue);
		this.setValue(value);
	}

	public String getDisplayValue() {
		return displayValue;
	}

	public void setDisplayValue(String displayValue) {
		this.displayValue = displayValue;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
	
}
