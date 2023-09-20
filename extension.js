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
 * Insert a random guild name into the active text editor.
 * @param {vscode.TextEditor} editor - The active text editor.
 */
async function insertRandomGuildName(editor) {
  if (editor) {
    const { animeGuilds } = await import("./animeGuilds.mjs");

    for (const selection of editor.selections) {
      const randomIndex = Math.floor(Math.random() * animeGuilds.length);
      const randomGuildName = animeGuilds[randomIndex].name;

      await editor.edit((editBuilder) => {
        editBuilder.insert(selection.start, randomGuildName);
      });
    }
  }
}

/**
 * Activate the extension.
 * @param {vscode.ExtensionContext} context - The extension context.
 */
function activate(context) {
  let disposable1 = vscode.commands.registerCommand(
    "extension.getRandomCharName",
    () => {
      const editor = vscode.window.activeTextEditor;
      insertRandomCharName(editor);
    }
  );

  let disposable2 = vscode.commands.registerCommand(
    "extension.getRandomGuildName",
    () => {
      const editor = vscode.window.activeTextEditor;
      insertRandomGuildName(editor);
    }
  );

  context.subscriptions.push(disposable1);
  context.subscriptions.push(disposable2);
}

/**
 * Deactivate the extension.
 */
function deactivate() {}

module.exports = {
  activate,
  deactivate,
  insertRandomCharName,
  insertRandomGuildName,
};
