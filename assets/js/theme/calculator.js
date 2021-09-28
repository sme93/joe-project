import PageManager from "./page-manager";
import csv from "../../content/example.csv";

export default class Calculator extends PageManager {
  onReady() {
    const materialTab = document.querySelector("#chem-to-material");
    const materialViewSection = document.querySelector("#material-view");
    console.log("materialTab: ", materialTab);
    console.log("csv: ", csv);
    console.log("materialViewSection: ", materialViewSection);
  }
}
