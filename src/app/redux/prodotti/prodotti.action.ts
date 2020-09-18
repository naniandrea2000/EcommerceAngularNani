import {createAction, props} from '@ngrx/store';
import {Prodotto} from '../../core/model/prodotto.interface';

export const initProdotti = createAction('[Prodotti] init Prodotti',  props<{prodotti: Prodotto[]}>());
export const updateProdotti = createAction('[Prodotti] Effect - Update prodotti' );
export const retrieveAllProdotti = createAction('[Prodotti] Effect - retrive all prodotti');
