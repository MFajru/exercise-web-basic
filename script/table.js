function addNewElementWithContent(
  tagElement,
  classElement,
  content,
  parentTag
) {
  const newElement = document.createElement(tagElement);
  newElement.textContent = content;
  for (cls of classElement) {
    newElement.classList.add(cls);
  }
  parentTag.appendChild(newElement);
}

function submit() {
  let formElements = document.forms["contactForm"];
  const inputId = ["username", "email", "message"];
  let newObj = {
    username: "",
    email: "",
    message: "",
  };
  for (id of inputId) {
    const content = formElements.elements[id].value;
    newObj[id] = content;
  }

  const localDataJson = localStorage.getItem("data");
  console.log(JSON.parse(localDataJson));
  console.log(localDataJson);
  const existingLocalData = JSON.parse(localDataJson);
  existingLocalData.push(newObj);
  localStorage.setItem("data", JSON.stringify(existingLocalData));
  console.log(existingLocalData);
}

function deleteData(id) {
  const arrLocalDataJson = localStorage.getItem("data");
  let arrLocalData = JSON.parse(arrLocalDataJson);
  arrLocalData.splice(id, 1);
  localStorage.setItem("data", JSON.stringify(arrLocalData));
  location.reload();
}

function getDataTable() {
  const arrLocalDataJson = localStorage.getItem("data");
  if (!arrLocalDataJson) {
    localStorage.setItem("data", JSON.stringify([]));
    return;
  }

  let arrLocalData = JSON.parse(arrLocalDataJson);
  const inputId = ["username", "email", "message"];
  for (let index in arrLocalData) {
    const newTr = document.createElement("tr");
    newTr.classList.add("border-b", "border-gray-50");
    const tableBody = document.getElementById("tableBody");
    const idx = tableBody.childElementCount + 1;
    newTr.setAttribute("id", "data" + idx);
    addNewElementWithContent("td", ["py-4"], idx + ".", newTr);
    for (let id of inputId) {
      const content = arrLocalData[index][id];
      if (id === "username") {
        addNewElementWithContent(
          "td",
          ["py-4", "sm:pl-4", "lg:pl-7"],
          content,
          newTr
        );
      } else {
        addNewElementWithContent(
          "td",
          ["break-words", "py-4", "sm:pl-5", "lg:pl-8"],
          content,
          newTr
        );
      }
    }
    const buttonTd = document.createElement("td");
    buttonTd.classList.add("py-[0.38rem]", "sm:pl-5", "lg:pl-8");
    buttonTd.innerHTML = `<button class="bg-custom-red py-[0.38rem] w-full text-white rounded-lg lg:px-7" onclick="deleteData(${index})">Delete</button>`;
    newTr.appendChild(buttonTd);
    tableBody.appendChild(newTr);
  }
}

document.getElementById("contactForm").addEventListener("submit", submit);
getDataTable();
