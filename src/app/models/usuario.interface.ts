export interface Usuario {
    id_usuario?: number;
    rol: string;
    nombre: string;
    email: string;
    contrasenia?: string;
    estado?:boolean;
  }