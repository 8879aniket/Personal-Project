"Use strict";

document.addEventListener("DOMContentLoaded", function () {
  //   await fetch("http://localhost:4000/api/getData", (error, response) => {
  //     if (error) return console.log(`Error while getting data ${error}`);
  //     loadHTMLTable(response);
  //   });

  fetch("http://localhost:4000/api/getData")
    .then((response) => response.json())
    .then((data) => {
      loadHTMLTable(data);
    });
});

const registerBtn = document.querySelector("#register-btn");

registerBtn.onclick = function () {
  let firstname = document.querySelector("#firstname-input");
  const FirstName = firstname.value;
  firstname.value = "";
  let lastname = document.querySelector("#lastname-input");
  const LastName = lastname.value;
  lastname.value = "";
  let emailid = document.querySelector("#email-input");
  const EmailID = emailid.value;
  emailid.value = "";
  let password = document.querySelector("#password-input");
  const Password = password.value;
  password.value = "";
  let organizationname = document.querySelector("#organizationname-input");
  const OrganizationName = organizationname.value;
  organizationname.value = "";
  fetch("http://localhost:4000/api/register", {
    headers: {
      "Content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      FirstName: FirstName,
      LastName: LastName,
      EmailID: EmailID,
      Password: Password,
      OrganizationName: OrganizationName,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
  console.log("This IS Registeration");
};

const search = document.querySelector("#search-btn");

search.onclick = function () {
  const searchInput = document.querySelector("#search-input").value;
  fetch("http://localhost:4000/api/FirstName/" + searchInput)
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        fetch("http://localhost:4000/api/LastName/" + searchInput)
          .then((response) => response.json())
          .then((data) => {
            if (data.length === 0) {
              fetch("http://localhost:4000/api/EmailID/" + searchInput)
                .then((response) => response.json())
                .then((data) => {
                  loadHTMLTable(data);
                });
            } else {
              loadHTMLTable(data);
            }
          });
      } else {
        loadHTMLTable(data);
      }
    });
};

function loadHTMLTable(data) {
  const table = document.querySelector("table tbody");
  if (data.length === 0) {
    table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
  }

  let tableHtml = "";
  data.forEach(function ({
    EmployeeID,
    FirstName,
    LastName,
    EmailID,
    OrganizationName,
  }) {
    tableHtml += "<tr>";
    tableHtml += `<td>${EmployeeID}</td>`;
    tableHtml += `<td>${FirstName}</td>`;
    tableHtml += `<td>${LastName}</td>`;
    tableHtml += `<td>${EmailID}</td>`;
    tableHtml += `<td>${OrganizationName}</td>`;
  });
  table.innerHTML = tableHtml;
}
