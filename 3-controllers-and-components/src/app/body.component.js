/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-03T11:00:41-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: body.component.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-06T13:18:12-05:00
 */

import 'app/body.styles'
import templateUrl from 'app/body.template'

const controller =
  class FtBodyController {
    constructor ($log, appService) {
      'ngInject'
      this.service = appService
      $log.log('ft-body is a go')
    }

    get amount () {
      return this.service.amount
    }

    get mult () {
      return this.service.mult
    }

    click () {
      this.service.increment()
    }

    multiply () {
      this.service.multiply()
    }

    autoClick () {
      this.service.autoClick()
    }

    save () {
      this.service.save()
    }

    load () {
      this.service.load()
    }
  }

export const ftBody = {
  controller,
  templateUrl,
  controllerAs: 'body'
}
