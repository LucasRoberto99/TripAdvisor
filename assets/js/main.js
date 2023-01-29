document.addEventListener("DOMContentLoaded", () => {
  console.log("content loaded");

  document
    .querySelector("#boutonConnectezVous")
    .addEventListener("click", () => {
      //   console.log(document.querySelector(".form-container"));
      document.querySelector(".form-container").classList.toggle("invisible");
    });

  document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("submit");

    const data = {
      firstname: document.querySelector("#firstname").value,
      lastname: document.querySelector("#lastname").value,
      email: document.querySelector("#email").value,
      message: document.querySelector("#message").value,
    };

    console.log(data);

    // requete vers mon serveur

    const response = await axios.post(
      "https://site--formulaireback--fhx5w78hhgzd.code.run/form",
      data
    );

    console.log(response.data);
  });
});
