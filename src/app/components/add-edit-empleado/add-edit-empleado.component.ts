import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/models/Empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-add-edit-empleado',
  templateUrl: './add-edit-empleado.component.html',
  styleUrls: ['./add-edit-empleado.component.css'],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
}]
})
export class AddEditEmpleadoComponent implements OnInit {
  myform: FormGroup;
  idEmpleado: any;
  accion = 'Agregar';

  estadosCiviles: any[] = [
    'Casado',
    'Soltero',
    'Divorciado'
  ];

  constructor(private fb: FormBuilder, 
    private empleadoService: EmpleadoService, 
    private router: Router, 
    private snakBar: MatSnackBar,
    private aroute: ActivatedRoute) { 
    this.myform = this.fb.group({
      nombreCompleto: ['', [Validators.required, Validators.maxLength(20)]],
      correo: ['', [Validators.required, Validators.email]],
      fechaIngreso: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      estadoCivil: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
    });
    const idParam = 'id';
    this.idEmpleado = this.aroute.snapshot.params[idParam];
  }

  ngOnInit(): void {
    if (this.idEmpleado !== undefined) {
      this.accion = 'Editar'
      this.editarEmpleado()
    }

  }

  guardarEmpleado(){
    const empleado: Empleado = {
      nombreCompleto: this.myform.get('nombreCompleto').value,
      sexo: this.myform.get('sexo').value,
      correo: this.myform.get('correo').value,
      fechaIngreso: this.myform.get('fechaIngreso').value,
      telefono: this.myform.get('telefono').value,
      estadoCivil: this.myform.get('estadoCivil').value,
    }

    if (this.idEmpleado !== undefined) {
      this.modificarEmpleado(empleado,this.idEmpleado);
    }else{
      this.agregarEmpleado(empleado);
    }

   
  }

  editarEmpleado(){
    const empleado: Empleado = this.empleadoService.getEmpleado(this.idEmpleado);
    console.log(empleado);
    this.myform.patchValue({
      nombreCompleto: empleado.nombreCompleto,
      sexo:  empleado.sexo,
      correo:  empleado.correo,
      fechaIngreso:  empleado.fechaIngreso,
      telefono:  empleado.telefono,
      estadoCivil:  empleado.estadoCivil,
    })
  }

  agregarEmpleado(empleado: Empleado){
    this.empleadoService.agregarEmpleado(empleado);
    this.router.navigate(['/']);
    this.snakBar.open('El empleado fue agregado con exito','',{
      duration: 30000,
    });
  }

  modificarEmpleado(empleado: Empleado,idEmpleado: number){
    this.empleadoService.editEmpleado(idEmpleado,empleado);
    this.router.navigate(['/']);
    this.snakBar.open('El empleado fue modificado con exito','',{
      duration: 30000,
    });
  }
}
