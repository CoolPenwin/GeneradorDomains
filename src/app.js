/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#nuevoDom").addEventListener("click", () => {
    let mode = document.querySelector('input[name="mode"]:checked').value;
    let result = DomainGenerator(mode);
    document.querySelector("#Dominio").innerHTML =
      mode === "all" ? result.join("<br>") : result;
  });

  // Generar un dominio aleatorio al cargar la página
  let result = DomainGenerator("random");
  document.querySelector("#Dominio").innerHTML = result;
};

function DomainGenerator(mode) {
  let pre = ["The", "A", "Some", "My", "Your", "Our", "Their"];
  let adj = [
    "Cool",
    "squeeze",
    "awesome",
    "funny",
    "crazy",
    "silly",
    "wacky",
    "bizarre"
  ];
  let suj = [
    "penwin",
    "octopuss",
    "potato",
    "tomato",
    "cow",
    "cat",
    "unicorn",
    "dinosaur",
    "ninja",
    "robot"
  ];
  let dom = [".lol", ".com", ".es", ".lol", ".fun", ".haha", ".wtf"];

  if (mode === "all") {
    let allDomains = [];
    for (let p of pre) {
      for (let a of adj) {
        for (let s of suj) {
          for (let d of dom) {
            allDomains.push(p + a + s + d);
          }
        }
      }
    }
    return allDomains;
  } else {
    let preIndex = Math.floor(Math.random() * pre.length);
    let adjIndex = Math.floor(Math.random() * adj.length);
    let sujIndex = Math.floor(Math.random() * suj.length);
    let domIndex = Math.floor(Math.random() * dom.length);
    return pre[preIndex] + adj[adjIndex] + suj[sujIndex] + dom[domIndex];
  }
}
