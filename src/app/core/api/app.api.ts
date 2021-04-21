import { environment } from 'src/environments/environment';

/**  Endpoint Principal */
export const API = environment.apiHost;

/** Endpoints */
export const POSTS = API + '/posts';
export const ALBUMS = API + '/albums';
export const PHOTOS = API + '/photos';
export const COMMENTS = API + '/comments';
export const TODOS = API + '/todos';
export const USERS = API + '/users';