import ChambresRepository from './ChambresRepository'

export default class RécupérationChambresService {
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
    this.chambresRepository.actualiserChambres([
      {
        étage: 0,
        prix: prixDeBase,
        numéro: '1',
      },
      {
        étage: 1,
        prix: prixDeBase*1.07,
        numéro: '2',
      },
      {
        étage: 2,
        prix: prixDeBase*1.22,
        numéro: '1',
      },
      {
        étage: 3,
        prix: prixDeBase*1.33,
        numéro: '2',
      }
    ])
  }
}
