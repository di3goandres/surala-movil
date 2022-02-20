// Generated by https://quicktype.io

export interface ConteoTrazabilidadResponse {
    code:               number;
    status:             string;
    ConteoTrazabilidad: ConteoTrazabilidad[];
    metodoConteo:       MetodoConteo[];
    porcentaje:         number;
}

export interface ConteoTrazabilidad {
    id:                   number;
    remision:             string;
    total_ovas_enviadas:  number;
    tiene_reporte_conteo: boolean;
    cantidad_reportada:   number;
    tamanio:              number;
    ovas_ml:              number;

}

export class MetodoConteo {
    id:          number;
    Nombre:      string;
    descripcion: string;
    esOvacon:    boolean;
    esOtro:      boolean;
}