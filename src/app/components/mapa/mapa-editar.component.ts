import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<MapaEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      console.log(data);
      this.formulario = fb.group({
        titulo: data.titulo,
        desc: data.desc
      });
    }

  ngOnInit() {
  }

  guardarCambios(){
    console.log(this.formulario.value);
    this.dialogRef.close(this.formulario.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
