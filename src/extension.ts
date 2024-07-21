import * as vscode from 'vscode';
import { join } from 'path';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('quickNote.createAndOpenNote', async () => {
		const workspaceFolders = vscode.workspace.workspaceFolders;
		if (!workspaceFolders) {
			vscode.window.showErrorMessage('No workspace folder found. Please open a workspace first.');
			return;
		}

		// 定义笔记文件的路径和名称
		const noteFileName = `QuickNote_${new Date().toISOString().replace(/[:\-]|\.\d{3}/g, '')}.md`;
		const noteFilePath = join(workspaceFolders[0].uri.fsPath, noteFileName);

		// 创建笔记文件
		const noteFileUri = vscode.Uri.file(noteFilePath);
		await vscode.workspace.fs.writeFile(noteFileUri, Buffer.from('', 'utf8'));

		// 在编辑器中打开笔记文件
		const document = await vscode.workspace.openTextDocument(noteFileUri);
		await vscode.window.showTextDocument(document);

		// 执行编辑器听写命令
		await vscode.commands.executeCommand('workbench.action.editorDictation.start');
	});

	context.subscriptions.push(disposable);
}
