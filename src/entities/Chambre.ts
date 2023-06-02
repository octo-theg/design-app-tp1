export default class Chambre {
  etage: number;
  prix: number;
  number: string;
  static MULTIPLICATEUR_PRIX = {
    0: 1,
    1: 1.07,
    2: 1.22,
    3: 1.33,
  };
  constructor(etage: number, prix: number, number: string) {
    this.etage = etage
    this.prix = prix
    this.number = number
  }
  actualiserPrix(nouveauPrix: number) {
    this.prix = nouveauPrix * Chambre.MULTIPLICATEUR_PRIX[this.etage]
  };

  //des getters mais flemme
}
