import getProjectsByUser from "@Services/projects/getProjectsByUser.service";

const getProjectsByUserAdapter = async (userUUID: string) => {
  const firebaseResponse = await getProjectsByUser(userUUID);

  return firebaseResponse;
};

export default getProjectsByUserAdapter;
