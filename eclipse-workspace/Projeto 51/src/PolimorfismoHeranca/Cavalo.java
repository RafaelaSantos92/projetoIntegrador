package PolimorfismoHeranca;

public class Cavalo extends Animal{

	public Cavalo()
	{
		super("Tipo animal: Cavalo");
	}
	
	@Override
	public void nome(String nomeAnimal)
	{
		System.out.println("\nNome do cavalo: "+nomeAnimal);
	}
	
	@Override
	public void idade(int idadeAnimal)
	{
		System.out.println("\nIdade: "+idadeAnimal);
	}
	
	@Override
	public void som(String somAnimal)
	{
		System.out.println("\nSom que seu cavalo emite: "+somAnimal);
	}
	
	public void Corre()
	{
		System.out.println("\nUma das caracter�sticas do cavalo � correr!!!");
	}
}

