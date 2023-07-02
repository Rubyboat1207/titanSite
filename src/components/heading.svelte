<script lang="ts">
    export let subtitle: string;
    export let subHeading: string;
    export let subHeadingColor: string = '#FFFFFF';
    export let photopath: string;
</script>
<div class="background-photo" style="background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #2D3133 80vh), url({photopath}), lightgray 50% / cover no-repeat;">
    <div>
        <h1>Titan</h1>
        <h1>Robotics</h1>
    </div>
    {#if subtitle != ''}
        <h2>{subtitle}</h2>
    {/if}
    <h2 style="color: {subHeadingColor}">{subHeading}</h2>
</div>

<style>
    .background-photo {
        width: 100%;
        height: 85vh;
        display: flex;
        align-items: center;
        justify-content: start;
        flex-direction: column;
        text-align: center;
        background-repeat: repeat-x !important;
        background-size: cover !important;
    }

    .background-photo>div {
        margin-top: 70px;
    }

    .background-photo h1 {
        margin: 10px 0 10px;
        color: #22A2FF;
        text-align: center;
        text-shadow: 0px 7px 5px 0px #000;
        font-size: 96px;
        font-family: Josefin Sans, sans-serif;
        text-transform: uppercase;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

    }

    .background-photo h2 {
        text-align: center;
        text-shadow: 0px 7px 5px 0px #000;
        font-size: 73px;
        font-family: Josefin Sans, sans-serif;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
</style>