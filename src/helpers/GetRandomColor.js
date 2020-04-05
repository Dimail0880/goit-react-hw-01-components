const getRandomColor = () => {
    const color = () => {
      return Math.floor(Math.random() * 255);
    };
    return `rgb(${color()},${color()},${color()})`;
  }
  export default getRandomColor