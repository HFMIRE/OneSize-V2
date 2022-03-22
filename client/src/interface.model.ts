export interface ValuesProps {
  name: string;
  heightm: number;
  heightft: number;
  heightinch: number;
  weightkg: number;
  weightlbs: number;
  brand: string;
  size: number;
  plussize: number;
}

export interface UserFormDataProp {
  userFormData: ValuesProps;
}

export interface SampleSizingProps {
  Size: number;
  Version: string;
  Brand: string;
  Bust: number;
  Waist: number;
  Hips: number;
  LetterSize?: string;
}
