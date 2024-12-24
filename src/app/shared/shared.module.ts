import {NgModule} from '@angular/core';
import {CardComponent} from './card/card.component';

@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent], //allows other modules to access specified components within sharedModule
})
export class SharedModule {}
