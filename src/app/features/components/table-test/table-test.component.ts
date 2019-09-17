import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../services/poke.service';
import { GoTableConfig, GoTableDataSource, GoTablePageConfig } from '@tangoe/goponents';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.scss']
})
export class TableTestComponent implements OnInit {

  isLoading = true;
  tableConfig: GoTableConfig = new GoTableConfig({
    dataMode: GoTableDataSource.server,
    pageConfig: new GoTablePageConfig({
      pageSizes: [5, 10, 25],
      perPage: 5
    }),
    sortable: false,
    tableData: [],
    totalCount: 0
  });

  constructor(private pokeService: PokeService) { }

  ngOnInit() {
    this.getPokemons(this.tableConfig);
  }

  handleTableChange(currentTableConfig: GoTableConfig): void {
    // this.isLoading = true;
    this.getPokemons(currentTableConfig);
  }

  private getPokemons(params: GoTableConfig): void {
    this.pokeService.get(params).subscribe(results => {

      this.getDetails(results).subscribe(pokeResults => {

        params.totalCount = 150;
        params.tableData = pokeResults;

        this.tableConfig = params;
        this.isLoading = false;
      });
    });
  }

  private getDetails(formattedData: any): Observable<any> {
    const requests = [];

    formattedData.results.forEach(i => {
      requests.push(this.pokeService.getByName(i.name));
    });

    return forkJoin(requests);
  }

}
