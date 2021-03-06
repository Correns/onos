/*
 * Copyright 2018-present Open Networking Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowComponent } from './flow/flow.component';
import { SvgModule } from '../../fw/svg/svg.module';
import { WidgetModule } from '../../fw/widget/widget.module';
import { FlowRoutingModule } from './flow-routing.module';
import { FormsModule } from '@angular/forms';
import { FlowDetailsComponent } from './flowdetails/flowdetails/flowdetails.component';

/**
 * ONOS GUI -- Flow View Module
 */
@NgModule({
    imports: [
        CommonModule,
        SvgModule,
        FlowRoutingModule,
        FormsModule,
        WidgetModule
    ],
    declarations: [
        FlowComponent,
        FlowDetailsComponent
    ]
})
export class FlowModule { }
