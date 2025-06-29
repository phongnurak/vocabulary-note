package com.pph.vocabulary.db;

public class DerbyReposistory {
	
	private DerbyReposistory instance;
	
	private DerbyReposistory() {
	}
	
	public DerbyReposistory getInstance() {
		
		if (instance == null) {
			instance = new DerbyReposistory();
		}
		
		return this.instance;
	}
}
