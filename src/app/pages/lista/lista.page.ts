import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, MenuController, ModalController } from '@ionic/angular';
import { FormListverificacionPage } from '../form-listverificacion/form-listverificacion.page';
import { FormFirmaPage } from '../form-firma/form-firma.page';
import { ListaVerifcacionI } from '../../interfaces/lista-verificacion';
import { DataService } from '../../services/data.service';
import pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts'
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { ITable } from 'pdfmake-wrapper/lib/interfaces';
import { Table } from 'pdfmake-wrapper';
import { Router } from '@angular/router';


type Tablelista = [String, String, String];
@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  @ViewChild('lista') lista: IonList;

  datos: ListaVerifcacionI  [] = [];
  list: any;
  pdfObj = null;
  constructor(private menu:MenuController,private router: Router, private modalCtrl:ModalController,private dataServices: DataService) { }

  ngOnInit() {
    this.listas();
    //this.fetchData(5);
  }
//ghfgfhgfh
  openMenu1(){
    this.menu.enable(true,'primerMenu');
    this.menu.enable(false, 'segundoMenu');
    this.menu.open('primerMenu');
  }
  listas(){
    this.dataServices.getAllLista_V().subscribe( res => {
      this.list = res;
      console.log(this.list);
    }, err => console.error(err));

  }
async  ModalVerificacion(){
    const modal = await this.modalCtrl.create({
      component: FormListverificacionPage
    });
    modal.present();
  }

  DescargarPDF(){

  }
cuerpolista(){
  this.router.navigate(['listverificacion']);

}
 async firmar() {
    this.lista.closeSlidingItems();
    const modal = await this.modalCtrl.create({
      component: FormFirmaPage
    }).then(modal => modal.present());

  }
  editarLista() {
    this.lista.closeSlidingItems();

  }
  eliminarLista(id_lf:string) {
    this.dataServices.delateLista_V(id_lf)
      .subscribe(() => {
      })
    this.listas();

  }
  compartirLista() {
    this.lista.closeSlidingItems();

  }
   //----------extraer datos del api------
    extraer(id){
     
      this.dataServices.getjoinLista(id).subscribe(res =>{
        console.log(res);
    }, err => console.error(err));

  }
  //--extraer datos para genrar la tabla------
  extractData(data: ListaVerifcacionI[]): Tablelista[] {
    return data.map(row => [row.espacio, row.hallazgo, row.atendido]);


  }
  //-----generar tabla para lista de verificacion------------------
  createTable(data: ListaVerifcacionI[]): ITable {
    return new Table([
      ['espacio revisado', 'hallazgos', 'atendido'],
      ...this.extractData(data)
    ])
      .widths([100, 350, 50])
      .margin([0, 15, 0, 0])
      .end;
//hjbfjf
  }
  async pdflista(id) {
    this.dataServices.getjoinLista(id).subscribe(res =>{
      console.log(res);
     this.list=res
    
    var docDefinition = {
      footer: {
        columns: [
          { text: 'TecNM-AD-PO-001-02', bold: true, fontSize: 8, margin: [30, 0] },
          { text: 'Rev. 0', alignment: 'right', bold: true, fontSize: 8, margin: [100, 0] }
        ]
      },
      content: [
        {
          margin: [0, 5, 0, 15],
          color: 'black',
          table: {
            widths: [100, 250, 150],
            //headerRows: 1,
            // keepWithHeaderRows: 1,
            body: [
              [{
                rowSpan: 3, image: 'data:image/jpg;base64,<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>'
                , alignment: 'center', heigh: 30
              }, { style: 'header', text: 'Formato  para  la  Lista  de Verificación de\nInfraestructura y equipo', italics: true }, { style: 'header', text: 'Código: TecNM-AD-PO-001-01', italics: true }],
              ['', { rowSpan: 2, style: 'header', text: 'Referencia a la Norma ISO 9001:2015 6.1, 7.1, 7.2, 7.4, 7.5.1, 8.1\nReferencia a la Norma ISO 14001:2015 4.1, 6.1, 8.1, 8.2' }, { style: 'header', text: 'Revisión: 0' }],
              ['', '', 'Página 1 de 2'],
            ]
          }
        },


        {
          style: 'subheader',
          table: {
            widths: [250, 250], heights: [0, 0],
            body: [
              [{ text: 'Jefe(a) del departamento de  ', alignment: 'left', fontSize: 11 }, { text: this.list[0].depto_responsable, fontSize: 11 }],
              [{ text: 'Jefe(a) del área verificada ', alignment: 'left', fontSize: 11, }, { text: this.list[0].area_verificada, fontSize: 11 }]
            ]
          }
        },


        {
          style: 'subheader',
          text: [
            { text: 'FECHA: ', alignment: 'right', fontSize: 11, },
            { text: this.list[0].fecha_realizada, fontSize: 11, decoration: 'underline' }

          ]
        },


      this.createTable(this.list),
        { text: 'REALIZÓ:', style: 'subheader', bold: true },
        {
          style: 'subheader',
          table: {
            widths: [250, 250], heights: [0, 0],
            body: [
              [{ text: 'Depto. de Recursos Materiales y Servicios y/o\nMantenimiento de Equipo  ', alignment: 'left', fontSize: 11 }, { text: this.list[0].nombre_rec, fontSize: 11 }],
              [{ text: 'Jefe(a) del Área Verificada ', alignment: 'left', fontSize: 11, }, { text: this.list[0].nombre_area, fontSize: 11 }]
            ]
          }
        },
      ],
      styles: {
        header: {
          fontSize: 10,
          bold: true,
        },
        subheader: {
          margin: [0, 15, 0, 0]
        },


      }
    }
    this.pdfObj = pdfMake.createPdf(docDefinition);
    this.pdfObj.open();
    this.listas();
  }, err => console.error(err));
  }

}
