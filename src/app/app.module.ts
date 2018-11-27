import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListarticlesComponent } from "./components/listarticles/listarticles.component";
import { ArticleFormComponent } from "./components/article-form/article-form.component";
import { ArticleService } from "./shared_service/article.service";
import { HeaderComponent } from "./components/header/header.component";

const appRoutes: Routes = [
  { path: "", component: ListarticlesComponent },
  { path: "op", component: ArticleFormComponent }

];

//decorateur de module
@NgModule({
  declarations: [
    AppComponent,
    ListarticlesComponent,
    ArticleFormComponent,
    HeaderComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
