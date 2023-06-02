import Chambre from "../entities/Chambre";

export default interface ChambresRepository {
  getAll(): Chambre[]
  updateAll(chambres: Chambre[])
}
