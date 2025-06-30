package com.pph.vocabulary.endpoint;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pph.vocabulary.db.PersistanceReposistory;
import com.pph.vocabulary.model.Vocabulary;

@RestController
public class ReposistoryEndpoint {
	
	@GetMapping("/vocabularies")
	public List<Vocabulary> getVocabulary() {
		return PersistanceReposistory.getInstance().getVocabularies();
	}
	
	@PostMapping(path={"/addVocabulary"})
	public void addVocabulary(@RequestParam Vocabulary newVocabulary) {
		PersistanceReposistory.getInstance().insertVocabulary(newVocabulary);
	}
}
