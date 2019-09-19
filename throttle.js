console.log('zhixing ')
function throttle(){
    var startTime=0
    return function(){
        // console.log(startTime)
        var endTime=new Date().getTime();
        if(endTime-startTime>2000){
            console.log('=====')
            startTime=endTime
        }
        
    }
}

let result= throttle()
setInterval(function(){
    console.log('=')
    result()
},500)