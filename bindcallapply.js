// bind call apply的区别
// 与this有关系

/**
 * bind的介绍
 * bind() 允许我们非常简单的在函数或者方法被调用时绑定 this 到指定对象上
 */

var user = {
  data: 666,
  showData: function () {
    console.log(this.data)
  },
  currying: function (x, y) {
    console.log(x + '+' + y + '=' + (x + y))
  }
}

var user2 = user.showData
user2() // undefined,指向全局函数
var user3 = user.showData.bind(user)
user3() // 666

// 使用bind实现柯里化

var curry = user.currying.bind(user, 5)
curry(6) // 5+6=11

/**
 * apply 和 call的用法
 * apply 和 call 允许我们借用函数以及在函数调用中指定 this 指向
 * 两者区别只是在传参上不一样，apply允许
 */

var person = {
  name: "LiMing",
  callName: function (a, b) {
    console.log(this.name + " is " + a + " and " + b)
  }
}

var callName = person.callName
callName('people', "goodman") // undefined is people and goodman
callName.call(person, 'dog', 'boy')  // LiMing is dog and boy
callName.apply(person, ['cat', 'girl']) // LiMing is cat and girl

// argument场景
function newArray() {
  console.log(Array.prototype.slice.call(arguments, 0, 2))
}
newArray(1, 2, 3, 4, 5, 6) //0,2

// max 参数可变
var allNumbers = [22, 11, 0, 23, 15]
console.log(Math.max.apply(null, allNumbers))
// ES6拓展运算符也可以实现
console.log(Math.max(...allNumbers))

// 箭头函数限制，apply、call不能执行



