#marionette-file-manager

A marionette plugin to manage(add, remove) files in device storage.

#Usage

```
var clinet; // A marionette client.
client.plugin('fileManager', require('marionette-file-manager'));

// Add two files into the pictures directory.
client.fileManager.add([
  { type: 'pictures', filePath: 'path/to/file1' },
  { type: 'pictures', filePath: 'path/to/file2', filename: 'filename2' }
]);

// Remove the filename2 file from pictures directory.
client.fileManager.remove({ type: 'pictures', filename: 'filename2' });

// Remove all files in device storage.
client.fileManager.removeAllFiles();
```
