package controller;

import java.sql.SQLException;
import java.text.ParseException;
import java.util.List;

import javax.naming.NamingException;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import model.Fornitori;
import model.Prodotti;
import service.FornitoriService;


@RestController
@RequestMapping("/fornitore")
public class FornitoriController 	 {
	
	@Autowired
	private FornitoriService fs;
	
	@PostMapping("/insert")
	@Consumes("application/json")
	public Fornitori insert(@RequestBody Fornitori f) {
		fs.insert(f);
		return f;
	}
	
//	@PostMapping("/insert")
//	@Consumes("application/json")
//	public FornitoriDTO insert(@RequestBody FornitoriDTO f) {
//		fs.insert(FornitoriDtoBuilder.DtoToFornitori(f));
//		return f;
//	}
	
	@PutMapping("/update")
	@Consumes("application/json")
	@Produces("application/json")
	public boolean update(@RequestBody Fornitori f) throws ClassNotFoundException, SQLException, NamingException, ParseException {
		return fs.update(f);
	}
	
	@DeleteMapping("/delete")
	@Produces("application/json")
	public void remove(@RequestParam (value = "id", required  =true ) int id) throws ClassNotFoundException, SQLException, NamingException, ParseException {
		fs.remove(id);
	}
	
	@GetMapping("/findAll")
	@Produces("application/json")
	public List<Fornitori> findAll(){
		return fs.findAll();
	}
	
	@GetMapping("/findByID")
	@Produces("application/json")
	public Fornitori findByID(@RequestParam(value ="id", required = true) int id) {
		return fs.findById(id);
	}
	
	@GetMapping("/findByNome")
	@Produces("application/json")
	public List<Fornitori> findByNome (@RequestParam(value = "nome", required = true) String nome) {
		return fs.findByNome(nome);
	}
	
	@GetMapping("/findByPiva")
	@Produces("application/json")
	public List<Fornitori> findByPiva (@RequestParam(value = "pIva", required = true) String pIva) {
		return fs.findByPiva(pIva);
	}
	
	@GetMapping("/findBySede")
	@Produces("application/json")
	public List<Fornitori> findBySede (@RequestParam(value = "sede", required = true) String sede) {
		return fs.findBySede(sede);
	}

}
