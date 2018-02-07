export class Stackuser {

  private _badge_counts: any;
  private _account_id: number;
  private _is_employee: boolean;
  private _last_modified_date: number;
  private _last_access_date: number;
  private _age: number;
  private _reputation_change_year: number;
  private _reputation_change_quarter: number;
  private _reputation_change_week: number;
  private _reputation_change_day: number;
  private _reputation: number;
  private _creation_date: number;
  private _user_type: string;
  private _user_id: number;
  private _accept_rate: number;
  private _location: string;
  private _website_url: string;
  private _profile_image: string;
  private _display_name: string;


  get badge_counts(): any {
    return this._badge_counts;
  }

  get account_id(): number {
    return this._account_id;
  }

  get is_employee(): boolean {
    return this._is_employee;
  }

  get last_modified_date(): number {
    return this._last_modified_date;
  }

  get last_access_date(): number {
    return this._last_access_date;
  }

  get age(): number {
    return this._age;
  }

  get reputation_change_year(): number {
    return this._reputation_change_year;
  }

  get reputation_change_quarter(): number {
    return this._reputation_change_quarter;
  }

  get reputation_change_week(): number {
    return this._reputation_change_week;
  }

  get reputation_change_day(): number {
    return this._reputation_change_day;
  }

  get reputation(): number {
    return this._reputation;
  }

  get creation_date(): number {
    return this._creation_date;
  }

  get user_type(): string {
    return this._user_type;
  }

  get user_id(): number {
    return this._user_id;
  }

  get accept_rate(): number {
    return this._accept_rate;
  }

  get location(): string {
    return this._location;
  }

  get website_url(): string {
    return this._website_url;
  }

  get profile_image(): string {
    return this._profile_image;
  }

  get display_name(): string {
    return this._display_name;
  }
}
