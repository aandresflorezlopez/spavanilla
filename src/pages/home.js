// use template inside of french quotes

const Home = () => {
  const view = `
    <div class="characters">
      <article class="character-item">
        <a href="#/1/">
          <img src="image" alt="image name" />
          <h2>Character name </h2>
        </a>
      </article>
    <div>
  `;

  return view;
};

export default Home;
