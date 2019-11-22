/**
 * 满足同时多个请求的时候，并发最多两个
 */
class Scheduler {
    constructor() {
        this.tasks = []
        this.runCount = 0
    }
    add(promiseCreater) {
        return new Promise((res, rej) => {
            this.tasks.push([promiseCreater, res])
            if (this.runCount < 2) {
                this.run()
            }
        })
    }
    run() {
        if(!this.tasks.length) return
        let [task, res] = this.tasks.shift()
        this.runCount++
        task().then(resolve => {
            this.runCount--
            res()
            this.run()
        })
    }
}

const timeout = (time) => new Promise(resolve => {
    setTimeout(resolve, time)
})

const scheduler = new Scheduler()

const addTask = (time, order) => {
    scheduler.add(() => timeout(time)).then(() => console.log(order))
}

addTask(500,'500ms run')
addTask(1000,'1000ms run')
addTask(500,'500ms run')
addTask(500,'500ms run')
addTask(500,'500ms run')
addTask(500,'500ms run')