<script lang="ts">
  export let emoji: string;
</script>

<div class="square">
  <button on:click /> 
   <span>{emoji}</span> 
</div>

  <style>
  .square {
    display: flex;
    justify-content: center;
    align-items: center;
    background: yellow;
  }

  button {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  span {
    font-size: 5em;
  }
</style>
