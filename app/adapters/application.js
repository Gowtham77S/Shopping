import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  namespace = 'api';

  buildURL(...args) {
    console.log(...args)
    return `${super.buildURL(...args)}.json`;
  }
}
