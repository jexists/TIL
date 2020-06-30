import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: '세계여행하기' },
      { id: 12, name: '국내여행 완전정보' },
      { id: 13, name: '유튜브 내 채널 개설하기' },
      { id: 14, name: '내 집 마련' },
      { id: 15, name: '창업해보기' },
      { id: 16, name: '내가 기획한 어플 제작하기' },
      { id: 17, name: '성경 필사하기' },
      { id: 18, name: '명함 100개 다른사람과 교환하기' },
      { id: 19, name: '좋아하는 연예인과 사진찍기' },
      { id: 20, name: '악기 한개 마스터하기' }
    ];
    return {heroes};
  }

  // 히어로 객체가 항상 id 프로퍼티를 갖도록 getId 메소드를 오버라이드 합니다.
  // 히어로 목록이 비어있다면 이 메소드는 초기값(11)을 반환합니다.
  // 히어로 목록이 비어있지 않으면 히어로 id의 최대값에 1을 더해서 반환합니다.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}