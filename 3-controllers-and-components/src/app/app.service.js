/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-03T11:00:41-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: app.service.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-06T14:52:19-05:00
 */

const appState = (clickCost, multCost, autoCost) => {
  return (total, incr, mult, auto) => {
    let t = total
    let i = incr
    let m = mult
    let a = auto

    return {
      getTotal: () => t,
      getIncrement: () => i,
      getMultiplier: () => m,
      getAutoClickers: () => a,
      increment: () => {
        if (t >= clickCost) {
          t -= clickCost
          t += i
        }
      },
      multiply: () => {
        if (t >= multCost) {
          t -= multCost
          i *= m
        }
      },
      addAuto: () => {
        if (t >= autoCost) {
          t -= autoCost
          a += 1
        }
      }
    }
  }
}

const freeClickAppState = appState(0, 10, 100)

export class AppService {
  // amount = 1
  // mult = 1.2
  // total = 0

  constructor ($interval, $log, localStorageService) {
    'ngInject'
    this.interval = $interval
    this.localStorageService = localStorageService
    this.log = $log
    // this.amount = 1
    // this.incrCost = 0
    // this.mult = 1.2
    // this.multCost = 10
    // this.autoCost = 100
    // this.total = 0

    //
    this.state = freeClickAppState(0, 1, 1.2, 0)
  }

  // pay (n) {
  //   if (n <= this.total) {
  //     this.total -= n
  //     return this.total
  //   }
  // }
  //
  // pay2play (cost, fn) {
  //   if (this.pay(cost) !== undefined) fn()
  // }
  getTotal () {
    return this.state.getTotal()
  }

  getIncrement () {
      return this.state.getIncrement()
  }

  getMultiplier () {
    return this.state.getMultiplier()
  }

  increment () {
    // this.total += this.amount
    // this.pay2play(this.incrCost, () => { this.total += this.amount })
    this.state.increment()
  }

  multiply () {
    // this.amount *= this.mult
    // this.pay2play(this.multCost, () => { this.amount *= this.mult })
    this.state.multiply()
  }

  autoClick () {
    // this.interval(() => this.increment(), 1000)
    // this.pay2play(this.autoCost, () => {
    //   this.interval(() => this.increment(), 1000) })
    this.state.addAuto()
  }

  save () {
    // this.log.info(this.localStorageService.getStorageType())
    this.localStorageService.set('state', {
      clickCost: 0,
      multCost: 10,
      autoCost: 100,
      total: this.state.getTotal(),
      incr: this.state.getIncrement(),
      mult: this.state.getMultiplier(),
      auto: this.state.getAutoClickers()
    })
  }

  load () {
    let s = this.localStorageService.get('state')
    let stateFn = appState(s.clickCost, s.multCost, s.autoCost)
    this.state = stateFn(s.total, s.incr, s.mult, s.auto)
  }
}
