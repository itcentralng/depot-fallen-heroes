(function () {
  function setList(items) {
    var node = document.getElementById("timeline");
    node.innerHTML = "";
    var values = Array.isArray(items) ? items : [];
    if (!values.length) {
      var li = document.createElement("li");
      li.textContent = "Timeline entries pending";
      node.appendChild(li);
      return;
    }
    values.forEach(function (value) {
      var li = document.createElement("li");
      li.textContent = value;
      node.appendChild(li);
    });
  }

  function setGallery(items) {
    var node = document.getElementById("gallery");
    node.innerHTML = "";
    var values = Array.isArray(items) ? items : [];
    if (!values.length) {
      var empty = document.createElement("div");
      empty.className = "tile";
      empty.textContent = "Gallery items pending";
      node.appendChild(empty);
      return;
    }
    values.forEach(function (value) {
      var tile = document.createElement("div");
      tile.className = "tile";
      tile.textContent = value;
      node.appendChild(tile);
    });
  }

  fetch("data.json")
    .then(function (res) { return res.json(); })
    .then(function (data) {
      document.getElementById("note").textContent = data.note || "Pending memorial note";
      setList(data.timeline);
      setGallery(data.gallery);
    })
    .catch(function () {
      setList([]);
      setGallery([]);
    });
})();
