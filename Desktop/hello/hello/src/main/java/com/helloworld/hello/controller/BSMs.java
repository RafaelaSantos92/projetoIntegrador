package com.helloworld.hello.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ListaBSM's")
public class BSMs{

	@GetMapping
	public String ListBSMs() {
		return ("Mentalidade de crescimento" + "\nOrientação ao detalhe" + "\nResponsabilidade Pessoal"
				+ "\nPersistência" + "\nOrientação ao futuro" + "\nComunicação" + "\nProatividade"
				+ "\nTrabalho em equipe");

	}

}
