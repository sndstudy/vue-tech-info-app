export interface QueryParams {
  params: {
    page: string,
    perPage: string,
    query: string,
  };
}

export const paramsJava: QueryParams = {
  params:
    {
      page: '1',
      perPage: '20',
      query: 'Java',
    },
};

export const paramsJavaScript: QueryParams = {
  params:
    {
      page: '1',
      perPage: '20',
      query: 'JavaScript',
    },
};

export const paramsPython: QueryParams = {
  params:
    {
      page: '1',
      perPage: '20',
      query: 'Python',
    },
};

export const paramsVue: QueryParams = {
  params:
    {
      page: '1',
      perPage: '20',
      query: 'vue.js',
    },
};
