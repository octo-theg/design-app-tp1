import ChambresRepository from '../src/interfaces-adapters/ChambresRepository'
import Chambre from "../src/entities/Chambre";
import récupérerChambres from "../src/use-cases/RécupérerChambres"

describe('RécupérerChambres', () => {
  describe("si l'hôtel ne possède qu'une seule chambre", () => {
    it("renvoie cette chambre", () => {
      // GIVEN
      const listeUneChambre = [
        new Chambre(0, 50, '1')
      ];

      const chambresRepository: ChambresRepository = {
        getAll: () => listeUneChambre,
        updateAll: jest.fn()
      }

      // WHEN
      const chambres = récupérerChambres(chambresRepository);

      // THEN
      expect(chambres).toEqual(listeUneChambre);
    });
  });

  describe("si l'hôtel possède plusieurs chambres", () => {
    it("renvoie toutes ces chambres", () => {
      // GIVEN
      const listePlusieursChambres = [
        new Chambre( 0,  50,  '1',),
        new Chambre( 0,  50,  '2',)
      ];

      const chambresRepository: ChambresRepository = {
        getAll: () => listePlusieursChambres,
        updateAll: jest.fn()
      }

      // WHEN
      const chambres = récupérerChambres(chambresRepository);

      // THEN
      expect(chambres).toEqual(listePlusieursChambres);
    })
  });
});
