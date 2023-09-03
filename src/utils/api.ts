import { UserMapProps, UserProps } from "./props";

export async function fetchInitialData(path: string) {
  try {
    const response = await fetch(path);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function fetchUsers(path: string): Promise<UserMapProps> {
  try {
    const data = await fetchInitialData(path);
    const userMap: UserMapProps = {};
    data.forEach((user: UserProps) => {
      userMap[user.id] = user.username;
    });
    return userMap;
  } catch (err) {
    console.log(err);
    return {};
  }
}
