package com.Informacaomudaomundo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Informacaomudaomundo.model.Noticias;
import com.Informacaomudaomundo.repository.NoticiasRepository;



@RestController
@RequestMapping("/Noticias")
@CrossOrigin("*")
public class NoticiaController {


	@Autowired
	private NoticiasRepository noticiasRE;

	@GetMapping
	public ResponseEntity<List<Noticias>> GetAll(){
		
		return ResponseEntity.ok(noticiasRE.findAll());



	}

}
