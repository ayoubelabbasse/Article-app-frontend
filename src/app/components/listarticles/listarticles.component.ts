import { Component, OnInit } from "@angular/core";
import { ArticleService } from "../../shared_service/article.service";
import { Article } from "../../article";
import { Router } from "@angular/router";

@Component({
  selector: "app-listarticles",
  templateUrl: "./listarticles.component.html",
  styleUrls: ["./listarticles.component.css"]
})
export class ListarticlesComponent implements OnInit {
  private articles: Article[];
  motCle: string = "";
  page: number = 1;
  size: number = 5;
  constructor(
    private _articleService: ArticleService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._articleService.getArticles().subscribe(
      articles => {
        console.log(articles);
        this.articles = articles;
      },
      error => {
        console.log(error);
      }
    );
  }
  deletearticle(article) {
    this._articleService.deleteArticle(article.id).subscribe(
      data => {
        this.articles.splice(this.articles.indexOf(article), 1);
      },
      error => {
        console.log(error);
      }
    );
  }
  updatearticle(article) {
    this._articleService.setter(article);
    this._router.navigate(["/op"]);
  }

  newarticle() {
    let article = new Article();
    this._articleService.setter(article);
    this._router.navigate(["/op"]);
  }
  chercher() {
    console.log(this.motCle);
    this._articleService
      .chercherArticles(this.motCle, this.page, this.size)
      .subscribe(
        articles => {
          console.log(articles);
          this.articles = articles;
        },
        error => {
          console.log(error);
        }
      );
  }
}
