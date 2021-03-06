import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "walrus" is now active!');

	let disposable = vscode.commands.registerCommand('extension.walrus', () => {
		vscode.window.showInformationMessage('Hello Walrus!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
