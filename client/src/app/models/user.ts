export class User {
  public login: string;
  private avatar_url: string;
  private name: string;
  private company: string;
  private blog: string;
  private location: string;
  private email: string;
  private bio: string;
  private public_repos: string;
  private public_gists: string;


	public get $login(): string {
		return this.login;
	}


	public get $name(): string {
		return this.name;
	}


	public get $blog(): string {
		return this.blog;
	}


	public get $location(): string {
		return this.location;
	}


	public get $avatar_url(): string {
		return this.avatar_url;
	}

	public get $company(): string {
		return this.company;
	}

	public get $email(): string {
		return this.email;
	}

	public get $bio(): string {
		return this.bio;
	}

	public get $public_repos(): string {
		return this.public_repos;
	}

	public get $public_gists(): string {
		return this.public_gists;
	}


}
