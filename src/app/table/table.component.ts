import { Component } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent {
  row = [
    {
      id: "",
      name: "",
      email: ""
    },
    {
      id: "",
      name: "",
      email: ""
    }
  ];

  addTable() {
    const obj = {
      id: "",
      name: "",
      email: ""
    };
    this.row.push(obj);
  }

  deleteRow(x) {
    var delBtn = confirm(" Do you want to delete ?");
    if (delBtn == true) {
      this.row.splice(x, 1);
    }
  }

}
