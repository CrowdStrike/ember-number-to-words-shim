module.exports = {
  normalizeEntityName() {},

  afterInstall() {
    return this.addPackageToProject('number-to-words');
  }
};
