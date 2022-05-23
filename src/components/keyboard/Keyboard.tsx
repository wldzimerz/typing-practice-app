import React, { memo } from 'react';
import cn from 'classnames';

import s from './style.module.scss';
import { PATHS_ENUM } from 'src/App';

const ENG_LETTERS: string[][] = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?'],
];
const RUS_LETTERS: string[][] = [
  ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
  ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'],
  ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ','],
];
const NUMBERS: string[][] = [
  ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+'],
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+'],
];

type Props = {
  path: string;
  symbol: string;
};

export const Keyboard: React.FC<Props> = memo(({ path, symbol }) => {
  function checkLetter(letter: string, place: string): boolean {
    switch (place) {
      case 'key':
        return letter === symbol || letter.toUpperCase() === symbol;
      case 'shift':
        return /[A-Z]/g.test(letter);
      case 'space':
        return letter === ' ';
      default:
        return false;
    }
  }

  const isEngLang = path === PATHS_ENUM.ENG;

  return (
    <div className={s.keyboard}>
      {isEngLang
        ? NUMBERS[0].map((value, index) => {
            return (
              <div
                key={`${value}-${index}`}
                className={cn(s.key, { [s.active]: checkLetter(value, 'key') })}
              >
                {value}
              </div>
            );
          })
        : NUMBERS[1].map((value, index) => {
            return (
              <div
                key={`${value}-${index}`}
                className={cn(s.key, { [s.active]: checkLetter(value, 'key') })}
              >
                {value}
              </div>
            );
          })}
      <div className={cn(s.key, s.delete)}>Delete</div>
      <div className={cn(s.key, s.tab)}>Tab</div>
      {isEngLang
        ? ENG_LETTERS[0].map((value, index) => {
            return (
              <div
                key={`${value}-${index}`}
                className={cn(s.key, { [s.active]: checkLetter(value, 'key') })}
              >
                {value}
              </div>
            );
          })
        : RUS_LETTERS[0].map((value, index) => {
            return (
              <div
                key={`${value}-${index}`}
                className={cn(s.key, { [s.active]: checkLetter(value, 'key') })}
              >
                {value}
              </div>
            );
          })}
      <div className={cn(s.key, s.backslash, { [s.active]: symbol === '\\' })}>
        \
      </div>
      <div className={cn(s.key, s.capslock)}>CapsLock</div>
      {isEngLang
        ? ENG_LETTERS[1].map((value, index) => {
            return (
              <div
                key={`${value}-${index}`}
                className={cn(s.key, { [s.active]: checkLetter(value, 'key') })}
              >
                {value}
              </div>
            );
          })
        : RUS_LETTERS[1].map((value, index) => {
            return (
              <div
                key={`${value}-${index}`}
                className={cn(s.key, { [s.active]: checkLetter(value, 'key') })}
              >
                {value}
              </div>
            );
          })}
      <div className={cn(s.key, s.return)}>Enter</div>
      <div
        className={cn(s.key, s.leftshift, {
          [s.active]: checkLetter(symbol, 'shift'),
        })}
      >
        Shift
      </div>
      {isEngLang
        ? ENG_LETTERS[2].map((value, index) => {
            return (
              <div
                key={`${value}-${index}`}
                className={cn(s.key, { [s.active]: checkLetter(value, 'key') })}
              >
                {value}
              </div>
            );
          })
        : RUS_LETTERS[2].map((value, index) => {
            return (
              <div
                key={`${value}-${index}`}
                className={cn(s.key, { [s.active]: checkLetter(value, 'key') })}
              >
                {value}
              </div>
            );
          })}

      <div
        className={cn(s.key, s.rightshift, {
          [s.active]: checkLetter(symbol, 'shift'),
        })}
      >
        Shift
      </div>
      <div className={cn(s.key, s.leftctrl)}>ctrl</div>
      <div className={s.key}>Alt</div>
      <div className={cn(s.key, s.command)}>command</div>
      <div
        className={cn(s.key, s.space, {
          [s.active]: checkLetter(symbol, 'space'),
        })}
      >
        Space
      </div>
      <div className={cn(s.key, s.command)}>command</div>
      <div className={s.key}>Alt</div>
      <div className={s.key}>Ctrl</div>
      <div className={s.key}>Fn</div>
    </div>
  );
});
