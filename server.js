'use strict';

const FastBootAppServer = require('fastboot-app-server');
const S3Notifier = require('fastboot-s3-notifier');
const S3Downloader = require('fastboot-s3-downloader');
const Creds = {
  distPath: '/home/production/dockyard-app-server/dist',
  bucket: 'dockyard-com-staging',
  key: 'dy.json'
};

let downloader = new S3Downloader(Creds);
let notifier = new S3Notifier(Creds);
let server = new FastBootAppServer({
  outputPath: '/home/production/dockyard-app-server/dist',
  downloader,
  notifier
});

server.start();
