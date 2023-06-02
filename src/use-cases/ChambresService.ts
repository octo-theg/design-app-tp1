import ChambresRepository from '../interfaces-adapters/ChambresRepository'

export default class ChambresService {
  private chambresRepository;

  constructor(chambresRepository: ChambresRepository) {
    this.chambresRepository = chambresRepository;
  }

  récupérer() {
    return this.chambresRepository.récupérer();
  }

  modifierPrixDeBase(prixDeBase: number) {
    const chambres = this.chambresRepository.récupérer();
    const MULTIPLICATEUR_PRIX = {
      0: 1,
      1: 1.07,
      2: 1.22,
      3: 1.33,
    };
    this.chambresRepository.actualiserChambres(chambres.map(({étage, prix, numéro}) => (
      {
        étage,
        prix: prixDeBase * MULTIPLICATEUR_PRIX[étage],
        numéro,
      }
    )))
  }
}
