package com.pph.vocabulary.endpoint;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pph.vocabulary.model.Vocabulary;
import com.pph.vocabulary.model.VocabularyType;

@RestController
public class ReposistoryEndpoint {
	
	@GetMapping("/vocabularies")
	public List<Vocabulary> getVocabulary() {
		return buildExampleVocabularies();
	}
	
	
	private List<Vocabulary> buildExampleVocabularies() {
		List<Vocabulary> result = new ArrayList<Vocabulary>();
		
		Vocabulary word1 = new Vocabulary("Cat", new VocabularyType("Noun", "noun"));
		Vocabulary word2 = new Vocabulary("Run", new VocabularyType("Verb", "verb"));
		
		result.add(word1);
		result.add(word2);
		
		return result;
	}
}
