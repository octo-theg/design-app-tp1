import ChambresRepository from "../interfaces-adapters/ChambresRepository";
export default function execute(nouveauPrixDeBase: number, chambresRepository: ChambresRepository) {
  const chambres = chambresRepository.getAll();

  chambres.forEach((chambre) => {
    chambre.actualiserPrix(nouveauPrixDeBase)
  })

  chambresRepository.updateAll(chambres)
}
