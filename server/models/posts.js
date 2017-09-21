import bookshelf from '../bookshelf';
import User from './User';

export default bookshelf.Model.extend({
  tableName: 'posts',
  author: function(){
    this.hasOne(User)
  }
});