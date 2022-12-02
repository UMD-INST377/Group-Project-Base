
function shapeDataForLineChart(array) {
    return array.reduce((collection, item) => {
      if (!collection[item.category]) {
        collection[item.category] = [item];
      } else {
        collection[item.category].push(item);
      }
      return collection;
    }, {});
  }
