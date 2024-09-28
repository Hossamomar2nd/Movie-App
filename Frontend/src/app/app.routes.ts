import { Routes } from '@angular/router';
import { SeriesesComponent } from './components/movies/serieses.component';
import { SeriesDetailsComponent } from './components/moviesDetials/series-details.component';

export const routes: Routes = [
  { path: "", component: SeriesesComponent },
  { path: "serieses", component: SeriesesComponent },
  { path: "series-details/:id", component: SeriesDetailsComponent },
  { path: "**", redirectTo: "" }
];
