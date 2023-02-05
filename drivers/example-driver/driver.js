'use strict';

const { Driver } = require('homey');

class MyDriver extends Driver {

  /**
   * onInit is called when the driver is initialized.
   */
  async onInit() {
    this.log('MyDriver has been initialized');
  }

  /**
   * onPairListDevices is called when a user is adding a device
   * and the 'list_devices' view is called.
   * This should return an array with the data of devices that are available for pairing.
   */
  async onPairListDevices() {
    return [
      {
        name: 'My Device 1',
        data: {
          id: 'my-device-1',
        },
      },
      {
        name: 'My Device 2',
        data: {
          id: 'my-device-2',
        },
      },
      {
        name: 'My Device 3',
        data: {
          id: 'my-device-3',
        },
      },
    ];
  }

  getDeviceById(deviceId) {
    try {
      const device = this.getDevice({
        id: deviceId,
      });
      return device;
    } catch (error) {
      return false;
    }
  }

}

module.exports = MyDriver;
