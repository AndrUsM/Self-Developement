import data from './server.config';

const config: {
  protocol: string;
  domain: string;
  key: string;
  port: number;
} = {
  protocol: 'http',
  domain: data.host,
  port: data.port,
  key: 'no-key'
};

export const baseUrl: string = `${config.protocol}://${config.domain}:${config.port}/`;
export default config;
