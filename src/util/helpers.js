export const createAnswerSet = len =>
  [...Array(len).keys()].map(x => (++x).toString());

export const findByRange = (list, score) => {
  const checkRange = (min, max) => score >= min && score <= max;
  const found = list.filter(obj => checkRange(obj.range.min, obj.range.max));

  return found[0];
};

export const newArrayWithRemovedItem = (id, list) => {
  const index = list.indexOf(id);

  return index !== -1
    ? [...list.slice(0, index), ...list.slice(index + 1)]
    : list;
};

export const rand = n => Math.floor(Math.random() * n);

export const randomKey = arr => {
  const keys = Object.keys(arr);
  const index = rand(keys.length);

  return keys[index];
};

export const findById = (arr, id) => {
  const itemFound = arr && arr.length ? arr.filter(o => o.id === id)[0] : [];
  console.log('Item found', itemFound);
  return itemFound;
};

export const sortByKey = (arr, key, order = 'asc') =>
  arr.sort((a, b) => {
    const x = a[key];
    const y = b[key];
    let compare = 0;

    if (order === 'asc') {
      compare = x < y ? -1 : x > y ? 1 : 0;
    } else {
      compare = x > y ? -1 : x < y ? 1 : 0;
    }

    return compare;
  });

export const update = (state, mutations) => Object.assign({}, state, mutations);

export const updateItem = (arr, itemId, newItem) => {
  console.log(
    `UPDATE Q${itemId} in List(${arr.length} items) with `,
    newItem,
    typeof itemId
  );

  const updatedArray = arr.map(item =>
    item.id === itemId ? { ...item, ...newItem } : item
  );

  // console.table(updatedArray, ['id', 'answered']);

  return updatedArray;
};
