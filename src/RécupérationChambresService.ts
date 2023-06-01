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
