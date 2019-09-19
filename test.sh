#!/bin/bash
echo "Hello World!"

# 变量
# 变量名不加美元符号，注意哦，变量名和=之间不能有空格
your_name="LiMing"

# 使用变量时格式为 ${变量名} ，花括号可以忽略
echo $your_name
echo ${your_name}

# 设置只读变量,如果对其赋值会报错 your_name: readonly variable
readonly your_name

# 删除变量
your_age=12
unset your_age


# 数组
array=(1,2,3,4)

# 读取数组数据
echo ${array[0]}
echo "数组元素为: ${array[*]}"
echo "数组元素个数为: ${#array[*]}"

# 传递参数 
echo "执行的文件名：$0";
echo "第一个参数为：$1";
echo "第二个参数为：$2";

# 基本运算符
# 具体使用方法如下：
a=2
b=4
echo `expr $a + $b`
echo `expr $a - $b`
echo `expr $b / $a`
echo `expr $b \* $a`
[ $a == $b ]
[ $a != $b ]

# 关系运算符
# [$a -eq $b]  等同于  ==
# [$a -ne $b]  等同于  !=
# [$a -gt $b]  等同于  >
# [$a -lt $b]  等同于  <
# [$a -ge $b]  等同于  <=
# [$a -le $b]  等同于  >=

# 布尔运算符
# [!$a]
# [$a -o $b]   或运算，有一个表达式为 true 则返回 true
# [$a -a $b]   与运算，两个表达式都为 true 才返回 true


# 读取一个变量
read name 
echo "my name is $name"


# printf 语法
# %-10s 指一个宽度为10个字符（-表示左对齐，没有则表示右对齐），任何字符都会被显示在10个字符宽的字符内，如果不足则自动以空格填充，超过也会将内容全部显示出来。
# %-4.2f 指格式化为小数，其中.2指保留2位小数。
printf "%-10s %-8s %-4s\n" 姓名 性别 体重kg  
printf "%-10s %-8s %-4.2f\n" 郭靖 男 66.1234 
printf "%-10s %-8s %-4.2f\n" 杨过 男 48.6543 
printf "%-10s %-8s %-4.2f\n" 郭芙 女 47.9876 


# test命令
# 用于检查某个条件是否成立，它可以进行数值、字符和文件三个方面的测试








