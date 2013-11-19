/**
 * Generate the file manager for each type of host.
 * Currently the type includes:
 * - DesktopClient
 * TODO: We could have one for device host.
 *       The type name could be called "Device".
 */
var DeviceStorageFactory = {
  generate: function(client, type) {
    return DeviceStorageFactory[type](client);
  }
};

/**
 * Generate the DesktopClient instance.
 *
 * @param {Object} client the marionette client.
 */
DeviceStorageFactory.DesktopClient = function(client) {
  var DesktopClient = require('./desktop_client_device_storage');
  return new DesktopClient(client);
};

module.exports = DeviceStorageFactory;
