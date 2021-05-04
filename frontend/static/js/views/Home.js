import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Home");
  }

  async getHtml() {
    return `
    <h1>Welcome to the Home page</h1>
    <p>There isn't much here yet though...</p>
    <a href="/posts" class="nav-link" data-link>Recent Posts</a>
    `;
  }
}