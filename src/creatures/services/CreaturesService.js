class CreaturesService {
  url = 'https://eldenring.fanapis.com/api/creatures';

  async getAllCreatures() {
    try {
      const response = await fetch(this.url);
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getCreatureById(id) {
    try {
      const response = await fetch(`${this.url}/${id}`);
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default CreaturesService;
