import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { AuthService } from "../services/auth.service";
import { catchError } from "rxjs/operators";
import { Storage } from "@ionic/storage";
import { ToastController } from "@ionic/angular";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class AuthTokenInterceptor implements HttpInterceptor {
    //jwtHelper = new JwtHelperService();
    constructor(
        private authService: AuthService,
        private readonly storage: Storage,
        private toastCtrl: ToastController,
        private router: Router
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = localStorage.getItem('token');

        let request = req;

        if (token) {
            request = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({
                setHeaders: {
                    'content-type': 'application/json'
                }
            });
        }

        request = request.clone({
            headers: request.headers.set('Accept', 'application/json')
        });

        return next.handle(request).pipe(
            catchError((err: HttpErrorResponse) => {

                if (err.status === 401) {
                    this.presentToast('Email y/o contraseña incorrecta !');
                    this.router.navigateByUrl('/login');
                }
                if (err.status === 401) {
                    this.presentToast('Email y/o contraseña incorrecta !');
                    this.router.navigateByUrl('/login-admin');
                }
            
                return throwError(err);

            })
        );
    }


    async presentToast(msg) {
        const toast = await this.toastCtrl.create({
            message: msg,
            duration: 2000,
            position: 'top'
        });
        toast.present();
    }

}