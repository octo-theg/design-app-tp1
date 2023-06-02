import ChambresRepository from "../interfaces-adapters/ChambresRepository";

export default function execute(chambresRepository: ChambresRepository) {
  return chambresRepository.getAll();
}
