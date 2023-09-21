import theme from "../theme/DefaultTheme";

interface NavigationType {
  nome: string;
  key: string;
  personagem: string;
  tema: string;
  imagemCard: string;
}

const navigation: NavigationType[] = [
  {
    key: "card-0",
    nome: "Carolina Di Lorenzo",
    personagem: "Mentora Carolina Di Lorenzo",
    tema: `${theme.colorsPerson.carolina}`,
    imagemCard: "./imagens/Carolina/perfil.png",
  },
  {
    key: "card-1",
    nome: "Everton Cadoná",
    personagem: "Everton Cadona",
    tema: `${theme.colorsPerson.everton}`,
    imagemCard: "./imagens/Everton/perfil.png",
  },
  {
    key: "card-2",
    nome: "Andrea Noer",
    personagem: "Andrea Noer",
    tema: `${theme.colorsPerson.andrea}`,
    imagemCard: "./imagens/Andrea/perfil.png",
  },
  {
    key: "card-3",
    nome: "Luciano Reis",
    personagem: "Luciano dos Reis",
    tema: `${theme.colorsPerson.luciano}`,
    imagemCard: "./imagens/Luciano/perfil.png",
  },
  {
    key: "card-5",
    nome: "Thamires Lopes",
    personagem: "Thamires Lopes",
    tema: `${theme.colorsPerson.thamires}`,
    imagemCard: "./imagens/Thamires/perfil.png",
  },
  {
    key: "card-4",
    nome: "Matheus Palma",
    personagem: "Matheus Falkenburg",
    tema: `${theme.colorsPerson.matheus}`,
    imagemCard: "./imagens/Matheus/perfil.png",
  },
];

export default navigation;
