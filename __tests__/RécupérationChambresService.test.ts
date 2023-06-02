import ChambresRepository from '../src/interfaces-adapters/ChambresRepository'
import ChambresService from '../src/use-cases/ChambresService'

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
        récupérer: () => chambres,
        actualiserChambres: jest.fn()
      }
      const récupérationChambresService = new ChambresService(chambresRepository);

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
          prix: 50,
          numéro: '1',
        },
        {
          étage: 0,
          prix: 50,
          numéro: '2',
        }
      ];

      const chambresRepository: ChambresRepository = {
        récupérer: () => chambres,
        actualiserChambres: jest.fn()
      }
      const récupérationChambresService = new ChambresService(chambresRepository);

      // WHEN
      const liste = récupérationChambresService.récupérer();

      // THEN
      expect(liste).toEqual(chambres);
    })
  });
  describe("modifier prix de base", () => {
    it("appelle ChambreRepository.actualise avec une liste de une chambre avec le prix mis à jour", () => {
      // GIVEN
      const nouveauPrixDeBase = 30;

      const chambres = [
        {
          étage: 1,
          prix: 50,
          numéro: '1',
        }
      ];

      const chambresActualisées = [
        {
          étage: 1,
          prix: nouveauPrixDeBase*1.07,
          numéro: '1',
        }
      ];


      const chambresRepository: ChambresRepository = {
        actualiserChambres: jest.fn(),
        récupérer: () => chambres
      }
      const récupérationChambresService = new ChambresService(chambresRepository);

      // WHEN
      récupérationChambresService.modifierPrixDeBase(30);

      // THEN
      expect(chambresRepository.actualiserChambres).toHaveBeenCalledWith(chambresActualisées);
    })

    it("appelle ChambreRepository.actualise avec une liste des chambres avec le prix mis à jour", () => {
      // GIVEN
      const nouveauPrixDeBase = 30;

      const chambres = [
        {
          étage: 0,
          prix: 50,
          numéro: '1',
        },
        {
          étage: 1,
          prix: 60,
          numéro: '2',
        },
        {
          étage: 2,
          prix: 70,
          numéro: '1',
        },
        {
          étage: 3,
          prix: 80,
          numéro: '2',
        }
      ];

      const chambresActualisées = [
        {
          étage: 0,
          prix: nouveauPrixDeBase,
          numéro: '1',
        },
        {
          étage: 1,
          prix: nouveauPrixDeBase*1.07,
          numéro: '2',
        },
        {
          étage: 2,
          prix: nouveauPrixDeBase*1.22,
          numéro: '1',
        },
        {
          étage: 3,
          prix: nouveauPrixDeBase*1.33,
          numéro: '2',
        }
      ];


      const chambresRepository: ChambresRepository = {
        actualiserChambres: jest.fn(),
        récupérer: () => chambres
      }
      const récupérationChambresService = new ChambresService(chambresRepository);

      // WHEN
      récupérationChambresService.modifierPrixDeBase(30);

      // THEN
      expect(chambresRepository.actualiserChambres).toHaveBeenCalledWith(chambresActualisées);
    })
  });
});
