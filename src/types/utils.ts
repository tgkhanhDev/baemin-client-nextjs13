export type utilsResponse<T> = {
    status: number;
    message: string;
    content: string;
    data: T;
  };