export interface Education {
  id: number;
  instance: string;
  address: string;
  date: string;
}

export interface EducationApiResponse {
  status: string;
  results: number;
  educations: Education[];
}
