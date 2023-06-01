import ChambresRepository from './ChambresRepository'

export default class RécupérationChambresService {
  private chambresRepository;
  
  constructor(chambresRepository: ChambresRepository) {
    this.chambresRepository = chambresRepository;
  }

  récupérer() {
    return this.chambresRepository.récupérer();
  }
}
