export interface agregaryeditarMedico {
  //Tabla medico
  id_medico?: number;
  colegiado?: number;
  id_empleado?: number;
  especialidad_id_especialidad?: number;// para intermedia catalogo medico
  id_especialidad?: number;
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
  id_direccion?: number;
  id_departamento?: number;
  id_municipio?: number;
  calle?: string;
  avenida?: string;
  zona_barrio?: string;
  residencial_colonia?: string;
  numero_vivienda?: string;
  indicacion_extra?:string;
}