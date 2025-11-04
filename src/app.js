import products from "./products.json" // доступ до данних
import auto from "./auto.json"

import template from "./products-template.hbs" // доступ до шаблону
import autoTemplate from "./auto-template.hbs"

const getList = document.querySelector(".js-list")
getList.innerHTML = template({products})

const getAuto = document.querySelector(".cars")
getAuto.insertAdjacentHTML("beforeend", autoTemplate({auto}))

//=============================================================

