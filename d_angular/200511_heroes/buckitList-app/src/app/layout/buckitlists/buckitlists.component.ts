import { Component, OnInit, OnDestroy } from '@angular/core';

import { BuckitList } from '../../core/buckitlist';
import { BuckitListService } from '../../core/bucklist.service';

@Component({
  selector: 'app-buckitlists',
  templateUrl: './buckitlists.component.html',
  styleUrls: ['./buckitlists.component.scss']
})
export class BuckitListsComponent implements OnInit, OnDestroy {

  buckitLists: BuckitList[];

  constructor(
    private buckitListService: BuckitListService,
  ) { }

  ngOnInit(): void {
    this.getBuckitLists();
    this.getNavBg();
  }

  ngOnDestroy(): void {
  }

  getNavBg(): void {
    document.querySelector('.nav-buckit').classList.add('act');
    document.querySelector('.nav-home').classList.remove('act');
  }
  getBuckitLists(): void {
    this.buckitListService.getBuckitLists()
      .subscribe(buckitLists => this.buckitLists = buckitLists);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.buckitListService.addBuckitList({ name } as BuckitList)
      .subscribe(buckitList => {
        this.buckitLists.push(buckitList);
      });
  }
  delete(buckitList: BuckitList): void {
    this.buckitLists = this.buckitLists.filter(h => h !== buckitList);
    this.buckitListService.deleteBuckitList(buckitList).subscribe();
  }
}
