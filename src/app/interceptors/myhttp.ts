import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';


@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
	constructor() { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

	console.log("intercepted request ... ");

	// Clone the request to add the new header.
	const data = JSON.parse(localStorage.getItem('userData'));
        const authReq = req.clone(
            {
                headers: req.headers.set("Authorization", data.token)
            }
        );

        console.log("Sending request with new header now ...");

        //send the newly created request
        return next.handle(authReq)
            .catch((error, caught) => {
                //intercept the respons error and displace it to the console 
                console.log("Error Occurred");
                console.log(error);
                //return the error to the method that called it
                return Observable.throw(error);
            }) as any;
    }
}

/*
// Clone the request to add the new header.
const data = JSON.parse(localStorage.getItem('userData')); 


const authReq = req.clone({ headers: req.headers.set("headerName", "headerValue")
	.set('Authorization', data.token)
	//.set('Content-Type', 'application/json')
});

const headers = new HttpHeaders({
  'Authorization': data.token,
  'Content-Type': 'application/json',
  "headerName":"headerValue"
});*/
/*
const authReq = req.clone({ headers: req.headers.set("headerName", "headerValue")});
headers: req.headers.set('token1', 'asd')
.set('content_type', 'asd')
.set('accept', 'asd')*/