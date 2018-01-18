import {DatePipe} from '@angular/common';

export class User {

  private _login: string;
  private _avatar_url: string;
  private _name: string;
  private _company: string;
  private _blog: string;
  private _location: string;
  private _email: string;
  private _bio: string;
  private _public_repos: string;
  private _public_gists: string;
  private _url: string;
  private _html_url: string;
  private _followers: string;
  private _following: string;
  private _created_at: string;
  private _convdate: any;

  constructor() {
  }

  get created_at(): string {
    return this._created_at;
  }

  get followers(): string {
    return this._followers;
  }

  get following(): string {
    return this._following;
  }

  get login(): string {
    return this._login;
  }

  get avatar_url(): string {
    return this._avatar_url;
  }

  get name(): string {
    return this._name;
  }

  get company(): string {
    return this._company;
  }

  get blog(): string {
    return this._blog;
  }

  get location(): string {
    return this._location;
  }

  get email(): string {
    return this._email;
  }

  get bio(): string {
    return this._bio;
  }

  get public_repos(): string {
    return this._public_repos;
  }

  get public_gists(): string {
    return this._public_gists;
  }

  get url(): string {
    return this._url;
  }

  get html_url(): string {
    return this._html_url;
  }

}
