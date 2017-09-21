import bookshelf from '../bookshelf';
import User from './user';

export default bookshelf.Model.extend({
  tableName: 'posts',
  author: function(){
    this.hasOne(User)
  }
});