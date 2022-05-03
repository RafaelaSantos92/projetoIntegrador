package com.Informacaomudaomundo.model;

import java.math.BigInteger;
import java.time.LocalDateTime;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "TB_Noticias")
public class Noticias {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull
	@Size(min = 5, max = 60)
	private String titulo;
	
	@NotNull
	@Size(min = 5, max = 1000)
	private String texto;
	
	@UpdateTimestamp
	private LocalDateTime data;
	

	public Temas getTema() {
		return temas;
	}

	public void setTema(Temas tema) {
		this.temas = tema;
	}

	private String foto;
	

	private String fonte;
	

	private BigInteger curtidas;

	@ManyToOne
	@JsonIgnoreProperties("noticias")
	private Temas temas;
	
	
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getTexto() {
		return texto;
	}

	public void setTexto(String texto) {
		this.texto = texto;
	}

	public LocalDateTime getData() {
		return data;
	}

	public void setData(LocalDateTime data) {
		this.data = data;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public String getFonte() {
		return fonte;
	}

	public void setFonte(String fonte) {
		this.fonte = fonte;
	}

	public BigInteger getCurtidas() {
		return curtidas;
	}

	public void setCurtidas(BigInteger curtidas) {
		this.curtidas = curtidas;
	}


	
	
	
	
	
	

}
