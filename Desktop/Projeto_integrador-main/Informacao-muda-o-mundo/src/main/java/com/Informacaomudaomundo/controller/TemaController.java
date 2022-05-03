package com.Informacaomudaomundo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Informacaomudaomundo.model.Temas;
import com.Informacaomudaomundo.repository.TemasRepository;


@RestController
@RequestMapping("/temas")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TemaController {
	
	
	@Autowired
	private TemasRepository temaRe;
	
	@GetMapping
	public ResponseEntity <List<Temas>> getAll(){
		return ResponseEntity.ok(temaRe.findAll());
	}

}
