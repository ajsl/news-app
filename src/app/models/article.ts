export interface IGardianResponseSearch {
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

export interface IGuardianResponseSingle {
    response: {
        status: string;
        userTier: string;
        total: number;
        content: IArticle;
    }
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
