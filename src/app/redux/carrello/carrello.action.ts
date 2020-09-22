import { User } from '../../core/model/user.interface';
import { createAction, props } from '@ngrx/store';
import { Prodotto } from 'src/app/core/model/prodotto.interface';

export const initCarrello = createAction('[Carrello] Init carrello', props<{ carrello: Prodotto[] }>());
export const aggiungiProdottoCarrello = createAction('[Carrello] Aggiungi prodotto', props<{ prodotto: Prodotto }>());
export const rimuoviProdotto = createAction('[Carrello] rimuovi prodotto', props<{ id: number }>());
export const updateCarrello=createAction('[updating]carrello',props<{prodotti:Prodotto[]}>());
