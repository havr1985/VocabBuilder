export type Word = {
  _id: string;
  en: string;
  ua: string;
  category: string;
  isIrregular?: boolean | undefined;
  owner: string;
  progress: number;
};
export type UserWords = {
  results: Word[];
  totalPages: number;
  page: number;
  perPage: number;
};
export type AddWordReq = {
  category: string;
  en: string;
  ua: string;
  isIrregular?: boolean;
};
export type DelWord = {
    message: string;
    id: string;
}
