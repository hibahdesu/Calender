const modate = document.querySelector('.date h1');
const date = document.querySelector('.date p');

const daysDiv = document.querySelector('.days');

const index = new Date().getMonth();
console.log(index);
const last = new Date(new Date().getFullYear(), index + 1, 0).getDate();
const first = new Date(new Date().getFullYear(), index, 1).getDay() - 1;

console.log(first);

console.log(last);


const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

console.log(months[index]);
modate.innerText = months[index];

date.innerText = new Date().toDateString();

let days = '';

for (let i = first; i > 0; i--) {
    days += `<div class="empty"></div>`;
}

for (let i = 1; i <= last; i++) {
    if (i === new Date().getDate()) {
        days += `<div class='today'>${i}</div>`;
    } else {
        days += `<div>${i}</div>`;
    }
    
}
daysDiv.innerHTML = days;