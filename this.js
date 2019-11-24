/**
 * 默认绑定
 * 独立函数调用，可以理解没有其他的规则时的默认调用，this指向全局
 * 严格模式，this 会绑定 undefined，
 */

var a = 2; 
function foo1_1() {
    "use strict";
    console.log( this.a );
}
// foo1_1() // Cannot read property 'a' of undefined

// 在严格模式下调用函数则不影响默认绑定
function foo1_2() {
    console.log( this.a );
}
(function() {
    "use strict";
    foo1_2(); // 2
})();


/**
 * 隐式绑定
 */

function foo2_1() {
    console.log( this.a );
}

var obj = {
    a: 2,
    foo2_1: foo2_1
};

// 当函数引用有上下文对象时，隐式绑定规则会把函数中的this绑定到这个上下文对象 输出：2
obj.foo2_1();

// 虽然bar是obj.foo的一个引用，但是实际上，它引用的是foo函数本身，应用默认绑定，输出：undefined
let bar = obj.foo2_1
bar()


/**
 * 参数传递
 */

function foo3() {
    console.log( this.a );
}

function doFoo(fn) {
    // fn其实引用的是foo
    fn(); // <-- 调用位置！this已经丢失
}

var obj3 = {
    a: 2,
    foo3: foo3
};

var a = "oops, global"; // a是全局对象的属性

doFoo( obj3.foo3 ); // "oops, global"

/**
 * 显示绑定
 * call aplly bind
 */

/**
 * 箭头函数
 * 绑定无法被修改，根据外层（函数或者全局）作用域（词法作用域）来决定this
 * 即在哪
 */
