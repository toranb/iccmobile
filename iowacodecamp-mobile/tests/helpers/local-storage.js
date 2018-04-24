import { Promise } from 'rsvp';
import { next } from '@ember/runloop';
import { waitUntil } from '@ember/test-helpers';

export function clearLocalStorage() {
  localStorage.clear();
  return new Promise((resolve) => {
    waitUntil(() => localStorage.getItem('reduxPersist:all') === null).then(() => {
      next(null, resolve);
    });
  });
}
