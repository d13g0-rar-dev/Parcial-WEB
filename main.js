var iter = 0;

var group1;

function addRows() {
  iter += 1;
  group1 = document.getElementById("gust0").value;
  const tbody = document.querySelector("tbody");
  tbody.innerHTML +=
    '<tr>\
                            <th scope="row">' +
    group1 +
    '\
                            <td>\
                                0\
                            </td>\
                            <td href="#" onclick="editRows()">\
                                <div id="edit' +
    iter +
    '">\
                                    <a href="#">\
                                        Editar\
                                    </a>\
                                </div>\
                            </td>\
                      </tr>';

  console.log(tbody);
}

function editRows() {
  alert("Please doble click to edit");

  document.querySelectorAll("a").forEach((cell) => {
    cell.addEventListener("click", (evt) => {
      console.log("The element that was clicked was ", evt.target);

      var editBtun = evt.target;
      var editTr = editBtun.parentNode.parentNode.parentNode;

      console.log(editTr);

      editTr.innerHTML =
        '<th scope="row">\
                                 <input class="form" id="gusto" value="' +
        group1 +
        '">\
                                </input>\
                            </th>\
                            <td>\
                                <input class="form" id="porcent" value="0">\
                                </input>\
                            </td>\
                            <td>\
                                <div>\
                                        Editando\
                                </div>\
                            </td>';

      var divBut = document.getElementById("finalButton");

      divBut.innerHTML =
        '<button id="cancelar" type="button" onclick="cancelFun()">Cancelar</button><button id="aceptar" type="button" onclick="acceptFun()">Aceptar</button>';
    });
  });
}

function acceptFun() {
  window.location.href = "index2.html";
}

function cancelFun() {
  location.reload();
}
