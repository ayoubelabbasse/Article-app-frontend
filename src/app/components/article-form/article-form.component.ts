import { Component, OnInit } from "@angular/core";
import { Article } from "../../article";
import { Router } from "@angular/router";
import { ArticleService } from "../../shared_service/article.service";

@Component({
  selector: "app-article-form",
  templateUrl: "./article-form.component.html",
  styleUrls: ["./article-form.component.css"]
})
export class ArticleFormComponent implements OnInit {
  private article: Article;
  constructor(
    private _articleService: ArticleService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.article = this._articleService.getter();
  }

  processForm() {
    if (this.article.id == undefined) {
      this._articleService.createArticle(this.article).subscribe(
        article => {
          console.log(article);
          this._router.navigate(["/"]);
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this._articleService.updateArticle(this.article).subscribe(
        article => {
          console.log(article);
          this._router.navigate(["/"]);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
