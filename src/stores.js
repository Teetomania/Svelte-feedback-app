import { writable } from 'svelte/store';

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id dapibus augue, scelerisque sodales dui. Quisque sodales facilisis fringilla. Quisque sed placerat urna. Donec id magna in dolor cursus tristique a vel massa. Fusce gravida, urna sit amet sollicitudin sodales, magna odio hendrerit nisi, vel blandit felis nulla non quam.',
  },
  {
    id: 2,
    rating: 9,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id dapibus augue, scelerisque sodales dui. Quisque sodales facilisis fringilla. Quisque sed placerat urna. Donec id magna in dolor cursus tristique a vel massa. Fusce gravida, urna sit amet sollicitudin sodales, magna odio hendrerit nisi, vel blandit felis nulla non quam.',
  },
  {
    id: 3,
    rating: 8,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id dapibus augue, scelerisque sodales dui. Quisque sodales facilisis fringilla. Quisque sed placerat urna. Donec id magna in dolor cursus tristique a vel massa. Fusce gravida, urna sit amet sollicitudin sodales, magna odio hendrerit nisi, vel blandit felis nulla non quam.',
  },
]);
