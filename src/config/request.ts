import { create } from "apisauce";

import { getLocalData, LOCAL_STORAGE_KEYS } from "./storage";


export const BASE_URL  ="https://api.spacex.land/graphql/"

const apiClient = create({ baseURL: BASE_URL });

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await getLocalData(LOCAL_STORAGE_KEYS.TOKEN);
  if (!authToken) return;
  request.headers["Authorization"] = `Bearer ${authToken}`;
});

export default apiClient;