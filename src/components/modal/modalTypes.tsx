export interface Measurement {
  id: string;
  weight: string;
  date: string;
}

export interface ModalProps {
  measurement: Measurement;
}
