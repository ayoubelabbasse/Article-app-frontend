import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Article } from "../article";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  private basedUrl: string = "http://localhost:8080/api";
  private headers = new Headers({ "content-Type": "application/json" });
  private options = new RequestOptions({ headers: this.headers });

  private article = new Article();

  constructor(private _http: Http) {}
  getArticles() {
    //return observables
    return this._http
      .get(this.basedUrl + "/articles", this.options)
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError(this.errorHandler));
  }

  getArticle(id: Number) {
    //return observables
    return this._http
      .get(this.basedUrl + "/article/" + id, this.options)
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError(this.errorHandler));
  }
  deleteArticle(id: Number) {
    //return observables
    return this._http
      .delete(this.basedUrl + "/article/" + id, this.options)
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError(this.errorHandler));
  }
  createArticle(article: Article) {
    //return observables
    return this._http
      .post(this.basedUrl + "/article", JSON.stringify(article), this.options)
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError(this.errorHandler));
  }

  updateArticle(article: Article) {
    //return observables
    return this._http
      .put(this.basedUrl + "/article/", JSON.stringify(article), this.options)
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError(this.errorHandler));
  }
  chercherArticles(motCle: string, page: Number, size: number) {
    return this._http
      .get(
        this.basedUrl +
          "/chercherArticles?mc=" +
          motCle +
          "&size=" +
          size +
          "&page=" +
          page,
        this.options
      )
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: Response) {
    return Observable.throw(error || "SERVER ERROR");
  }
  setter(article: Article) {
    this.article = article;
  }
  getter() {
    return this.article;
  }
}
