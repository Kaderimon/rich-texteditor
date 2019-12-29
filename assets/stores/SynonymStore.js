import { observable, computed, action, autorun } from "mobx";
import { SYNONYM_URL } from "./../constants/common";

class SynonymStore {
  @observable show;
  @observable synonyms;

  constructor() {
    this.show = false;
    this.synonyms = [];
  }

  @computed get isSynonymListShown() {
    return this.show;
  }

  @action
  openSynonymList() {
    this.show = true;
  }

  @action
  closeSynonymList() {
    this.show = false;
    this.synonyms = [];
  }

  @action
  getSynonyms(word) {
    fetch(`${SYNONYM_URL}${word}`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(this.fetchSynonymsSuccess, this.fetchSynonymsError);
  }

  @action.bound
  fetchSynonymsSuccess(synonyms) {
    this.synonyms = synonyms.map(synonym => {
      return synonym.word;
    });
    this.openSynonymList();
  }

  @action.bound
  fetchSynonymsError(error) {
    this.closeSynonymList();
  }
}

const synonymStore = new SynonymStore();

export default synonymStore;
export { SynonymStore };
