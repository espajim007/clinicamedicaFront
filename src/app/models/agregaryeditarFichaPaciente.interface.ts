export interface agregaryeditarFichaPAciente {
    //Tabla ficha_Paciente
    id_expediente?: number;
    paciente_id_paciente?: number;
    aseguradora_id_aseguradora?: number;
    id_contacto_emergencia?: number;
    id_direccion?: number;
    id_tipo_sangre?: number;
    id_ocupacion?: number;
    genero_idgenero?: number;
    id_estado_civil?: number;
    primer_nombre?: string;
    segundo_nombre?: string;
    primer_apellido?: string;
    segundo_apellido?: string;
    identif?: number;
    fecha_nacimiento?: string;
    telefono?: number;
    correo_electronico?: string;
    nit_fac?: string;
    observaciones?: string;
    //Tabla direccion de ficha paciente
    id_municipio?: number;
    calle?: string;
    avenida?: string;
    zona_barrio?: string;
    residencial_colonia?: string;
    numero_vivienda?: string;
    indicacion_extra?: string;
    // tabla contacto
    id_relacion_paciente?: number;
    genero_contacto?: number;
    primer_nombre_contacoe?: string;
    segundo_nombre_contactoe?: string;
    primer_apellido_contactoe?: string;
    segundo_apellido_contactoe?: string;
    telefono_contactoe?: number;
    }