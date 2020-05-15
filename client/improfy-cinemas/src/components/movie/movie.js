import { customElement } from 'aurelia-framework';
import {bindable} from "aurelia-templating";

@customElement('movie')
export class Movie {
  @bindable id;
  @bindable title;
  @bindable description;
  @bindable cinemaId;
}
