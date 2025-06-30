package com.pph.vocabulary.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.pph.vocabulary.model.Vocabulary;
import com.pph.vocabulary.model.VocabularyType;

public class PersistanceReposistory {
	
	private static PersistanceReposistory instance;
	
	private String connectionJDBC;
	
	private List<Vocabulary> cache;
	
	private String queryAllStatement = "SELECT * FROM VOCABULARY";
	private String insertStatement   = "INSERT INTO VOCABULARY VALUE (?, ?)";
	
	private PersistanceReposistory(String connectionJdbc) {
		this.connectionJDBC = connectionJdbc;
	}
	
	public static PersistanceReposistory getInstance() {
		
		if (instance == null) {
			String defaultJdbc = "jdbc:derby:testDB;create=true";
			instance = new PersistanceReposistory(defaultJdbc);
			initTable(defaultJdbc);
		}
		
		return instance;
	}
	
	private static void initTable(String connectionJDBC) {
		
		try(Connection connection = DriverManager.getConnection(connectionJDBC);
				Statement stm = connection.createStatement()	) {
			
			ResultSet resultSet = connection.getMetaData().getTables(null, null, "VOCABULARY", null);
			
			Boolean tableExists = resultSet.next();
			
			if (tableExists) {
				return;
			}
			
			stm.executeUpdate("CREATE TABLE vocabulary(id VARCHAR(256) PRIMARY KEY, name VARCHAR(256), type VARCHAR(50))");
			
		}  catch (Exception error) {
			error.printStackTrace();
		}
	}
	
	public List<Vocabulary> getVocabularies() {
		
		if(cache == null) {
			cache = new ArrayList<>();
			
			try(Connection connection = DriverManager.getConnection(this.connectionJDBC);
					Statement stm = connection.createStatement()	) {
				
				ResultSet resultSet = stm.executeQuery(queryAllStatement);
				while (resultSet.next()) {
					
					Vocabulary data = new Vocabulary(resultSet.getString("name"), new VocabularyType("", resultSet.getString("type")));
					cache.add(data);
					
				}
				
			}  catch (Exception error) {
				error.printStackTrace();
			}
			
		}
		
		return cache;
	}
	
	public void insertVocabulary(Vocabulary vocabulary) {
		try(Connection connection = DriverManager.getConnection(this.connectionJDBC)) {
			
			PreparedStatement prepareStatement = connection.prepareStatement(insertStatement);
			prepareStatement.setString(1, vocabulary.getWord());
			prepareStatement.setString(2, vocabulary.getContext().getValue());

			prepareStatement.executeUpdate();
			
			cache.add(vocabulary);
			
		}  catch (Exception error) {
			error.printStackTrace();
		}
	}
	
	public void removeVocabulary(Vocabulary vocabulary) {
		
	}
}
