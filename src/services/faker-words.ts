import * as fakerRus from 'faker/locale/ru';
import * as fakerEng from 'faker/locale/en';

export function getRandomLocalizedWords(localization: string, number: number): string | undefined {
  if (localization === '/eng' && fakerEng.lorem.words(number)) {
    return fakerEng.random.words(number);
  } else if (localization === '/rus' && fakerRus.lorem.words(number)) {
    return fakerRus.lorem.words(number);
  }
}