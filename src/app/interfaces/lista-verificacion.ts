export interface ListaVerifcacionI{
    id_lf?: Number;
    nombre_lf?: string;
    depto_responsable?: string;
    area_verificada?: string;
    fecha_realizada?: string;
    nombre_rec?: string;
    firma_rec?: string;
    nombre_area?: string;
    firma_area?: string;
    estado?: string;
    espacio?: string;
    hallazgo?:string;
    atendido?:string;
    personal_id?: number
}