package model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the ord_prod database table.
 * 
 */
@Entity
@Table(name="ord_prod")
@NamedQuery(name="OrdProd.findAll", query="SELECT o FROM OrdProd o")
public class OrdProd implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int id;

	private int quantity;

	//bi-directional many-to-one association to Ordini
	@ManyToOne
	@JoinColumn(name="Id_ord")
	private Ordini ordini;

	//bi-directional many-to-one association to Prodotti
	@ManyToOne
	@JoinColumn(name="Id_prod")
	private Prodotti prodotti;

	public OrdProd() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getQuantity() {
		return this.quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Ordini getOrdini() {
		return this.ordini;
	}

	public void setOrdini(Ordini ordini) {
		this.ordini = ordini;
	}

	public Prodotti getProdotti() {
		return this.prodotti;
	}

	public void setProdotti(Prodotti prodotti) {
		this.prodotti = prodotti;
	}

}