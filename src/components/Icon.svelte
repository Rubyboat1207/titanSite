<script lang="ts">
    import type { IconColor, IconType } from "../scripts/icons";

    export let iconType: IconType;
    export let IconColor: IconColor;
</script>

<svelte:component this={iconType} color={IconColor.valueOf()} />