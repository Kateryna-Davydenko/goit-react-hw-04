import axios from "axios";

export const fetchImage = async (page, query) => {
  const { data } = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id: `03UQlLEaKebabKHRu5LKUXMnK8JX5pw3_S57FGtja10`,
      query: `${query}`,
      page: page,
      per_page: 8,
    },
  });
  return data;
};
