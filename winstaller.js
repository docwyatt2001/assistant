/* jshint node: true */
'use strict';

var electronInstaller = require('electron-winstaller');

var resultPromise = electronInstaller.createWindowsInstaller({
  title: 'arkOS Assistant',
  appDirectory: __dirname + '/electron-builds/arkOS Assistant-win32-x64',
  outputDirectory: __dirname + '/electron-builds/arkOS Assistant-win32-x64',
  authors: 'CitizenWeb',
  exe: 'arkOS Assistant.exe',
  setupExe: 'arkOS Assistant Setup.exe',
  setupIcon: __dirname + '/build-includes/icon.ico',
  loadingGif: __dirname + '/build-includes/winstaller.gif',
  noMsi: true
});

resultPromise.then(function() {
  console.log("Installer built.");
}, function(err) {
  console.log(`Installer build failed: ${err.message}`);
});
