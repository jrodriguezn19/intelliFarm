import { Observable } from 'rxjs';

export interface Camera {
  title: string;
  source: string;
}

export abstract class CamerasData {
  abstract getCamerasData(): Observable<Camera[]>;
}
