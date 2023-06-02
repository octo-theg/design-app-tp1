import ChambresRepository from '../src/interfaces-adapters/ChambresRepository'
import Chambre from "../src/entities/Chambre";
import modifierPrixDeBase from "../src/use-cases/ModifierPrixDeBase"

describe("ModifierPrixDeBase.test", () => {
    it("appelle ChambreRepository.updateAll avec une liste d'une seule chambre avec le prix mis à jour", () => {
      // GIVEN
      const nouveauPrixDeBase = 30;

      const listeUneChambre = [
        new Chambre(1, 50, '1')
      ];

      const chambresActualisées = [
        new Chambre( 1,  nouveauPrixDeBase*1.07,  '1',)
      ];

      const chambresRepository: ChambresRepository = {
        updateAll: jest.fn(),
        getAll: () => listeUneChambre
      }

      // WHEN
      modifierPrixDeBase(30, chambresRepository);

      // THEN
      expect(chambresRepository.updateAll).toHaveBeenCalledWith(chambresActualisées);
    })

    it("appelle ChambreRepository.updateAll avec une liste de chambres avec le prix mis à jour", () => {
      // GIVEN
      const nouveauPrixDeBase = 30;

      const listePlusieursChambres = [
        new Chambre( 0,  10,  '1',),
        new Chambre( 1,  20,  '2',),
        new Chambre( 2,  30,  '1',),
        new Chambre( 3,  40,  '2',)
      ];

      const chambresActualisées = [
        new Chambre( 0,  nouveauPrixDeBase,  '1',),
        new Chambre( 1,  nouveauPrixDeBase*1.07,  '2',),
        new Chambre( 2,  nouveauPrixDeBase*1.22,  '1',),
        new Chambre( 3,  nouveauPrixDeBase*1.33,  '2',)
      ];


      const chambresRepository: ChambresRepository = {
        updateAll: jest.fn(),
        getAll: () => listePlusieursChambres
      }

      // WHEN
      modifierPrixDeBase(30, chambresRepository);

      // THEN
      expect(chambresRepository.updateAll).toHaveBeenCalledWith(chambresActualisées);
    })
  });
