import RécupérationChambresService from '../src/RécupérationChambresService'

describe('RécupérationChambresService', () => {
  describe("si l'hôtel ne possède qu'une seule chambre", () => {
    it("renvoie cette chambre", () => {
      // GIVEN
      const récupérationChambresService = new RécupérationChambresService();

      // WHEN
      const liste = récupérationChambresService.récupérer();
      
      // THEN
      expect(liste).toEqual([
        {
          étage: 0,
          numéro: '1',
          prix: 50,
        }
      ]);
    });
  });
  
});
