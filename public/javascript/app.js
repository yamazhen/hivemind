document.addEventListener("DOMContentLoaded", function() {
  const postTypeLinks = document.querySelectorAll(".post-type-group a");
  const searchInput = document.getElementById("search-input");
  const searchClear = document.getElementById("search-clear");
  const urlParams = new URLSearchParams(window.location.search);
  const items = document.querySelectorAll('.setting-item');
  
  items.forEach(item =>
  {
    item.addEventListener("click", function ()
    {
      const selected = document.getElementById("selectedsetting");
      if (selected) 
      {
        selected.removeAttribute("id");
      }
      item.id = "selectedsetting";
      document.querySelectorAll(".settingscontent section").forEach(section =>
        {
          section.classList.add("hidden");
        });
      const targetId = item.getAttribute("data-target");
      document.getElementById(targetId).classList.remove("hidden");
    });
  });
  if (urlParams.get("refresh") === "true")
  {
    window.location.href = "/";
  }
  if (urlParams.get("hiveCreated") === "true")
  {
    alert("Hive created");
    window.location.replace(window.location.pathname);
  }
  if (urlParams.get("userCreated") === "true")
  {
    alert("User created");
    window.location.replace(window.location.pathname);
  }
  if (urlParams.get("postCreated") === "true")
  {
    alert("Post created");
    window.location.replace(window.location.pathname);
  }

  // exclude viewbtn
  postTypeLinks.forEach(link => {
    if (link.id === "viewbtn") return;
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const activeLink = document.querySelector(".post-type-group a#active");
      if (activeLink) {
        activeLink.removeAttribute("id");
      }
      link.setAttribute("id", "active");
    });
  });

  searchInput.addEventListener("input", function()
    {
      if (searchInput.value) {
        searchClear.style.visibility = "visible";
      }
      else
      {
        searchClear.style.visibility = "hidden";
      }
    });

  searchClear.addEventListener("click", function()
    {
      searchInput.value = "";
      searchClear.style.visibility = "hidden";
      searchInput.focus();
    });
  //popup open buttons
  const userLoggedIn = document.getElementById("logoutbtn") !== null;
  if (!userLoggedIn)
  {
    document.getElementById("loginbtn").addEventListener("click", function() {
      document.getElementById("login").classList.remove("hidden");
    });
  }
  else
  {
    document.getElementById("logoutbtn").addEventListener("click", function() {
      document.cookie = "token=; path=/;"; 
      window.location.href = "/";
    });
  }
  document.body.addEventListener("click", function(event) 
    {
      switch(event.target.id)
      {
        case "signup":
          document.getElementById("login").classList.add("hidden");
          document.getElementById("register").classList.remove("hidden");
          break;
        case "createforumbtn":
          document.getElementById("createforum").classList.remove("hidden");
          break;
        case "createpostbtn":
          document.getElementById("createpost").classList.remove("hidden");
          break;
        case "search-icon":
          document.getElementById("search-input").focus();
          break;
        case "loginclose":
          document.getElementById("login").classList.add("hidden");
          break;
        case "registerclose":
          document.getElementById("register").classList.add("hidden");
          break;
        case "forumboxclose":
          document.getElementById("createforum").classList.add("hidden");
          break;
        case "postboxclose":
          document.getElementById("createpost").classList.add("hidden");
          break;
      }
    })
});
