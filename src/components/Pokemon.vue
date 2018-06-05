<template>
  <div>
    <li>
      <div class="card">
        <img :src="pokemon.sprites.front_default" alt="pokemon sprite">
        <div class="container">
          <p><span>Name:</span> {{pokemon.name.toUpperCase()}}</p>
          <p><span>Type:</span> {{pokemon.types[0].type.name}}</p>
          <p><span>Ability:</span> {{pokemon.abilities[0].ability.name}}</p>
      
          <p><span>Moves:</span></p>
          <p class="moves">{{pokemon.moves[0].move.name}}</p>
          <p class="moves">{{pokemon.moves[1].move.name}}</p>
          <p class="moves">{{pokemon.moves[2].move.name}}</p>
          <p class="moves">{{pokemon.moves[3].move.name}}</p>
        </div>
      </div>
    </li>
  </div>
</template>

<script>

export default {
  props: ['pokemon']
};
</script>

<style>
img {
  max-width: 150%;
}

li {
  list-style: none;
  text-align: left;
}

p {
  line-height: 2px;
}

span {
  font-weight: bold;
}

/* card styling grabbed from https://www.w3schools.com/howto/howto_css_cards.asp */
.card {
/* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 10px;
  width: 20%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(237, 237, 237);
  border-radius: 10px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}

.moves {
  padding-left: 25px;
}

</style>
