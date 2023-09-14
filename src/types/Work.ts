export interface Work {
  id: number;
  logo: string;
  jobTitle: string;
  instance: string;
  instanceLink: string;
  address: string;
  date: string;
}

export interface WorkApiResponse {
  status: string;
  results: number;
  works: Work[];
}
