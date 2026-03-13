const ProgressBar=require('progress')
const bar = new ProgressBar(':bar', {total:1150})
const timer = setInterval(() => {
    bar.tick()
    if (bar.complete) {
        clearInterval(time)
    }
},1)