import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { newsRoutes } from '../libs/news/news.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(newsRoutes), provideRouter(routes)]
};
