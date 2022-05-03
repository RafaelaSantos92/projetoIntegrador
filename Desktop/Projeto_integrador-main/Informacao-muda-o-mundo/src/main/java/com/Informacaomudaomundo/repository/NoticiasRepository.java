package com.Informacaomudaomundo.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.Informacaomudaomundo.model.Noticias;


@Repository
public interface NoticiasRepository extends JpaRepository<Noticias, Long> {		
	public List <Noticias>findAllByTituloContainingIgnoreCase(String titulo);
	
}
