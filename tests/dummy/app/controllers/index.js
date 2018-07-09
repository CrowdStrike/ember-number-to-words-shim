import Controller from '@ember/controller';
import converter from 'number-to-words';

export default Controller.extend({
  words: converter.toWords(1)
});
