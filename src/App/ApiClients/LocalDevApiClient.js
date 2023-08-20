//obsługa łączenia z serwerem

export class LocalDevApiClient {
  #baseUrl = '';
  #headers = { 'Content-Type': 'application/json' };

  constructior({ baseUrl, headers }) {
    if (!baseUrl) console.error('Nie podano base URL');
    this.#baseUrl = baseUrl;
    if (headers) this.#headers = { ...this.#headers, ...headers };
  }

  async getAllToDos() {
    const requestPass = this.#baseUrl + 'api/todo/';
    try {
      const response = await fetch(requestPass);
      if (!response.ok) throw new Error(response.status);
      return response.json();
    } catch (error) {
      return Promise.reject(error);
    }
  }
  getToDo(id) {}
  deleteToDo(id) {}
  markAsDone(id) {}
  addToDo(todo) {}
  updateToDo(id, todo) {}
}
