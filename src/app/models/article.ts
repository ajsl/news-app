export interface IGardianResponse {
  response: {
    currentPage: number;
    orderBy: string;
    pageSize: number;
    pages: number;
    results: IArticle[];
    startIndex: number;
    status: string;
    total: number;
  };
}

export interface IArticle {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: Date;
  webTitle: string;
  webUrl: string;
  apiUtrl: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
}
