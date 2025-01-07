export class EntityManager {
  fork() {
    return this;
  }

  transactional(fn: (em: EntityManager) => any) {
    return fn({} as EntityManager);
  }
}
