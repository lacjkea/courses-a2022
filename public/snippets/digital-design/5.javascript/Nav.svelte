<script>
  let open = false;
  function toggle() {
    open = !open;
  }
</script>

<nav class="topNav">
  <button class="ham" on:click={toggle}>☰</button>
</nav>
<nav class="sideNav" class:showNav={open}>
  <button class="menuX" on:click={toggle}>X</button>
  <ul>
    <li><a class="menuLink" href="#home">Home</a></li>
    <li><a class="menuLink" href="#profile">Profile</a></li>
    <li><a class="menuLink" href="#about">About</a></li>
    <li><a class="menuLink" href="#contacts">Contacts</a></li>
  </ul>
</nav>

<style>
  .topNav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    background-color: #000000;
  }

  .ham {
    position: relative;
    width: 2rem;
    height: 2rem;
    margin-left: 0.5rem;
    background: none;
    border: none;
    cursor: pointer;
    color: white;
  }

  .menuX {
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 2rem;
    height: 2rem;
    margin-left: 0.5rem;
    background: none;
    border: none;
    cursor: pointer;
    color: white;
  }

  .sideNav {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 101;
    background: black;
    width: 300px;
    height: 100vh;
    overflow: hidden;
    color: white;
    /* hide the menu above the screen by default */
    transform: translateX(-100%);
    transition: transform 0.2s ease;
  }

  .showNav {
    transform: translateX(0);
  }

  .sideNav ul {
    width: 100%;
    height: 100%;
    list-style: none;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding-top: 5rem;
  }

  .sideNav ul li a {
    display: block;
    color: white;
    padding-bottom: 10px;
    margin-top: 1rem;
    border-bottom: 2px solid black;
    text-decoration: none;
    font-family: "Open Sans", sans-serif;
    font-size: 1.2rem;
  }

  .sideNav ul li a:hover,
  .sideNav ul li a:focus {
    border-bottom: 2px solid white;
  }
</style>
