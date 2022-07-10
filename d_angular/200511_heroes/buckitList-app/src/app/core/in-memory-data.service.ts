import { InMemoryDbService } from 'angular-in-memory-web-api';
import { BuckitList } from './buckitlist';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const buckitLists = [
      { id: 11, name: '121212121' },
      { id: 12, name: '232323232' },
      { id: 13, name: '454545454' },
      { id: 14, name: '565656565' },
      { id: 15, name: '787878787' },
      { id: 16, name: '909090909' },
      { id: 17, name: '101010101' },
      { id: 18, name: '434343424' },
      { id: 19, name: '534523452' },
      { id: 20, name: '634343432' },
      { id: 21, name: '111111' },
      { id: 22, name: '222222' },
      { id: 23, name: '333333' },
      { id: 24, name: '444444' },
      { id: 25, name: '555555' },
      { id: 26, name: '666666' },
      { id: 27, name: '777777' },
      { id: 28, name: '888888' },
      { id: 29, name: '999999' },
      { id: 30, name: '000000' },
    ];
    return { buckitLists };
  }

  // 버킷리스트 객체가 항상 id 프로퍼티를 갖도록 getId 메소드를 오버라이드 합니다.
  // 버킷리스트 목록이 비어있다면 이 메소드는 초기값(11)을 반환합니다.
  // 버킷리스트 목록이 비어있지 않으면 버킷리스트 id의 최대값에 1을 더해서 반환합니다.
  genId(buckitLists: BuckitList[]): number {
    return buckitLists.length > 0 ? Math.max(...buckitLists.map(buckitList => buckitList.id)) + 1 : 11;
  }
}