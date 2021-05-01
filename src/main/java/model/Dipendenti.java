package model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the dipendenti database table.
 * 
 */
@Entity
@NamedQuery(name="Dipendenti.findAll", query="SELECT d FROM Dipendenti d")
public class Dipendenti implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int ID_dip;

	private String cognome;

	

	private String nome;



	private int numero;

	

	private String ruolo;

	

	private int stipendio;

	

	public Dipendenti() {
	}

	public int getID_dip() {
		return this.ID_dip;
	}

	public void setID_dip(int ID_dip) {
		this.ID_dip = ID_dip;
	}

	public String getCognome() {
		return this.cognome;
	}

	public void setCognome(String cognome) {
		this.cognome = cognome;
	}

	

	

	public String getNome() {
		return this.nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	

	public int getNumero() {
		return this.numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

	

	public String getRuolo() {
		return this.ruolo;
	}

	public void setRuolo(String ruolo) {
		this.ruolo = ruolo;
	}

	

	public int getStipendio() {
		return this.stipendio;
	}

	public void setStipendio(int stipendio) {
		this.stipendio = stipendio;
	}

	

}