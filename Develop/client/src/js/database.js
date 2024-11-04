import { openDB } from 'idb';

const initdb = async () => {
  openDB('jate', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('jate')) {
        db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
        console.log('jate database created');
      } else {
        console.log('jate database already exists');
      }
    },
  });
};

// Call initdb() to initialize the database when the app starts
initdb();

export const putDb = async (content) => {
  console.log('Put request to update the database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  await store.put({ id: 1, content });
  await tx.done;
  console.log('Data saved to the database', content);
};

export const getDb = async () => {
  console.log('Get request to retrieve data from the database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.get(1);
  const result = await request;
  console.log('Data retrieved from the database', result);
  return result?.content;
};
