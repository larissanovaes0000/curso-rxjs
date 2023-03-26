import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservablesComponent } from './componentes/observables/observables.component';
import { ForkjoinComponent } from './componentes/operadores-criacao-juncao/forkjoin/forkjoin.component';
import { AjaxComponent } from './componentes/operadores-criacao/ajax/ajax.component';
import { FromEventComponent } from './componentes/operadores-criacao/from-event/from-event.component';
import { FromComponent } from './componentes/operadores-criacao/from/from.component';
import { IntervalComponent } from './componentes/operadores-criacao/interval/interval.component';
import { OfComponent } from './componentes/operadores-criacao/of/of.component';
import { ThrowErrorComponent } from './componentes/operadores-criacao/throw-error/throw-error.component';
import { TimerComponent } from './componentes/operadores-criacao/timer/timer.component';
import { SubjectComponent } from './componentes/subject/subject.component';
import { ZipComponent } from './componentes/operadores-criacao-juncao/zip/zip.component';
import { MergeConcatComponent } from './componentes/operadores-criacao-juncao/merge-concat/merge-concat.component';
import { MapComponent } from './componentes/operadores-transformacao/map/map.component';
import { MapToComponent } from './componentes/operadores-transformacao/map-to/map-to.component';
import { SwitchMapComponent } from './componentes/operadores-transformacao/switch-map/switch-map.component';
import { PluckComponent } from './componentes/operadores-transformacao/pluck/pluck.component';
import { ToArrayComponent } from './componentes/operadores-transformacao/to-array/to-array.component';
import { FilterComponent } from './componentes/operadores-filtragem/filter/filter.component';
import { TakeComponent } from './componentes/operadores-filtragem/take/take.component';
import { TakeUntilComponent } from './componentes/operadores-filtragem/take-until/take-until.component';
import { TakeWhileComponent } from './componentes/operadores-filtragem/take-while/take-while.component';
import { SkipComponent } from './componentes/operadores-filtragem/skip/skip.component';
import { DebounceTimeComponent } from './componentes/operadores-filtragem/debounce-time/debounce-time.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SwitchAllComponent } from './componentes/operadores-juncao/switch-all/switch-all.component';
import { StartWithComponent } from './componentes/operadores-juncao/start-with/start-with.component';
import { CombineLatestComponent } from './componentes/operadores-juncao/combine-latest/combine-latest.component';
import { WithLatestFromComponent } from './componentes/operadores-juncao/with-latest-from/with-latest-from.component';
import { ShareReplayComponent } from './componentes/operadores-multicasting/share-replay/share-replay.component';
import { ShareComponent } from './componentes/operadores-multicasting/share/share.component';
import { CatchErrorComponent } from './componentes/operadores-tratamento-erros/catch-error/catch-error.component';
import { RetryComponent } from './componentes/operadores-tratamento-erros/retry/retry.component';
import { RetryWhenComponent } from './componentes/operadores-tratamento-erros/retry-when/retry-when.component';
import { TapComponent } from './componentes/operadores-utilitarios/tap/tap.component';
import { DelayComponent } from './componentes/operadores-utilitarios/delay/delay.component';
import { TimeoutComponent } from './componentes/operadores-utilitarios/timeout/timeout.component';
import { EveryComponent } from './componentes/operadores-condicionais/every/every.component';
import { FindComponent } from './componentes/operadores-condicionais/find/find.component';
import { FindIndexComponent } from './componentes/operadores-condicionais/find-index/find-index.component';
import { IsEmptyComponent } from './componentes/operadores-condicionais/is-empty/is-empty.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservablesComponent,
    SubjectComponent,
    FromComponent,
    OfComponent,
    FromEventComponent,
    IntervalComponent,
    TimerComponent,
    ThrowErrorComponent,
    AjaxComponent,
    ForkjoinComponent,
    ZipComponent,
    MergeConcatComponent,
    MapComponent,
    MapToComponent,
    SwitchMapComponent,
    PluckComponent,
    ToArrayComponent,
    FilterComponent,
    TakeComponent,
    TakeUntilComponent,
    TakeWhileComponent,
    SkipComponent,
    DebounceTimeComponent,
    NavbarComponent,
    SwitchAllComponent,
    StartWithComponent,
    CombineLatestComponent,
    WithLatestFromComponent,
    ShareReplayComponent,
    ShareComponent,
    CatchErrorComponent,
    RetryComponent,
    RetryWhenComponent,
    TapComponent,
    DelayComponent,
    TimeoutComponent,
    EveryComponent,
    FindComponent,
    FindIndexComponent,
    IsEmptyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
