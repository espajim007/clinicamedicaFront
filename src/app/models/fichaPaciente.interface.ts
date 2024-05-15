export interface fichaPaciente {
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
  }