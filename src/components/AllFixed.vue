

<template>
    <div class="all-fixed">
        <h1>DONE.</h1>
        <p>Everything's gonna be alright now.</p>
        <p class="try-again"><a @click.prevent="$emit('tryAgain')" href="">It's not all fixed yet :( I wanna try again.</a></p>
    </div>
</template>

<style scoped>

.all-fixed {
    max-width: 60rem;
    font-size: 2.5rem;
    text-align: center;
    text-shadow:  2px 2px 2px rgba(0, 0, 0, 0.08);
}

.all-fixed h1 {
    color: #fff;
    font-weight:bold;
}

.try-again {
    font-size: 0.8rem;
    margin-top:2rem;
}

a:visited {
    color: var(--linkColor);
}
</style>