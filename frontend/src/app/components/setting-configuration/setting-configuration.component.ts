import { Component, Inject } from '@angular/core';
import { ConfigurationService } from '../../services/configuration.service';
import { StorageType } from '../../models/common-model';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-setting-configuration',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './setting-configuration.component.html',
  styleUrl: './setting-configuration.component.scss',
})
export class SettingConfigurationComponent {
  
  //private configurationService: ConfigurationService = Inject(ConfigurationService);

  //private storageType: StorageType = 'memory';

  
  public get storageType() : StorageType {
    return this.configurationService.storageType;
  }
  
  
  public set storageType(type : StorageType) {
    this.configurationService.storageType = type;
  }
  

  public constructor(
    private configurationService: ConfigurationService
  ) {
  }


}
