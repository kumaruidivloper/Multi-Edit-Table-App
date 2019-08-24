import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

// import { Logger } from '@app/core';
// import { ToastService } from '@app/core';

import { Contact } from '../shared/interface/Cantact';

@Injectable({
    providedIn: 'root'
})

export class ContactService {
    private baseUrl = 'http://localhost:3000/contacts'

    /** 
     * GET: get all contacts from the database 
     */
    getContacts(): Observable<any> {
        // this.logger.log(this.baseUrl);
        return this.http
            .get<Contact[]>(this.baseUrl)
    }



    // Declarative Method Approch below removed code added here
    // $getContacts = this.http.get<Contact[]>(this.baseUrl)
    //     .pipe(
    //         tap(data => console.log('Products: ', JSON.stringify(data))),
    //         // catchError(this.handelError)
    //     );

        constructor(
            private http: HttpClient) {
        }


        private handleError(err: any) {
            // in a real world app, we may send the server to some remote logging infrastructure
            // instead of just logging it to the console
            let errorMessage: string;
            if (err.error instanceof ErrorEvent) {
              // A client-side or network error occurred. Handle it accordingly.
              errorMessage = `An error occurred: ${err.error.message}`;
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong,
              errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
            }
            console.error(err);
            return throwError(errorMessage);
          }
}

