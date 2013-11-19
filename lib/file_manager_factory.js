/**
 * Generate the file manager for each type of host.
 * Currently the type includes:
 * - DesktopClient
 * TODO: We could have one for device host.
 *       The type name could be called "Device".
 */
var FileManagerFactory = {
  generate: function(deviceStorage, type) {
    return FileManagerFactory[type](deviceStorage);
  }
};

/**
 * Generate the DesktopClient instance.
 *
 * @param {Object} deviceStorage desktop client deviceStorage.
 */
FileManagerFactory.DesktopClient = function(deviceStorage) {
  var DesktopClient = require('./desktop_client_file_manager');
  return new DesktopClient(deviceStorage);
};

module.exports = FileManagerFactory;
