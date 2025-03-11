import { Component, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('canvas', { static: true }) canvas: ElementRef;

  public watchSeconds = '00';
  public watchTens = '00'
  public interval;
  public seconds: number = 0;
  public tens: number = 0;
  public appendTens = document.getElementById("watchTens");
  public appendSeconds = document.getElementById("watchSeconds");

  public timerReachingdEnd: boolean = false;
  public currentCategory: string = 'Categoria';
  constructor(private storage: Storage) {
  }

  private signaturePad: any;
  maxTime: any = 15;

  ionViewDidEnter() {
    this.storage.get('config_tempo').then((val) => {
      this.maxTime = val;
    })
  }



  clearTimer() {
    //clearInterval(this.interval);
    this.timerReachingdEnd = false;
    this.tens = 0;
    this.seconds = 0;
    document.getElementById("watchSeconds").innerText = "00";
    document.getElementById("watchTens").innerText = "00";
    clearInterval(this.interval);
    this.interval = setInterval(() => {

      if (this.tens == undefined) {
        this.tens = 0;
        this.seconds = 0;
      } else {
        this.tens++;
      }

      if (this.tens <= 9) {
        document.getElementById("watchTens").innerText = "0" + this.tens;
      }

      if (this.tens > 9) {
        document.getElementById("watchTens").innerText = this.tens.toString();

      }

      if (this.tens > 99) {
        console.log("seconds");
        this.seconds++;
        document.getElementById("watchSeconds").innerText = "0" + this.seconds;
        console.log(this.watchSeconds);
        this.tens = 0;
        document.getElementById("watchTens").innerText = "0" + 0;
        if (this.seconds == this.maxTime) {

          document.getElementById("watchSeconds").innerText = this.maxTime.toString();
          document.getElementById("watchTens").innerText = "00";


          clearInterval(this.interval);
          return;
        } else if (this.seconds == this.maxTime - 3) {
          this.timerReachingdEnd = true;
        }

      }

      if (this.seconds > 9) {
        document.getElementById("watchSeconds").innerText = this.seconds.toString();
      }

    }, 10);
    console.log(this.interval);
  }

  selectNewCategory() {
    var categories = `Adjetivos/características;
    Alimentos;
    Animais;
    Aparelhos eletrônicos;
    Aplicativos de celular;
    Árvores;
    Fast foods;
    Atores;
    Atrizes;
    Bandas;
    Bilionários;
    Capitais de países;
    Carros;
    Cantores famosos;
    CEP (Cidade, Estado ou País);
    Cidades;
    Coisas amarelas;
    Coisas azuis;
    Coisas brancas;
    Coisas brilhantes;
    Coisas de banheiro;
    Coisas de bebê;
    Coisas de carnaval;
    Coisas de casamento;
    Coisas de circo;
    Coisas de festa junina;
    Coisas de geladeira;
    Coisas de inverno;
    Coisas de natal;
    Coisas de parque de diversão;
    Coisas de verão;
    Coisas do espaço sideral;
    Coisas frias;
    Coisas grandes;
    Coisas grudentas;
    Coisas pequenas;
    Coisas pra beber;
    Coisas que acha no bolso;
    Coisas que as pessoas escondem;
    Coisas que acha no bolso;
    Coisas pretas
    Coisas que matam;
    Coisas que você não entende;
    Coisas que você não pode levar no avião;
    Coisas redondas;
    Coisas verdes;
    Coisas vermelhas;
    Coisas viciantes;
    Companhias aéreas;
    Cores;
    Desenhos animados;
    Deuses e santos;
    Doenças;
    Esportes;
    Estados;
    Estilos musicais;
    Eu acredito em...;
    Fabricantes de carro;
    Filmes brasileiros;
    Filmes;
    Flores/plantas;
    Frutas;
    Frutas/verduras/legumes;
    Hobbies;
    Idiomas;
    Insetos;
    Instrumentos musicais;
    Invenções famosas;
    Inventores e cientistas;
    Mamíferos;
    Marcas de alimento;
    Marcas famosas;
    Marcas;
    Materiais escolares;
    Maus hábitos;
    Medalhistas olimpicos;
    Meios de transporte;
    Minerais e pedras preciosas;
    Mobílias;
    Moedas do mundo;
    Monstros e vilões fictícios;
    Músicas;
    Nomes de pessoas;
    Nomes femininos;
    Nomes masculinos;
    Nomes típicos de cachorro;
    Novelas;
    Palavras com h;
    Objetos;
    Países;
    Palavras com rr;
    Palavras com x;
    Partes do corpo;
    Pássaros;
    Peixes;
    Personagens bíblicos;
    Personagens disney-pixar;
    Personagens mitológicos/folclóricos;
    Personagens;
    Pessoas históricas;
    Pintores famosos;
    Pontos turísticos;
    Profissões;
    Programas de TV;
    Raças de cachorro;
    Reis e imperadores;
    Remédios;
    Rios/lagos/mares;
    Roupas e acessórios;
    Ruas famosas;
    Sabores de pizza;
    Sabores de sorvete;
    Séries;
    Sobremesas;
    Sobrenomes;
    Super heróis;
    Tabela periódica;
    Temperos e ervas;
    Tenho medo de...;
    Times de futebol;
    Universo star wars;
    Sabores de pastéis;
    Histórias infantis;
    Medos e fobias;
    Cidades turisticas];
    Super poderes;
    Frutas tropicais;
    Raças de gatos;
    Tipos de dança;
    Alimentos típicos de cada país;
    Animais de estimação;
    Atletas famosos;
    Bandas de rock;
    Cidades de praia;
    Crianças famosas;
    Desenhos de anime;
    Dinossauros;
    Filmes de terror;
    Filmes de ação;
    Filmes de comédia;
    Filmes de romance;
    Filmes de ficção científica;
    Filmes de aventura;
    Frutas exóticas;
    Gêneros de música;
    Jogos de computador;
    Jogos de tabuleiro;
    Lendas e mitos;
    Músicas de carnaval;
    Parques;
    Pinturas famosas;
    Profissões de saúde;
    Profissões de tecnologia;
    Profissões de educação;
    Profissões de arte;
    Profissões de esporte;
    Raças de cavalos;
    Regiões geográficas;
    Restaurantes famosos;
    Ruas famosas;
    Séries de TV;
    Rios;
    Lagos;
    Universidades;`.replace(/(\r\n|\n|\r)/gm, "");;

    var arrayCategories = categories.split(';    ');

    var randomItem = arrayCategories[Math.floor(Math.random() * arrayCategories.length)];
    this.currentCategory = randomItem;
    console.log(randomItem);
    this.clearTimer();
  }

}
