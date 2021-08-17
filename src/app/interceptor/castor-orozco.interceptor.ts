import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class CastorOrozcoInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request', next.handle(request));
    return next.handle(request).pipe(
      tap((event) => {
        console.log({ [request.url]: { event } });
        if (event.type === HttpEventType.Response) {
          for(let i = 0; i < 3; i++){
            console.log({ body: event.body });
          }
        }
      }),
      catchError((error) => {
        switch (error.status) {
          default:
            console.dir(error);
            return throwError(error);
        }
      })
    );
  }
}
