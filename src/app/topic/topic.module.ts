import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TopicComponent } from './topic.component'
import { RouterModule } from '@angular/router'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { Material } from 'src/libs'
import { SharedModule } from '../shared/shared.module'

const routes = [
  {
    path: '',
    component: TopicComponent
  }
]
@NgModule({
  declarations: [TopicComponent],
  imports: [
    CommonModule,
    Material,
    InfiniteScrollModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class TopicModule {}