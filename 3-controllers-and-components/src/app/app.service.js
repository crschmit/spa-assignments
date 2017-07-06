/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-03T11:00:41-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: app.service.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-06T13:08:09-05:00
 */

export class AppService {
  // amount = 1
  // mult = 1.2
  // total = 0

  constructor ($interval, $log, localStorageService) {
    'ngInject'
    this.interval = $interval
    this.localStorageService = localStorageService
    this.log = $log
    this.amount = 1
    this.incrCost = 0
    this.mult = 1.2
    this.multCost = 10
    this.autoCost = 100
    this.total = 0
  }

  pay (n) {
    if (n <= this.total) {
      this.total -= n
      return this.total
    }
  }

  pay2play (cost, fn) {
    if (this.pay(cost) !== undefined) fn()
  }

  increment () {
    // this.total += this.amount
    this.pay2play(this.incrCost, () => { this.total += this.amount })
  }

  multiply () {
    // this.amount *= this.mult
    this.pay2play(this.multCost, () => { this.amount *= this.mult })
  }

  autoClick () {
    // this.interval(() => this.increment(), 1000)
    this.pay2play(this.autoCost, () => {
      this.interval(() => this.increment(), 1000) })
  }

  save () {
    // this.log.info(this.localStorageService.getStorageType())
    this.localStorageService.set('total', this.total)
  }

  load () {
    this.log.info(this.localStorageService.get('total'))
  }
}
