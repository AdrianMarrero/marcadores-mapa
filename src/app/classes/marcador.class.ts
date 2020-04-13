export class Marcador {

  public lat: number;
  public lng: number;
  public titulo = 'Sin Título';
  public desc = 'Sin descripción';

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }
}
