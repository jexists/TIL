import { Injectable } from '@angular/core';
import { LANG_METADATA } from './lang-metadata';

@Injectable({
  providedIn: 'root'
})
export class I18nSupportService {

  langCode = 'ko';
  private welcomeMsg;

  constructor() {
    this.welcomeMsg = {
      'ko': '안녕하세요',
      'en': 'Hello',
      'fi': 'Magandang Umaga'
    };
  }

  // getWelcomeMsgByCode(userName: string) {
  //   const helloMsg = this.welcomeMsg[this.langCode];
  //   return `${helloMsg}, ${userName}!`;
  // }

  getWelcomeMsg(userName: string) {
    const langData = LANG_METADATA.find(lang => lang.code === this.langCode);
    return `${langData.msg}, ${userName}!`;
  }
}
