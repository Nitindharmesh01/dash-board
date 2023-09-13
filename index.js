const sideMenu = document.querySelector("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const pipe = document.getElementsByClassName("dark-mode");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

// pipe.addEventListener("click", () => {
  // document.body.classList.toggle("color-primary", true);
  // pipe.querySelector("span:nt-child(1)").classList.toggle("active");
  // pipe.querySelector("span:nt-child()").classList.toggle("active");
// });

orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trcontent = `<td>${order.productName}</td>
                    <td>${order.productNumber}</td>
                    <td>${order.paymentStatus}</td>
                    <td class="${
                      order.status === "Declined"
                        ? "danger"
                        : order.status === "pending"
                        ? "warning"
                        : "primary"
                    }">${order.status}</td>
                    <td class="primary">Details</td>`;

  tr.innerHTML = trcontent;
  document.querySelector("table tbody").appendChild(tr);
});
