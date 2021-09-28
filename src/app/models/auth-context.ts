import { SimpleClaim } from './simple-claim';
import { UserProfile } from './user-profile';

export class AuthContext {
  claims: SimpleClaim[];
  userProfile: UserProfile;

  get isAdmin() {
    return !!this.claims && !!this.claims.find(c =>
      c.type === 'role' && c.value === 'Admin');
  }
}
