import routes from "./routes";

export function createRouter() {
  async function load() {
    const app = document.querySelector("#app");
    app.innerHTML = "";

    const path = location.hash.slice(1);
    const route = routes.find((route) => route.path === path);
    if (route) {
      const module = await route.component(app);
      module.default(app);
    } else {
      //   window.location.hash = "#/demo1";
      app.innerHTML = `<ul>
        ${routes
          .map((route) => `<li><a href="#${route.path}">${route.path}</a></li>`)
          .join("")}
      </ul>`;
    }
  }

  window.addEventListener("hashchange", load);

  load();
}
