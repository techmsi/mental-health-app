export interface ITherapist {
  id: number;
  name: string;
  image: string;
}

export interface ITherapistImage extends ITherapist {
  lazy: boolean;
  baseUrl: string;
}

export interface ITherapistInfo extends ITherapist {
  specialty?: string;
  email?: string;
}
