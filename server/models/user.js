import bookshelf from '../bookshelf';
import Posts from './posts';

export default bookshelf.Model.extend({
  tableName: 'users',
  posts: function() {
    return this.hasMany(Posts);
  }
});
