import RécupérationChambresService from '../src/RécupérationChambresService'
import ChambresRepository from '../src/ChambresRepository'

describe('RécupérationChambresService', () => {
  describe("si l'hôtel ne possède qu'une seule chambre", () => {
    it("renvoie cette chambre", () => {
      // GIVEN
      const chambres = [
        {
          étage: 0,
          numéro: '1',
          prix: 50,
        }
      ];

      const chambresRepository: ChambresRepository = {
        récupérer: () => chambres
      }
      const récupérationChambresService = new RécupérationChambresService(chambresRepository);

      // WHEN
      const liste = récupérationChambresService.récupérer();
      
      // THEN
      expect(liste).toEqual(chambres);
    });
  });

  describe("si l'hôtel possède plusieurs chambres", () => {
    it("renvoie toutes ces chambres", () => {
      // GIVEN
      const chambres = [
        {
          étage: 0,
          numéro: '1',
          prix: 50,
        },
        {
          étage: 0,
          numéro: '2',
          prix: 50,
        }
      ];

      const chambresRepository: ChambresRepository = {
        récupérer: () => chambres
      }
      const récupérationChambresService = new RécupérationChambresService(chambresRepository);

      // WHEN
      const liste = récupérationChambresService.récupérer();

      // THEN
      expect(liste).toEqual(chambres);
    })
  });
});
