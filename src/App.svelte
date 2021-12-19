<script>
  import FeedbackList from './components/FeedbackList.svelte';
  let feedback = [
    {
      id: 1,
      rating: 10,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id dapibus augue, scelerisque sodales dui. Quisque sodales facilisis fringilla. Quisque sed placerat urna. Donec id magna in dolor cursus tristique a vel massa. Fusce gravida, urna sit amet sollicitudin sodales, magna odio hendrerit nisi, vel blandit felis nulla non quam. Nam eget hendrerit quam. Aenean dictum arcu ac egestas venenatis. Proin mollis nibh lectus, nec tristique dolor laoreet efficitur. Maecenas vitae vehicula eros. Nulla accumsan, mauris et consequat fringilla, diam felis tristique dui, vel dapibus mauris velit eu ligula. Donec at vestibulum lorem. Phasellus et vestibulum leo. Fusce rhoncus ultrices justo eu fringilla. Nulla pretium odio vel leo porttitor tempus. Nullam rutrum aliquam mauris a tempor. Duis pulvinar augue sapien, ultricies gravida leo feugiat eu.',
    },
    {
      id: 2,
      rating: 9,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id dapibus augue, scelerisque sodales dui. Quisque sodales facilisis fringilla. Quisque sed placerat urna. Donec id magna in dolor cursus tristique a vel massa. Fusce gravida, urna sit amet sollicitudin sodales, magna odio hendrerit nisi, vel blandit felis nulla non quam. Nam eget hendrerit quam. Aenean dictum arcu ac egestas venenatis. Proin mollis nibh lectus, nec tristique dolor laoreet efficitur. Maecenas vitae vehicula eros. Nulla accumsan, mauris et consequat fringilla, diam felis tristique dui, vel dapibus mauris velit eu ligula. Donec at vestibulum lorem. Phasellus et vestibulum leo. Fusce rhoncus ultrices justo eu fringilla. Nulla pretium odio vel leo porttitor tempus. Nullam rutrum aliquam mauris a tempor. Duis pulvinar augue sapien, ultricies gravida leo feugiat eu.',
    },
    {
      id: 3,
      rating: 8,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id dapibus augue, scelerisque sodales dui. Quisque sodales facilisis fringilla. Quisque sed placerat urna. Donec id magna in dolor cursus tristique a vel massa. Fusce gravida, urna sit amet sollicitudin sodales, magna odio hendrerit nisi, vel blandit felis nulla non quam. Nam eget hendrerit quam. Aenean dictum arcu ac egestas venenatis. Proin mollis nibh lectus, nec tristique dolor laoreet efficitur. Maecenas vitae vehicula eros. Nulla accumsan, mauris et consequat fringilla, diam felis tristique dui, vel dapibus mauris velit eu ligula. Donec at vestibulum lorem. Phasellus et vestibulum leo. Fusce rhoncus ultrices justo eu fringilla. Nulla pretium odio vel leo porttitor tempus. Nullam rutrum aliquam mauris a tempor. Duis pulvinar augue sapien, ultricies gravida leo feugiat eu.',
    },
  ];
</script>

<main>
  <FeedbackList {feedback} />
</main>

<style>
</style>
