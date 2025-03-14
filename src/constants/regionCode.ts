export const REGION_CODE = [
  { code: 11, name: '서울' },
  { code: 21, name: '부산' },
  { code: 22, name: '대구' },
  { code: 23, name: '인천' },
  { code: 24, name: '광주' },
  { code: 25, name: '대전' },
  { code: 26, name: '울산' },
  { code: 29, name: '세종' },
  { code: 31, name: '경기' },
  { code: 32, name: '강원' },
  { code: 33, name: '충북' },
  { code: 34, name: '충남' },
  { code: 35, name: '전북' },
  { code: 36, name: '전남' },
  { code: 37, name: '경북' },
  { code: 38, name: '경남' },
  { code: 39, name: '제주' },
] as const

export type RegionCodeType = (typeof REGION_CODE[number])['code'];
export type RegionNameType = (typeof REGION_CODE[number])['name'];
