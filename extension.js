const vscode = require("vscode");

/**
 * Insert a random character name into the active text editor.
 * @param {vscode.TextEditor} editor - The active text editor.
 */
async function insertRandomCharName(editor) {
  if (editor) {
    const { animeCharacters } = await import("./animeCharacters.mjs");

    for (const selection of editor.selections) {
      const randomIndex = Math.floor(Math.random() * animeCharacters.length);
      const randomCharName = animeCharacters[randomIndex].name;

      await editor.edit((editBuilder) => {
        editBuilder.insert(selection.start, randomCharName);
      });
    }
  }
}

/**
 * Activate the extension.
 * @param {vscode.ExtensionContext} context - The extension context.
 */
function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "extension.getRandomCharName",
    () => {
      const editor = vscode.window.activeTextEditor;
      insertRandomCharName(editor);
    }
  );

  context.subscriptions.push(disposable);
}

/**
 * Deactivate the extension.
 */
function deactivate() {}

module.exports = {
  activate,
  deactivate,
  insertRandomCharName,
};
