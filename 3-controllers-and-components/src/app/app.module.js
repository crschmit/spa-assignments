/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-03T11:00:41-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: app.module.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-06T11:32:36-05:00
 */

import { AppService } from 'app/app.service'

import { ftApp } from 'app/app.component'
import { ftHeader } from 'app/header.component'
import { ftBody } from 'app/body.component'

import { config } from 'app/app.config'

import localStorage from 'angular-local-storage'

export default ng
  .module('ft.buttons', [localStorage])
  .service('appService', AppService)
  .component('ftApp', ftApp)
  .component('ftHeader', ftHeader)
  .component('ftBody', ftBody)
  .config(config)
  .name
