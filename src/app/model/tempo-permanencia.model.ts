import { Time } from "@angular/common";

export interface TempoPermanencia {
    posicao_id: number;
    placa_veiculo: string;
    tempo_permanencia: Time;
    dia: Date,
    nome: string;
}

export interface Posicao {
    id: number;
    placaVeiculo: string;
    dataPosicao: Date;
    velocidade: number;
    latitude: Number;
    longitude: Number;
    ignicao: boolean;
}