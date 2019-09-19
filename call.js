var user = {
  data: 666,
  name: 'Li Ming',
  showData: function (other) {
    console.log(this.data + other)
  }
}

var user2 = user.showData
user2() // undefined,指向全局函数
var user3 = user.showData.bind(user)
user3('777') // 666777



/////////////////////////////////////////////////

function make2() {
  this.cry = function () {
    console.log(this.name + " is crying")
  }
  this.smile = function () {
    console.log('smile')
  }
}

var obj = {}

make2.call(obj);
console.log(obj);
obj.cry();
obj.smile();
// console.log(user);
// make.cry.apply(user,['table']);





