let sec1_1 = document.getElementById('sec1_1');
let sec1_2 = document.getElementById('sec1_2');
let sec1_3 = document.getElementById('sec1_3');
let sec2_1 = document.getElementById('sec2_1');
let sec2_2 = document.getElementById('sec2_2');
let sec2_3 = document.getElementById('sec2_3');
let sec3_1 = document.getElementById('sec3_1');
let sec3_2 = document.getElementById('sec3_2');
let sec3_3 = document.getElementById('sec3_3');
let sec4_1 = document.getElementById('sec4_1');
let sec4_2 = document.getElementById('sec4_2');
let sec4_3 = document.getElementById('sec4_3');
let start = document.getElementById('start_button');
let stop = document.getElementById('stop_button');


const traffic_light_1 = [sec1_1, sec1_2, sec1_3];
const traffic_light_2 = [sec2_1, sec2_2, sec2_3];
const traffic_light_3 = [sec3_1, sec3_2, sec3_3];
const traffic_light_4 = [sec4_1, sec4_2, sec4_3];

sec1_2.style.backgroundColor = 'gray';
sec2_2.style.backgroundColor = 'gray';
sec3_2.style.backgroundColor = 'gray';

function standby_mode(){
    if(traffic_light_1[1].style.backgroundColor == 'gray'){
        traffic_light_1[1].style.backgroundColor = 'yellow';
        traffic_light_2[1].style.backgroundColor = 'yellow';
        traffic_light_3[1].style.backgroundColor = 'yellow';
        traffic_light_4[1].style.backgroundColor = 'yellow';
    }
    else if(traffic_light_1[1].style.backgroundColor == 'yellow'){
        traffic_light_1[1].style.backgroundColor = 'gray';
        traffic_light_2[1].style.backgroundColor = 'gray';
        traffic_light_3[1].style.backgroundColor = 'gray';
        traffic_light_4[1].style.backgroundColor = 'gray';
    }
}

 let standby_stop = setInterval(standby_mode, 1000);

start.addEventListener('click', () => {
    start.style.display = 'none';
    clearInterval(standby_stop);
    if(traffic_light_1[1].style.backgroundColor == 'yellow'){
        standby_mode();
    };
    function working(){
        traffic_light_1[2].style.backgroundColor = 'red';
        traffic_light_4[0].style.backgroundColor = 'red';
        traffic_light_2[0].style.backgroundColor = 'green';
        traffic_light_3[2].style.backgroundColor = 'green';

        setTimeout(() => {
            traffic_light_1[2].style.backgroundColor = 'gray';
            traffic_light_1[1].style.backgroundColor = 'gray';
            traffic_light_1[0].style.backgroundColor = 'green';
            traffic_light_4[0].style.backgroundColor = 'gray';
            traffic_light_4[1].style.backgroundColor = 'gray';
            traffic_light_4[2].style.backgroundColor = 'green';
            traffic_light_3[1].style.backgroundColor = 'gray';
            traffic_light_2[1].style.backgroundColor = 'gray';
            traffic_light_3[0].style.backgroundColor = 'red';
            traffic_light_2[2].style.backgroundColor = 'red';

        }, 10000);
        setTimeout(() => {end_green_2 = setInterval(green_light_2, 500)}, 4000)
        setTimeout(() => {
            traffic_light_1[1].style.backgroundColor = 'yellow';
            traffic_light_4[1].style.backgroundColor = 'yellow';
            traffic_light_2[1].style.backgroundColor = 'yellow';
            traffic_light_3[1].style.backgroundColor = 'yellow';
            clearInterval(end_green_2);
         }, 8000);
        function green_light() {
            if(traffic_light_1[0].style.backgroundColor == 'green'){
                traffic_light_1[0].style.backgroundColor = 'gray';
                traffic_light_4[2].style.backgroundColor = 'gray';
            }
            else if(traffic_light_1[0].style.backgroundColor == 'gray'){
                traffic_light_1[0].style.backgroundColor = 'green';
                traffic_light_4[2].style.backgroundColor = 'green';
            }
        };
        function green_light_2() {
            if(traffic_light_2[0].style.backgroundColor == 'green'){
                traffic_light_2[0].style.backgroundColor = 'gray';
                traffic_light_3[2].style.backgroundColor = 'gray';
            }
            else if(traffic_light_2[0].style.backgroundColor == 'gray'){
                traffic_light_2[0].style.backgroundColor = 'green';
                traffic_light_3[2].style.backgroundColor = 'green';
            }
        };
        setTimeout(() => {end_green = setInterval(green_light, 500)}, 16000);
        setTimeout(() => {
            clearInterval(end_green);
            traffic_light_1[1].style.backgroundColor = 'yellow';
            traffic_light_4[1].style.backgroundColor = 'yellow';
            traffic_light_2[1].style.backgroundColor = 'yellow';
            traffic_light_3[1].style.backgroundColor = 'yellow';
        }, 20000);
        setTimeout(() => {
            traffic_light_1[1].style.backgroundColor = 'gray';
            traffic_light_4[1].style.backgroundColor = 'gray';
            traffic_light_2[1].style.backgroundColor = 'gray';
            traffic_light_3[1].style.backgroundColor = 'gray';
            traffic_light_2[2].style.backgroundColor = 'gray';
            traffic_light_3[0].style.backgroundColor = 'gray';
        }, 22000);
        
    };
    working();
    stopInt = setInterval(working, 22000);
    stop.addEventListener('click', () => {
        start.style.display = '';
        clearInterval(stopInt);
        let kill_time = setTimeout(';');
        for(i = 0; i < kill_time; i++){
            clearTimeout(i);
        }

        for(let i = 0; i <= 2; i++){
            traffic_light_1[i].style.backgroundColor = 'gray';
            traffic_light_2[i].style.backgroundColor = 'gray';
            traffic_light_3[i].style.backgroundColor = 'gray';
            traffic_light_4[i].style.backgroundColor = 'gray';
        }

        standby_stop = setInterval(standby_mode, 1000);
    })
});