export interface agregaryeditarEmpleado {
    //Tabla empleado
    id_empleado?: number;
    id_direccion?: number;
    id_genero?: number;
    id_estado_civil?: number;
    primer_nombre?: string;
    segundo_nombre?: string;
    primer_apellido?: string;
    segundo_apellido?: string;
    DPI?: string;
    fecha_nacimiento?: Date;
    telefono?: number;
    correo_electronico?: string;
    fecha_contratacion?: Date;
    //Tabla direccion
    id_municipio?: number;
    calle?: string;
    avenida?: string;
    zona_barrio?: string;
    residencial_colonia?: string;
    numero_vivienda?: string;
    indicacion_extra?: string;
    //Tabla municipio
    id_departamento?: number;
    nombre_municipio?: string;
    //Tabla departamento
    nombre_departamento?: string;
    //Tabla genero
    genero?: string;
    //Tabla estado civil
    nombre_estado_civil?: string;
  }