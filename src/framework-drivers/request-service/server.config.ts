const defaultValue = {
  // eslint-disable-next-line
  host: Boolean(process.env.REACT_APP_SERVER_HOST)
    ? String(process.env.REACT_APP_SERVER_HOST)
    : 'localhost',
  // eslint-disable-next-line
  port: Boolean(process.env.REACT_APP_SERVER_PORT)
    ? Number(process.env.REACT_APP_SERVER_PORT)
    : 5000
};

const data: { host: string; port: number } = {
  host: defaultValue.host,
  port: defaultValue.port
};

export default data;
