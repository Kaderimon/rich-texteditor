import { ACTIVE_READY_COMMANDS } from "../constants/commands";
import { USER_SUB_COMMANDS } from "./../constants/commands";
import synonymStore from "./../stores/SynonymStore";

const instanceSymbol = Symbol();

export default class EditorService {
  constructor() {
    this.cmdMapper = {
      [USER_SUB_COMMANDS.synonym]: this.getSynonyms,
      [USER_SUB_COMMANDS.synonym_pick]: this.replaceSelection
    };
    this.editorRef = null;
    this.onActiveChange = null;
  }

  static getInstance() {
    if (!this[instanceSymbol]) {
      this[instanceSymbol] = new EditorService();
    }
    return this[instanceSymbol];
  }

  setEditor(editorRef) {
    this.editorRef = editorRef;
  }

  setActiveCallback(cb) {
    this.onActiveChange = cb;
  }

  executeCommand(cmd, metadata) {
    this.editorRef.contentDocument.execCommand(cmd, false, metadata);
    this.getActiveCommands();
  }

  executeUserCommand(cmd, metadata) {
    const handler = this.cmdMapper[cmd];
    if (!handler) throw "";
    handler(metadata);
  }

  getActiveCommands() {
    const activeCmds = ACTIVE_READY_COMMANDS.filter(cmd => {
      return !!this.editorRef.contentDocument.queryCommandState(cmd);
    });
    this.onActiveChange(activeCmds);
  }

  getSynonyms = () => {
    const { text } = this.getSelection();
    synonymStore.getSynonyms(text);
  };

  replaceSelection = newValue => {
    const textNode = this.createTextNode(newValue);
    const { selection } = this.getSelection();
    const range = selection.getRangeAt(0);

    range.deleteContents();
    range.insertNode(textNode);
  };

  createTextNode(word) {
    return this.editorRef.contentDocument.createTextNode(word);
  }

  getSelection() {
    const selection = this.editorRef.contentDocument.getSelection();
    return {
      selection,
      text: selection.toString()
    };
  }
}
