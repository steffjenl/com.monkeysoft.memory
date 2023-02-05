'use strict';

const Homey = require('homey');
const { WebSocket } = require('ws');

class MyApp extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('MyApp has been initialized');

    this._deviceExecuted = this.homey.flow.getDeviceTriggerCard('action-executed');

    this.homey.setInterval(() => {
      const temp = Math.floor(Math.random() * 100) + 1;
      const tokens = {
        temp,
      };
      const driver = this.homey.drivers.getDriver('example-driver');
      const device = driver.getDeviceById('my-device-1');
      this._deviceExecuted.trigger(device, tokens, {});
      this.homey.log(`device flow executed with token ${temp}`);
    }, 500);
    // const ws = new WebSocket('ws://192.168.178.5');
    //
    // ws.on('error', console.error);
    //
    // ws.on('open', () => {
    //   ws.send('something');
    // });
    //
    // ws.on('message', (data) => {
    //   Homey.app.log('received: %s', data);
    // });
  }

}

module.exports = MyApp;
