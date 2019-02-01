import { Component, OnInit } from '@angular/core';
import { ExportsService } from './core/exports.service';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap, filter } from 'rxjs/operators';
import { Exports } from './core/models/export';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  local: string = null;
  dateFrom: Date = null;
  dateTo: Date = null;

  buttonClick$ = new Subject();

  exports$ = new Observable<Exports[]>();
  displayedColumns: string[] = ['name', 'date', 'time', 'userName', 'localName'];

  constructor(private exportsService: ExportsService) { }

  ngOnInit(): void {
    this.exports$ = this.buttonClick$.pipe(
      switchMap(() => this.exportsService.getAll()), // tutaj możnaby podać na backend query do filtra (tak to nie jest to zbyt sensowne)
      map(res => this.filterExports(res)),
    );
  }

  filterExports(exports: Exports[]): Exports[] {
    return exports.filter(e => {

      if (this.local != null && !e.localName.toLowerCase().includes(this.local)) {
        return false;
      }

      if (this.dateFrom != null && new Date(e.date) < this.dateFrom) {
        return false;
      }

      if (this.dateTo != null && new Date(e.date) > this.dateTo) {
        return false;
      }

      return true;
    });
  }

}
