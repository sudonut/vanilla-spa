import Home from  "./views/Home.js";

const navigateTo = url => {
  history.pushState(null, null, url);
  router();
}

const router = async () => {
  const routes = [
    {path: "/", view: Home },
    // {path: "/posts", view: () => console.log("Viewing Posts.") },
    // {path: "/settings", view: () => console.log("Viewing Settings.") },
  ];

  // Test each route for a match
  const potentialMatches = routes.map(route => {
    return {
      route: route,
      isMatch: location.pathname === route.path
    };
  });

  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true
    };
  };

  const view = new match.route.view();

  document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

if (document.readyState !== 'loading') {
  onReady();
} else {
  document.addEventListener("DOMContentLoaded", onReady);
};

function onReady() {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    };
  });
  router();
};