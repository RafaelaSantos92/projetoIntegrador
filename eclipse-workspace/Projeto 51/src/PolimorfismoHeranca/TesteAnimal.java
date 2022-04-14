package PolimorfismoHeranca;

import java.util.Scanner;

public class TesteAnimal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner leia = new Scanner(System.in);

		Cachorro cachorro = new Cachorro();
		Cavalo cavalo = new Cavalo();
		Preguica preguica = new Preguica();

		Animal animal = null;

		int x = 0;

		do {
			System.out.println("\nQual o tipo do seu animal?\n\n" + "1-CACHORRO\n2-CAVALO\n3-PREGUI�A\n");
			x = leia.nextInt();
			if (x == 1) {
				animal = cachorro;

				System.out.println("\nQuantos anos seu cachorro tem?");
				int idade = leia.nextInt();
				leia.nextLine();
				System.out.println("\nQual o nome do seu cachorro: ");
				String nome = leia.nextLine();
				leia.nextLine();
				System.out.println("\nEssa � legal!!!Qual o som que seu cachorro emite?");
				String som = leia.nextLine();
				System.out.println("\n*****************************************************");
				cachorro.nome(nome);
				cachorro.idade(idade);
				cachorro.som(som);
			} else if (x == 2) {
				animal = cavalo;
				leia.nextLine();
				System.out.println("\nQual o nome do seu cavalo: ");
				String nome = leia.nextLine();
				System.out.println("\nQuantos anos seu cavalo tem?");
				int idade = leia.nextInt();
				leia.nextLine();
				System.out.println("\nEssa � legal!!!Qual o som que seu cavalo emite?");
				String som = leia.nextLine();
				System.out.println("\n*****************************************************");
				cavalo.nome(nome);
				cavalo.idade(idade);
				cavalo.som(som);
			} else if (x == 3) {
				animal = preguica;
				leia.nextLine();
				System.out.println("\nQual o nome da sua pregui�a: ");
				String nome = leia.nextLine();
				System.out.println("\nQuantos anos sua pregui�a tem?");
				int idade = leia.nextInt();
				leia.nextLine();
				System.out.println("\nEssa � legal!!!Qual o som que sua pregui�a emite?");
				String som = leia.nextLine();
				System.out.println("\n*****************************************************");
				preguica.nome(nome);
				preguica.idade(idade);
				preguica.som(som);
			} else {
				System.out.println("\nOp��o inv�lida!!!");
			}
		} while (x <= 0 || x >= 4);
	}

}
