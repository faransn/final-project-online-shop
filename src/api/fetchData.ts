const fetchData = async (url: string) => {
  try {
    const data = await fetch(url, {
      method: "GET",
    });
    return data.json();
  } catch (error) {
    return [];
  }
};

export default fetchData;
