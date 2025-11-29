class transporte{
    constructor(transporte, marca, modelo, año, color){
        this.transporte = transporte
        this.marca = marca
        this.modelo = modelo
        this.año = año
        this.color = color
    }

    especificaciones(){
        console.log(`El ${this.transporte} es un ${this.marca} ${this.modelo} del año ${this.año} y es de color ${this.color}`)
    }
    
}
let transporte1 = new transporte("carro", "Mazda", "3", "2020", "Gris")
let transporte2 = new transporte("carro", "Kia", "Picanto", "2022", "Rojo")
let transporte3 = new transporte("carro", "Mazda", "2", "2021", "Gris Oscuro")
let transporte4 = new transporte("carro", "Chevrolet", "Spark GT", "2018", "Verde")
let transporte5 = new transporte("carro", "Toyota", "Yaris", "2023", "Blanco")
let transporte6 = new transporte("carro", "Susuki", "Swift", "2021", "Gris Claro")
let transporte7 = new transporte("carro", "Renault", "Sandero", "2020", "Rojo")
let transporte8 = new transporte("carro", "Mercedes-Benz", "CLA 45", "2022", "Negro")
let transporte9 = new transporte("carro", "Bmw", "M240i", "2026", "Blanco")
let transporte10 = new transporte("carro", "Hyundai", "i20", "2019", "Amarillo")
let transporte11 = new transporte("avión", "Boeing", "777", "2019", "Blanco")
let transporte12 = new transporte("tanque", "M1A2", "SEPv4 Abrams", "2026", "Arena")
let transporte13 = new transporte("moto", "Bmw", "S1000", "2024", "Blanco con rayas azules y rojas")


transporte1.especificaciones()
transporte2.especificaciones()
transporte3.especificaciones()
transporte4.especificaciones()
transporte5.especificaciones()
transporte6.especificaciones()
transporte7.especificaciones()
transporte8.especificaciones()
transporte9.especificaciones()
transporte10.especificaciones()
transporte11.especificaciones()
transporte12.especificaciones()
transporte13.especificaciones()