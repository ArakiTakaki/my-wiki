type API_METHOD = 'GET' | 'POST' | 'PUT' | 'DELETE';

const createGetMethod = (params: object | undefined): string => {
  if (params == null) {
    return '';
  }

  const getParameter = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');

  return `&${getParameter}`;
};

const request = async (
  endpoint: string,
  options: { method: API_METHOD; headers?: object; params?: object }
) => {
  const body = options.method !== 'GET' ? JSON.stringify(options.params) : null;
  const url = options.method !== 'GET' ? endpoint : `${endpoint}${createGetMethod(options.params)}`;

  const res = await fetch(url, {
    method: options.method,
    body,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    }
  });

  return res;
};

export default request;
