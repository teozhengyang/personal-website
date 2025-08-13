class RandomFactService {
   getRandomFact() {
      return fetch('https://uselessfacts.jsph.pl/random.json?language=en')
         .then((res) => res.json())
         .then((data) => data.text)
         .catch((err) => {
            console.error('Failed to fetch useless fact:', err);
            return 'No fact available';
      });
   }
}

export default new RandomFactService();