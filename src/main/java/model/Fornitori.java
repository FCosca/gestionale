package model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;


/**
 * The persistent class for the fornitori database table.
 * 
 */
@Entity
@NamedQuery(name="Fornitori.findAll", query="SELECT f FROM Fornitori f")
public class Fornitori implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int id;

	private String nome;

	@Column(name="p_iva")
	private String pIva;

	private String sede;

	//bi-directional many-to-one association to Movimenti
	@OneToMany(mappedBy="fornitori")
	@JsonIgnore
	private List<Movimenti> movimentis;

	public Fornitori() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return this.nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getPIva() {
		return this.pIva;
	}

	public void setPIva(String pIva) {
		this.pIva = pIva;
	}

	public String getSede() {
		return this.sede;
	}

	public void setSede(String sede) {
		this.sede = sede;
	}

	public List<Movimenti> getMovimentis() {
		return this.movimentis;
	}

	public void setMovimentis(List<Movimenti> movimentis) {
		this.movimentis = movimentis;
	}

	public Movimenti addMovimenti(Movimenti movimenti) {
		getMovimentis().add(movimenti);
		movimenti.setFornitori(this);

		return movimenti;
	}

	public Movimenti removeMovimenti(Movimenti movimenti) {
		getMovimentis().remove(movimenti);
		movimenti.setFornitori(null);

		return movimenti;
	}

}