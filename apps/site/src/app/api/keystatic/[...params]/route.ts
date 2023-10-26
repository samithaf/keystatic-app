import { makeRouteHandler } from '@keystatic/next/route-handler';
import keystaticConfig from "../../../keystatic/keystatic.config";


export const { POST, GET } = makeRouteHandler({
  config: keystaticConfig,
});
