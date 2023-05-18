import { Component } from "@angular/core";
import { GridOptions, ColDef } from "ag-grid-community";
import { fetchData } from "./api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "AgGrid Example";

  private getColumnDefs(): ColDef[] {
    return [
      {
        headerName: "ID",
        field: "id",
        width: 70
      },
      {
        headerName: "Athlete",
        field: "athlete",
        width: 150,
        editable: true
      },
      {
        headerName: "Age",
        field: "age",
        width: 90,
        minWidth: 50,
        maxWidth: 100,
        editable: true
      },
      {
        headerName: "Country",
        field: "country",
        width: 120
      },
      {
        headerName: "Year",
        field: "year",
        width: 90
      },
      {
        headerName: "Date",
        field: "date",
        width: 110
      },
      {
        headerName: "Sport",
        field: "sport",
        width: 110
      },
      {
        headerName: "Gold",
        field: "gold",
        width: 100
      },
      {
        headerName: "Silver",
        field: "silver",
        width: 100
      },
      {
        headerName: "Bronze",
        field: "bronze",
        width: 100
      },
      {
        headerName: "Total",
        field: "total",
        width: 100
      }
    ];
  }

  gridOptions: GridOptions;
  rowData: any;

  constructor() {
    this.gridOptions = {
      columnDefs: this.getColumnDefs(),
      rowData: []
    };
  }

  ngOnInit() {
    fetchData().then((data) => (this.gridOptions.rowData = data));
  }
}
