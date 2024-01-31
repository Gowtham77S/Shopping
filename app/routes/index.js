import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    return this.store.findAll('product').then((data)=>{
      return data;
    }).catch((error)=>{
      console.log(error);
      return {
                serverError:true,
                errorMessage:error.message
      }
      // this.controllerFor("index").set("serverError",true);
      // this.serverError = true;
      // throw neinw Error('Oh, no! Something bad happened!');
      // return e;
    })
  }
}
