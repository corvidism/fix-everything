<template>
    <button class="fix-button">Fix everything</button>
</template>

<style scoped>
.fix-button {
    cursor:pointer;
    color: white;
    font-family: sans-serif;
    font-size: 3rem;
    font-weight: bold;
    background-color: #232325;
    border: none;
    border-radius: 1em;
    line-height: 2em;
    padding:0 1em;
    transition: box-shadow 0.1s;
    box-shadow: 
        rgba(0, 0, 0, 0.51) 0px 19px 38px, 
        rgba(0, 0, 0, 0.22) 0px 15px 12px
}

.fix-button:active {
    background-color: #131314;
    box-shadow: 
        rgba(0, 0, 0, 0.51) 0px 9px 28px, 
        rgba(0, 0, 0, 0.22) 0px 5px 12px
}
</style>