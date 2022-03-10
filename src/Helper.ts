import { SampleSize } from "./SampleSize";

let convertSize: any;
export function convertSizetoMeasurement(brand: string, size: number) {
  if (size % 2 === 0) {
    convertSize = SampleSize.filter((sample) => {
      if (sample.Brand === brand && sample.UKSize === size) {
        return sample;
      }
    });
    return convertSize;
  } else {
    console.log("Error wrong size");
  }
}

let filterSize: any;
export function matchingSize(user: any) {
  const { Brand, Bust, Waist, Hips } = user[0];
  console.log("User", user[0]);
  filterSize = SampleSize.filter((sample) => {
    const isDifferentBrand = sample.Brand !== Brand;
    const isSameBust = sample.Bust >= Bust && sample.Bust < Bust + 10;
    const isSameWaist = sample.Waist >= Waist && sample.Waist < Waist + 10;
    const isSameHip = sample.Hips >= Hips && sample.Hips < Hips + 10;
    if (isSameBust && isSameWaist && isSameHip && isDifferentBrand) {
      console.log("sample", sample);
      return sample;
    }
  });
  return filterSize;
}
matchingSize(convertSize);
