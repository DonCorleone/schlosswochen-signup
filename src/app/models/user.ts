export class User {
  private id_token: any;
  private session_state: any;
  private access_token: any;
  private token_type: any;
  profile: any;
  private state: any;
  private refresh_token: any;
  private expires_at: number;
  private scope: any;


  get expires_in() {
    if (this.expires_at) {
      let now = Date.now() / 1000;
      return this.expires_at - now;
    }
    return undefined;
  }
  set expires_in(value) {
    let expires_in = value;
    if (typeof expires_in === 'number' && expires_in > 0) {
      let now = Date.now() / 1000;
      this.expires_at = now + expires_in;
    }
  }

  get expired() {
    let expires_in = this.expires_in;
    if (expires_in !== undefined) {
      return expires_in <= 0;
    }
    return undefined;
  }

  get scopes() {
    return (this.scope || "").split(" ");
  }

  toStorageString() {
    return JSON.stringify({
      id_token: this.id_token,
      session_state: this.session_state,
      access_token: this.access_token,
      refresh_token: this.refresh_token,
      token_type: this.token_type,
      scope: this.scope,
      profile: this.profile,
      expires_at: this.expires_at
    });
  }
}
