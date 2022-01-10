import { generateSlug, RandomWordOptions } from 'random-word-slugs';

const options: RandomWordOptions<15> = {
  format: 'lower', // 'kebab' | 'camel' | 'sentence' | 'lower' | 'title'
  categories: {
    adjective: ['color', 'appearance', 'condition', 'personality', 'quantity', 'shapes', 'size', 'sounds', 'taste', 'time', 'touch'],
    noun: [
      'animals',
      'business',
      'education',
      'family',
      'food',
      'health',
      'media',
      'people',
      'place',
      'profession',
      'religion',
      'science',
      'sports',
      'technology',
      'thing',
      'time',
      'transportation',
    ],
  },
  partsOfSpeech: [
    'adjective',
    'noun',
    'adjective',
    'adjective',
    'adjective',
    'noun',
    'noun',
    'noun',
    'adjective',
    'adjective',
    'noun',
    'adjective',
    'adjective',
    'adjective',
    'noun',
  ],
};

export function getRandomWord(count: number): string[] {
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(generateSlug(1, { ...options }));
  }
  return arr;
}

// function getRandomFormat(): string {
//   let formats = ['kebab', 'camel', 'sentence', 'lower', 'title'];
//   return formats[Math.floor(Math.random() * formats.length)];
// }

// function getRandomParts(length: number): string[] {
//   let arr = [];
//   for (let i = 0; i < length; i++) {
//     let randomNum = Math.floor(Math.random() * 1);
//     arr.push(parts[randomNum]);
//   }
//   return arr;
// }

// const slug = generateSlug(6, {...options, partsOfSpeech: getRandomParts(5)});
