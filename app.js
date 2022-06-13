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

class Color {
    static none = {red: 0, amber: 0, green: 0};
    static red = {red: 1, amber: 0, green: 0};
    static amber = {red: 0, amber: 1, green: 0};
    static green = {red: 0, amber: 0, green: 1};
    static redAmber = {red: 1, amber: 1, green: 0};
}

class TrafficLight {
    constructor(red, amber, green) {
        this.red = red;
        this.amber = amber;
        this.green = green;
        this.standById = null;
        this.init();
    }

    init() {
        if(this.standById) {
            clearInterval(this.standById);
            this.standById = null;
        }
        this.setColor(Color.none);
    }

    goBlinking(color) {
        this.init();
        let state = 1;
         this.standById = setInterval((t) => {
            if(state === 1) {
                t.setColor(color);
                state = 0;
            } else {
                t.setColor(Color.none);
                state = 1;
            }
        }, 500, this);
    }

    
    setColor({red, amber, green}) {
        this.red.style.backgroundColor = (red === 1) ?  "red" : "gray";
        this.amber.style.backgroundColor = (amber === 1) ? "yellow" : "gray";
        this.green.style.backgroundColor = (green === 1) ? "green" : "gray";
    }

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const t1 = new TrafficLight(t1_red, t1_amber, t1_green);
const t2 = new TrafficLight(t2_red, t2_amber, t2_green);
const t3 = new TrafficLight(t3_red, t3_amber, t3_green);
const t4 = new TrafficLight(t4_red, t4_amber, t4_green);

t1.goBlinking(Color.amber);
t2.goBlinking(Color.amber);
t3.goBlinking(Color.amber);
t4.goBlinking(Color.amber);

let isRunning = false;

start.addEventListener('click', () => {
    
    isRunning = true;

    start.style.display = 'none';
    t1.init();
    t2.init();
    t3.init();
    t4.init();
    
    t1.setColor(Color.red);
    t2.setColor(Color.green);
    t3.setColor(Color.green);
    t4.setColor(Color.red);
    

    async function working() {
        
        await sleep(4000);
        if(isRunning === false) return;

        goBlinking(Color.green);

        await sleep(4000);
        if(isRunning === false) return;
        
        t1.setColor(Color.redAmber);
        t2.setColor(Color.amber);
        t3.setColor(Color.amber);
        t4.setColor(Color.redAmber);
    
        await sleep(2000);
        if(isRunning === false) return;
        
        t1.setColor(Color.green);
        t2.setColor(Color.red);
        t3.setColor(Color.red);
        t4.setColor(Color.green);

        await sleep(4000);
        if(isRunning === false) return;
        
        goBlinking(Color.green);
        
        await sleep(4000);
        if(isRunning === false) return;
    

        t1.setColor(Color.amber);
        t2.setColor(Color.redAmber);
        t3.setColor(Color.redAmber);
        t4.setColor(Color.amber);
    
        await sleep(2000);
        if(isRunning === false) return;

        t1.setColor(Color.red);
        t2.setColor(Color.green);
        t3.setColor(Color.green);
        t4.setColor(Color.red);
        

        if(isRunning === true){
            working();
        }
    }

    working();
});

stop.addEventListener('click', () => {
    start.style.display = '';
    isRunning = false;

    t1.goBlinking(Color.amber);
    t2.goBlinking(Color.amber);
    t3.goBlinking(Color.amber);
    t4.goBlinking(Color.amber);
});