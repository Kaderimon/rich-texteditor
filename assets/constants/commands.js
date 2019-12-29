import {
  faBold,
  faItalic,
  faUnderline,
  faStrikethrough,
  faSubscript,
  faSuperscript,
  faAlignLeft,
  faAlignCenter,
  faAlignJustify,
  faAlignRight,
  faListOl,
  faListUl,
  faParagraph,
  faOutdent,
  faIndent,
  faUndo,
  faRedo,
  faEraser,
  faFillDrip,
  faTint,
  faGem
} from "@fortawesome/free-solid-svg-icons";
import { ButtonTypes } from "./common";

export const COMMANDS = [
  {
    cmd: "bold",
    icon: faBold,
    desc: "Toggles bold."
  },
  {
    cmd: "italic",
    icon: faItalic,
    desc: "Toggles italics."
  },
  {
    cmd: "underline",
    icon: faUnderline,
    desc: "Toggles underline."
  },
  {
    cmd: "strikeThrough",
    icon: faStrikethrough,
    desc: "Toggles strikethrough."
  },
  {
    cmd: "subscript",
    icon: faSubscript,
    desc: "Toggles subscript."
  },
  {
    cmd: "superscript",
    icon: faSuperscript,
    desc: "Toggles superscript."
  },
  {
    cmd: "foreColor",
    icon: faTint,
    desc: "Changes a font color.",
    type: ButtonTypes.ColorPicker
  },
  {
    cmd: "backColor",
    icon: faFillDrip,
    desc: "Changes background color.",
    type: ButtonTypes.ColorPicker
  },
  {
    cmd: "justifyLeft",
    icon: faAlignLeft,
    desc: "Justifies the selection or insertion point to the left."
  },
  {
    cmd: "justifyCenter",
    icon: faAlignCenter,
    desc: "Centers the selection or insertion point."
  },
  {
    cmd: "justifyFull",
    icon: faAlignJustify,
    desc: "Justifies the selection or insertion point."
  },

  {
    cmd: "justifyRight",
    icon: faAlignRight,
    desc: "Right-justifies the selection or the insertion point."
  },
  {
    cmd: "insertOrderedList",
    icon: faListOl,
    desc: "Creates a numbered ordered list."
  },
  {
    cmd: "insertUnorderedList",
    icon: faListUl,
    desc: "Creates a bulleted unordered list."
  },
  {
    cmd: "insertParagraph",
    icon: faParagraph,
    desc: "Inserts a paragraph around the selection or the current line."
  },
  {
    cmd: "outdent",
    icon: faOutdent,
    desc: "Outdents the line containing the selection or insertion point."
  },
  {
    cmd: "indent",
    icon: faIndent,
    desc: "Indents the line containing the selection or insertion point."
  },
  {
    cmd: "undo",
    icon: faUndo,
    desc: "Undo."
  },
  {
    cmd: "redo",
    icon: faRedo,
    desc: "Redo."
  },
  {
    cmd: "removeFormat",
    icon: faEraser,
    desc: "Removes all formatting from the current selection."
  }
];

export const USER_COMMANDS = [
  {
    cmd: "synonym",
    icon: faGem,
    desc: "Get list of synonyms.",
    type: ButtonTypes.SynonymButton
  }
];

export const USER_SUB_COMMANDS = {
  synonym: "synonym",
  synonym_pick: "synonym_pick"
};

export const ACTIVE_READY_COMMANDS = [
  "bold",
  "italic",
  "underline",
  "strikeThrough",
  "subscript",
  "superscript",
  "justifyLeft",
  "justifyCenter",
  "justifyFull",
  "justifyRight",
  "insertOrderedList",
  "insertUnorderedList"
];
