const date = document.querySelector('.date');
const time = document.querySelector('.time');

function seconds() {
    const now = new Date();
    const myDate = now.getDate();
    const myMonth = now.getMonth() + 1;
    const myYear = now.getFullYear();
    const myMilliseconds = now.getMilliseconds();
    const mySeconds = now.getSeconds();
    const myMinutes = now.getMinutes();
    const myHours = now.getHours();

    date.innerText = myMonth + ' / ' + myDate + ' / ' + myYear;
    time.innerText = myHours + ' : ' + myMinutes + ' : ' + mySeconds;
}
setInterval(seconds, 0);
setInterval(seconds, 1000);