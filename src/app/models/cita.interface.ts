import { Time } from "@angular/common";

export interface cita {
    id_cita?: number;
    expediente_id_expediente?: number;
    medico_id_medico?: number;
    id_estado_cita?: number;
    fecha?: string;
    hora?: string;
    id_empleado?: number;
  }