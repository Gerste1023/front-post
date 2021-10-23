export class UserPostModel {
  public user_name: string;
  public user_email: string;
  public post_title: string;
  public post_body: string;

  constructor(name: string, email: string, title: string, body: string) {
    this.user_name = name;
    this.user_email = email;
    this.post_title = title;
    this.post_body = body;
  }
}
