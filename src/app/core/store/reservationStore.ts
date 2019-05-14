import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { ObservableStore } from '@codewithdan/observable-store';
import { reservation } from './reservation';
import { MrsServiceService } from '..//utilities/mrs-service.service';


export interface StoreState {
    reservations: reservation[];
    reservation: reservation;
  }


  @Injectable({
    providedIn: 'root'
  })

  export class reservationsStore extends ObservableStore<StoreState> {
    mrsService: MrsServiceService;

    constructor(mrsService: MrsServiceService) { 
        super({ trackStateHistory: true });
  
    const initialState = {
        reservations: [{
            Res_No: '21922619'
        }],
        
        reservation: null

    }

    this.setState(initialState, reservationsStoreActions.InitializeState);
    this.mrsService = mrsService;
  }

  get() {
    const reservations = this.getState().reservations;
    if (reservations) {
        return of(reservations);
    }
    else {
        // call server and get data
        // assume async call here that returns observable
        return of(null);
    }
  }


  }

  export interface StoreState {
    customers: reservation[];
    customer: reservation;
  }

  export enum reservationsStoreActions {
    InitializeState = 'initialize_state',
    GetCustomers = 'get_customers'    
  }