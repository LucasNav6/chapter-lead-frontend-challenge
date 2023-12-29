// import {IApiResponse} from "@Models/interfaces/api";

import getProjectsByUser from "@Services/projects/getProjectsByUser.service";
// import {ProjectItem} from "src/data";

const getProjectsByUserAdapter = async (userUUID: string) => {
  const firebaseResponse = await getProjectsByUser(userUUID);

  return firebaseResponse;
};

export default getProjectsByUserAdapter;
