export interface EnvioOficI{
    id_e?:number;
    oficio_id_o?:number;
    depto_id_d?:number;
    confirmacion?:number;
}

export interface RespuestaEnvioOficI {
    id_o?:            number;
    numero?:          string;
    nombre_o?:        string;
    fecha?:           Date;
    oficio?:          string;
    asunto?:          string;
    nombre_dirigido?: string;
    depto_dirigido?:  string;
    cuerpo?:          string;
    remitente_depto?: string;
    visto_bueno?:     string;
    estado?:          string;
    personal_id?:     number;
    id_e?:            number;
    oficio_id_o?:     number;
    depto_id_d?:      number;
    confirmacion?:    number;
    id_d?:            number;
    nombred?:         string;
    id_p?:            number;
    rfc?:             string;
    nombre_p?:        string;
    apaterno?:        string;
    amaterno?:        string;
    departamento?:    number;
    domicilio?:       string;
    correo?:          string;
    telefono?:        string;
    password?:        string;
}