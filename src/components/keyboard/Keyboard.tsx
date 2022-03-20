import s from './style.module.scss';
import cn from 'classnames';

const engLetters = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?'],
];
const rusLetters = [
  ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
  ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'],
  ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ','],
];
const numbers = [
  ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+'],
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+'],
];

type Props = {
  path: string;
  symbol: string;
};

export const Keyboard = ({ path, symbol }: Props) => {
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

  return (
    <div className={s.keyboard}>
      {path === '/eng'
        ? numbers[0].map((value, index) => {
            return (
              <div key={index} className={cn(s.key, { [s.active]: checkLetter(value, 'key') })}>
                {value}
              </div>
            );
          })
        : numbers[1].map((value, index) => {
            return (
              <div key={index} className={cn(s.key, { [s.active]: checkLetter(value, 'key') })}>
                {value}
              </div>
            );
          })}
      <div className={cn(s.key, s.delete)}>Delete</div>
      <div className={cn(s.key, s.tab)}>Tab</div>
      {path === '/eng'
        ? engLetters[0].map((value, index) => {
            return (
              <div key={index} className={cn(s.key, { [s.active]: checkLetter(value, 'key') })}>
                {value}
              </div>
            );
          })
        : rusLetters[0].map((value, index) => {
            return (
              <div key={index} className={cn(s.key, { [s.active]: checkLetter(value, 'key') })}>
                {value}
              </div>
            );
          })}
      <div className={cn(s.key, s.backslash, { [s.active]: symbol === '\\' })}>\</div>
      <div className={cn(s.key, s.capslock)}>CapsLock</div>
      {path === '/eng'
        ? engLetters[1].map((value, index) => {
            return (
              <div key={index} className={cn(s.key, { [s.active]: checkLetter(value, 'key') })}>
                {value}
              </div>
            );
          })
        : rusLetters[1].map((value, index) => {
            return (
              <div key={index} className={cn(s.key, { [s.active]: checkLetter(value, 'key') })}>
                {value}
              </div>
            );
          })}
      <div className={cn(s.key, s.return)}>Enter</div>
      <div className={cn(s.key, s.leftshift, { [s.active]: checkLetter(symbol, 'shift') })}>Shift</div>
      {path === '/eng'
        ? engLetters[2].map((value, index) => {
            return (
              <div key={index} className={cn(s.key, { [s.active]: checkLetter(value, 'key') })}>
                {value}
              </div>
            );
          })
        : rusLetters[2].map((value, index) => {
            return (
              <div key={index} className={cn(s.key, { [s.active]: checkLetter(value, 'key') })}>
                {value}
              </div>
            );
          })}

      <div className={cn(s.key, s.rightshift, { [s.active]: checkLetter(symbol, 'shift') })}>Shift</div>
      <div className={cn(s.key, s.leftctrl)}>ctrl</div>
      <div className={s.key}>Alt</div>
      <div className={cn(s.key, s.command)}>command</div>
      <div className={cn(s.key, s.space, { [s.active]: checkLetter(symbol, 'space') })}>Space</div>
      <div className={cn(s.key, s.command)}>command</div>
      <div className={s.key}>Alt</div>
      <div className={s.key}>Ctrl</div>
      <div className={s.key}>Fn</div>
    </div>
  );
};
