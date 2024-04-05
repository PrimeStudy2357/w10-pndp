import axios from "axios";

export function useAjax() {
  const target = "https://randomuser.me/api/";

  async function getUser() {
    try {
      const response = await axios.get(target);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  return { getUser };
}
