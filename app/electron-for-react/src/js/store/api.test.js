import api from './api';

test('sample', done => {
  api();
  setTimeout(() => {
    done();
  }, 1000);
});
