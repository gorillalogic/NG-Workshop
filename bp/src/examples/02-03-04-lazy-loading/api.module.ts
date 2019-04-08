import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { DataService } from './data.service';

@NgModule({})
export class APIModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: APIModule,
      providers: [
        DataService
      ],
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: APIModule,
  ) {
    if (parentModule) {
      throw new Error('APIModule is already loaded. Import it in the AppModule only');
    }
  }
}
