export interface Measurement {
  id: string;
  weight: string;
  date: string;
}

// modal prop types
export interface ModalProps {
  measurement: Measurement;
}
