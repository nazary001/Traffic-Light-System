let addCarRight = document.querySelector('#add_car_right');
let cars = document.querySelector('.car');

class Car {

    constructor(){
        this.car = 'null';
    }

    drive(){
        let distance = 0;
        let driving = setInterval(() => {
            this.car.style.marginRight = `${distance}px`;
            distance += 1;
        }, 40)
    }

    stop(){

    }

    addCar() {
        this.car = document.createElement('img');
        this.car.src = './imgs/car_right.png';
        this.car.style.width = '5rem';
        this.car.style.position = 'relative';
        cars.append(this.car);
    }
}

let Audi = new Car()

addCarRight.addEventListener('click', () => {
    Audi.addCar();
    Audi.drive();
})
