// This class is immutable.
export class TwitterUser {

  private _id: number;
  private _name: string;
  private _email: string;
  private _screenName: string;
  private _location: string;
  private _description: string;
  private _url: string;
  private _followersCount: number;
  private _status: string;
  private _profileBackgroundColor: string;
  private _profileTextColor: string;
  private _profileUseBackgroundImage: string;
  private _friendsCount: number;
  private _createdAt: number;
  private _favoritesCount: number;
  private _profileBackgroundImageUrlHttps: string;
  private _profileBannerUrl: string;
  private _miniProfileImageURL: string;
  private _originalProfileImageURLHttps: string;


  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  get screenName(): string {
    return this._screenName;
  }

  get location(): string {
    return this._location;
  }

  get description(): string {
    return this._description;
  }

  get url(): string {
    return this._url;
  }

  get followersCount(): number {
    return this._followersCount;
  }

  get status(): string {
    return this._status;
  }

  get profileBackgroundColor(): string {
    return this._profileBackgroundColor;
  }

  get profileTextColor(): string {
    return this._profileTextColor;
  }

  get profileUseBackgroundImage(): string {
    return this._profileUseBackgroundImage;
  }

  get friendsCount(): number {
    return this._friendsCount;
  }

  get createdAt(): number {
    return this._createdAt;
  }

  get favoritesCount(): number {
    return this._favoritesCount;
  }

  get profileBackgroundImageUrlHttps(): string {
    return this._profileBackgroundImageUrlHttps;
  }

  get profileBannerUrl(): string {
    return this._profileBannerUrl;
  }

  get miniProfileImageURL(): string {
    return this._miniProfileImageURL;
  }

  get originalProfileImageURLHttps(): string {
    return this._originalProfileImageURLHttps;
  }
}
