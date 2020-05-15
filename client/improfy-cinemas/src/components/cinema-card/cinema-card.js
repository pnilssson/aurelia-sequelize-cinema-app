import { customElement } from 'aurelia-framework';
import { bindable } from "aurelia-templating";

@customElement('cinema-card')
export class CinemaCard {
  @bindable id;
  @bindable title;
  @bindable description;
}
