const t1_red = document.querySelector('#t1 .red');
const t1_amber = document.querySelector('#t1 .amber');
const t1_green = document.querySelector('#t1 .green');

const t2_red = document.querySelector('#t2 .red');
const t2_amber = document.querySelector('#t2 .amber');
const t2_green = document.querySelector('#t2 .green');

const t3_red = document.querySelector('#t3 .red');
const t3_amber = document.querySelector('#t3 .amber');
const t3_green = document.querySelector('#t3 .green');


const t4_red = document.querySelector('#t4 .red');
const t4_amber = document.querySelector('#t4 .amber');
const t4_green = document.querySelector('#t4 .green');

const start = document.getElementById('start_button');
const stop = document.getElementById('stop_button');


class TrafficLight {
    constructor(red, amber, green) {
        this.red = red;
        this.amber = amber;
        this.green = green;
        this.standById;
        this.init();
    }

    init() {
        this.setColor({red: 0, amber: 0, green: 0})
    }

    standby() {
        let state = 1;
         this.standById = setInterval((t) => {
            if(state === 1) {
                state = 0;
                t.setColor({red: 0, amber: state, green: 0});
            } else {
                state = 1;
                t.setColor({red: 0, amber: state, green: 0});
            }
        }, 1000, this);
    }

    
    setColor({red, amber, green}) {
        this.red.style.backgroundColor = (red === 1) ?  "red" : "gray";
        this.amber.style.backgroundColor = (amber === 1) ? "yellow" : "gray";
        this.green.style.backgroundColor = (green === 1) ? "green" : "gray";
    }

    stopStandBy(){
        clearInterval(this.standById);
        this.init();
    }

    working() {
        this.setColor({red: 1, amber: 0, green: 0});
        setTimeout(() => {this.setColor({red: 1, amber: 1, green: 0})}, 8000);
        setTimeout(() => {this.setColor({red: 0, amber: 0, green: 1})}, 10000);
        setTimeout(() => {
            let state = 1;
             this.green_blink = setInterval(() =>{
                if(state === 1){
                    this.setColor({red: 0, amber: 0, green: 0 });
                    state = 0;
                }
                else{
                    this.setColor({red: 0, amber: 0, green: 1 });
                    state = 1;
                }
            }, 500)
        }, 14000)
        setTimeout(() => {
            clearInterval(this.green_blink);
            this.setColor({red: 0, amber: 1, green: 0 });
        }, 18000)
        setTimeout(() => {this.setColor({red: 0, amber: 0, green: 0 })}, 20000);
    }

    working2() {
        this.setColor({red: 0, amber: 0, green: 1});
        setTimeout(() => {
            let state = 1;
             this.green_blink = setInterval(() =>{
                if(state === 1){
                    this.setColor({red: 0, amber: 0, green: 0 });
                    state = 0;
                }
                else{
                    this.setColor({red: 0, amber: 0, green: 1 });
                    state = 1;
                }
            }, 500)
        },4000)
        setTimeout(() => {
            clearInterval(this.green_blink);
            this.setColor({red: 0, amber: 1, green: 0})}, 8000);
        setTimeout(() => {this.setColor({red: 1, amber: 0, green: 0})}, 10000);
        setTimeout(() => {this.setColor({red: 0, amber: 1, green: 0})}, 18000);
        setTimeout(() => {this.setColor({red: 0, amber: 0, green: 0 })}, 20000);
    }

}

const t1 = new TrafficLight(t1_red, t1_amber, t1_green);
const t2 = new TrafficLight(t2_red, t2_amber, t2_green);
const t3 = new TrafficLight(t3_red, t3_amber, t3_green);
const t4 = new TrafficLight(t4_red, t4_amber, t4_green);

t1.standby();
t2.standby();
t3.standby();
t4.standby();

start.addEventListener('click', () => {
    start.style.display = 'none';
    t1.stopStandBy();
    t2.stopStandBy();
    t3.stopStandBy();
    t4.stopStandBy();
    
    t1.setColor({red: 1, amber: 0, green: 0});
    t2.setColor({red: 0, amber: 0, green: 1});
    t3.setColor({red: 0, amber: 0, green: 1});
    t4.setColor({red: 1, amber: 0, green: 0});
    working();

    function working() {
        setTimeout(() => {
            let state = 1;
            green_blink = setInterval(() => {
                if(state === 1){
                    t2.setColor({red: 0, amber: 0, green: 0 });
                    t3.setColor({red: 0, amber: 0, green: 0 });
                    state = 0;
                }
                else{
                    t2.setColor({red: 0, amber: 0, green: 1 });
                    t3.setColor({red: 0, amber: 0, green: 1 });
                    state = 1;
                }
            }, 500)
        }, 4000)
    
        setTimeout(() => {
            clearInterval(green_blink);
            t1.setColor({red: 1, amber: 1, green: 0});
            t2.setColor({red: 0, amber: 1, green: 0});
            t3.setColor({red: 0, amber: 1, green: 0});
            t4.setColor({red: 1, amber: 1, green: 0});
        }, 8000)
    
        setTimeout(() => {
            t1.setColor({red: 0, amber: 0, green: 1});
            t2.setColor({red: 1, amber: 0, green: 0});
            t3.setColor({red: 1, amber: 0, green: 0});
            t4.setColor({red: 0, amber: 0, green: 1});
        }, 10000)
    
        setTimeout(() => {
            let state = 1;
            green_blink = setInterval(() => {
                if(state === 1){
                    t1.setColor({red: 0, amber: 0, green: 0 });
                    t4.setColor({red: 0, amber: 0, green: 0 });
                    state = 0;
                }
                else{
                    t1.setColor({red: 0, amber: 0, green: 1 });
                    t4.setColor({red: 0, amber: 0, green: 1 });
                    state = 1;
                }
            }, 500)
        }, 14000)
    
        setTimeout(() => {
            clearInterval(green_blink);
            t1.setColor({red: 0, amber: 1, green: 0});
            t2.setColor({red: 1, amber: 1, green: 0});
            t3.setColor({red: 1, amber: 1, green: 0});
            t4.setColor({red: 0, amber: 1, green: 0});
        }, 18000)
    
        setTimeout(() => {
            t1.setColor({red: 1, amber: 0, green: 0});
            t2.setColor({red: 0, amber: 0, green: 1});
            t3.setColor({red: 0, amber: 0, green: 1});
            t4.setColor({red: 1, amber: 0, green: 0});
            working();
        }, 20000)
    }
});

stop.addEventListener('click', () => {
    start.style.display = '';
    let highestTimeoutId = setTimeout(";");
    for (var i = 0 ; i < highestTimeoutId ; i++) {
        clearTimeout(i); 
    };
    t1.init();
    t2.init();
    t3.init();
    t4.init();
    t1.standby();
    t2.standby();
    t3.standby();
    t4.standby();
});