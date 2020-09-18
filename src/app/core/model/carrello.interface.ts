import { Prodotto } from './prodotto.interface';

export interface Carrello {
    id: number;
    prodotti: Prodotto[];
}