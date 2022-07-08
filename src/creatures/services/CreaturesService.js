class CreaturesService {
  constructor() {}

  url = 'https://eldenring.fanapis.com/api/creatures';

  getAllCreatures = async () => {
    try {
      const response = await fetch(this.url);
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.log(error);
    }
  };

  getCreatureById = async (id) => {
    try {
      const response = await fetch(`${this.url}/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

export default CreaturesService;
