import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'danotes-4cf3c',
          appId: '1:796880768915:web:24806de0eeb9541a186266',
          storageBucket: 'danotes-4cf3c.appspot.com',
          apiKey: 'AIzaSyCqxSkxZWkEIJBolvQuIuOtnROKSL-hhrY',
          authDomain: 'danotes-4cf3c.firebaseapp.com',
          messagingSenderId: '796880768915',
          measurementId: 'G-4T2WGLY7SP',
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideDatabase(() => getDatabase())),
  ],
};
