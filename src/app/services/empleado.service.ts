import { Injectable } from '@angular/core';
// import { realpath } from 'node:fs';
import { Empleado } from '../models/Empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listEmpleados: Empleado[] = [
    {
      nombreCompleto:"Lucas",
      correo:"lmartinez@gmail.com",
      telefono:351223123,
      sexo:"Masculino",
      fechaIngreso: new Date,
      estadoCivil:"Soltero"
    },
    {
      nombreCompleto:"Jorge",
      correo:"Jmartinez@gmail.com",
      telefono:351223123,
      sexo:"Masculino",
      fechaIngreso: new Date,
      estadoCivil:"Soltero"
    },
    {
      nombreCompleto:"Laura",
      correo:"laumartinez@gmail.com",
      telefono:351223123,
      sexo:"Femenino",
      fechaIngreso: new Date,
      estadoCivil:"Soltero"
    },
    {
      nombreCompleto:"Mara",
      correo:"Marmartinez@gmail.com",
      telefono:351223123,
      sexo:"Femenino",
      fechaIngreso: new Date,
      estadoCivil:"Soltero"
    },
    {
      nombreCompleto:"Lucas",
      correo:"lmartinez@gmail.com",
      telefono:351223123,
      sexo:"Masculino",
      fechaIngreso: new Date,
      estadoCivil:"Soltero"
    },
    {
      nombreCompleto:"Jorge",
      correo:"Jmartinez@gmail.com",
      telefono:351223123,
      sexo:"Masculino",
      fechaIngreso: new Date,
      estadoCivil:"Soltero"
    },
    {
      nombreCompleto:"Laura",
      correo:"laumartinez@gmail.com",
      telefono:351223123,
      sexo:"Femenino",
      fechaIngreso: new Date,
      estadoCivil:"Soltero"
    },
    {
      nombreCompleto:"Mara",
      correo:"Marmartinez@gmail.com",
      telefono:351223123,
      sexo:"Femenino",
      fechaIngreso: new Date,
      estadoCivil:"Soltero"
    },
    
  ];

  constructor() { }

  getEmpleados(){
    return this.listEmpleados.slice();
  }

  eliminarEmpleado(index: number){
    this.listEmpleados.splice(index,1);
  }

  agregarEmpleado(empleado: Empleado){
    this.listEmpleados.unshift(empleado);
  }

  getEmpleado(index: number){
    return this.listEmpleados[index];
  }

  editEmpleado(index: number,empleado: Empleado){
    this.listEmpleados[index].nombreCompleto = empleado.nombreCompleto;
    this.listEmpleados[index].correo = empleado.correo;
    this.listEmpleados[index].estadoCivil = empleado.estadoCivil;
    this.listEmpleados[index].telefono = empleado.telefono;
    this.listEmpleados[index].sexo = empleado.sexo;
    this.listEmpleados[index].fechaIngreso = empleado.fechaIngreso;
  }
}
