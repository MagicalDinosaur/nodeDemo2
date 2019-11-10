// 类型断言
function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}

type StringType = string;
type FunctionType = () => string;
type NameOrResolver = StringType | FunctionType;
function getName(n: NameOrResolver): StringType {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}

enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
console.log(Days["Sun"]); // 0 
console.log(Days[0]); // 'Sun'
