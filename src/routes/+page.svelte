<script lang="ts">
    import Icon from "../components/Icon.svelte";
    import Heading from "../components/heading.svelte";
    import Math from "../components/icons/math.svelte";
    import { IconColor } from "../scripts/icons";

</script>

<div>
    <Heading
        subHeading="5431"
        subtitle=""
        photopath="/src/assets/teamPhoto.png"
    />
    <Icon iconType={Math} IconColor={IconColor.Normal} />
    <div style="margin-bottom: 500vh;"></div>
</div>

<style lang="scss">
    
</style>