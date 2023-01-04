export default function updateUniqueItems(map) {
  if (map.constructor.name !== 'Map') {
    throw new Error('cannot process');
  }
  for (const key of map.keys()) {
    if (map.get(key) === 1) {
      map.set(key, 100);
    }
  }
}
