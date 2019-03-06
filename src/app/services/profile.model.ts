export class Profile {
    id: string;
    name: string;
    alterEgo: string;
    likes: number;
    default: boolean;
    avatarUrl: string;
    avatarThumbnailUrl: string;
  
    constructor(hero: any = {}) {
      this.id = hero.id;
      this.name = hero.name || '';
      this.alterEgo = hero.alterEgo || '';
      this.likes = hero.likes || 0;
      this.default = hero.default || false;
      this.avatarUrl = hero.avatarUrl || '';
      this.avatarThumbnailUrl = hero.avatarThumbnailUrl || '';
    }

}
