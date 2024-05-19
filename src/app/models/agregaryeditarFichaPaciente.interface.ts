export interface agregaryeditarFichaPAciente {
    //Tabla ficha_Paciente
    id_ficha_paciente?: number;
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
    DPI?: string;
    fecha_nacimiento?: Date;
    telefono?: number;
    correo_electronico?: string;
    NIT?: string;
    observaciones?: string;
    //Tabla aseguradora
    nombre_aseguradora?: string;
    copago?: number;
    telefono_aseguradora?: number;
    Correo_aseguradora?: string;
    //Tabla contacto_emergencia
    id_relacion_paciente?: number;
    primer_nombre_contacoe?: string;
    segundo_nombre_contactoe?: string;
    primer_apellido_contactoe?: string;
    segundo_apellido_contactoe?: string;
    telefono_contactoe?: number;
    //Tabla relacion
    relacion?: string;
    //Tabla genero de contacto emergencia
    genero_contactoe?: string;
    //Tabla direccion de ficha paciente
    id_municipio?: number;
    calle?: string;
    avenida?: string;
    zona_barrio?: string;
    residencial_colonia?: string;
    numero_vivienda?: string;
    indicacion_extra?: string;
    //Tabla municipio
    id_departamento?: number;
    nombre_municpio?: string;
    //Tabla departamento
    nombre_departamento?: string;
    //Tabla tipo de sangre
    Nombre_tipo_sangre?: string;
    //Tabla ocupacion
    nombre_ocupacion?: string;
    //Tabla genero paciente
    genero_paciente?: string;
    //Tabla estado_civil
    nombre_estado_civil?: string;
    }