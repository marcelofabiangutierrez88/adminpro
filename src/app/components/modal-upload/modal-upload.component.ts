import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { SubirArchivoService } from 'src/app/services/service.index';
import { ModalUploadService } from './modal-upload.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {


  imagenSubir: File;
  imagenTemp: string | ArrayBuffer;


  constructor(
    public _subirArchivoService: SubirArchivoService,
    public _modalUploadService: ModalUploadService
  ) {}

  ngOnInit() {
  }


  cerrarModal(){
    this.imagenTemp = null;
    this.imagenSubir = null;
    this._modalUploadService.ocultarModal();
  }

  seleccionImagen (archivo:File){
    if (!archivo){
      this.imagenSubir= null;
      return;
    }

    if(archivo.type.indexOf('image')<0){
      Swal.fire('Solo Imagenes', 'El archivo seleccionado no es una imagen', 'error');
      this.imagenSubir= null;
      return;
    }


    this.imagenSubir= archivo;
    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL(archivo);

    reader.onloadend = ()=> this.imagenTemp = reader.result;
  }

  subirImagen(){
    this._subirArchivoService.subirArchivo ( this.imagenSubir, this._modalUploadService.tipo, this._modalUploadService.id)
            .then( resp =>{
              
              this._modalUploadService.notifiacion.emit(resp);
              this._modalUploadService.ocultarModal();
            })
            .catch (err =>{
              console.log('error en la carga');
            });
  }

}
