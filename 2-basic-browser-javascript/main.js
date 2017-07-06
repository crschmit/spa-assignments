/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-03T11:00:41-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: main.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-05T22:20:08-05:00
 */

$(document).ready(function() {

  let formatNumber = n => n.toFixed(2)

  // Total
  let total = 0
  let totalView = $("#total-view")

  let showTotal = () => totalView.text(formatNumber(total))
  showTotal()
  //

  // Increment
  let increment = 1
  let incrementView = $("#increment-view")

  let showIncrement = () => incrementView.text(formatNumber(increment))
  showIncrement()

  let incrementTotal = n => {
    total += n
    showTotal()
  }

  let incrementBtn = $("#increment-btn")
  incrementBtn.click(() => incrementTotal(increment))
  //

  // Multiply
  let multiply = 1.2
  let multiplyCost = 10
  let multiplyView = $("#multiply-view")

  let showMultiply = () => multiplyView.text(formatNumber(multiply))
  showMultiply()

  let multiplyIncrement = m => {
    if(total >= multiplyCost) {
      total -= multiplyCost
      showTotal()
      increment *= m
      showIncrement()
    }
  }

  let multiplyBtn = $("#multiply-btn")
  multiplyBtn.click(() => multiplyIncrement(multiply))
  //

  // Auto Clickers
  let auto = 0
  let autoCost = 100
  let autoView = $("#auto-view")

  let showAuto = () => autoView.text(auto)
  showAuto()

  let addAutoClicker = () => {
    if (total >= autoCost) {
      total -= autoCost
      showTotal()
      setInterval(() => incrementTotal(increment), 1000)
      auto += 1
      showAuto()
    }
  }

  let autoBtn = $("#auto-btn")
  autoBtn.click(addAutoClicker)

});
